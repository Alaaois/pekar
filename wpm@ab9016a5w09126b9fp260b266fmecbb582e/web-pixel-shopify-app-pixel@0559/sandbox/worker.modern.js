function initWebPixel() {(function(shopify) {
    shopify.extend('WebPixel::Render', function (api) {
        var analytics=api.analytics,browser=api.browser,init=api.init;
        var e=api._pixelInfo?api._pixelInfo.runtimeContext:null,n=api._pixelInfo?api._pixelInfo.type:null;analytics.subscribe("all_standard_events",(function(i){var l,o;l=i.name,o=i,browser.localStorage.getItem("shopify-pixel-mode").then((function(i){"debug"===i&&console.log(`[shopify-pixel][${n}][${e}] ${l}`,o)})).catch((function(){}))}));
    });

})(self.webPixelsManager.createShopifyExtend('shopify-app-pixel', 'app'));
}
(()=>{var e={747:function(e,t,r){var i,n,o;!function(a,s){"use strict";n=[r(18)],void 0===(o="function"==typeof(i=function(e){var t=/(^|@)\S+:\d+/,r=/^\s*at .*(\S+:\d+|\(native\))/m,i=/^(eval@)?(\[native code])?$/;return{parse:function(e){if(void 0!==e.stacktrace||void 0!==e["opera#sourceloc"])return this.parseOpera(e);if(e.stack&&e.stack.match(r))return this.parseV8OrIE(e);if(e.stack)return this.parseFFOrSafari(e);throw new Error("Cannot parse given Error object")},extractLocation:function(e){if(-1===e.indexOf(":"))return[e];var t=/(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/[()]/g,""));return[t[1],t[2]||void 0,t[3]||void 0]},parseV8OrIE:function(t){return t.stack.split("\n").filter((function(e){return!!e.match(r)}),this).map((function(t){t.indexOf("(eval ")>-1&&(t=t.replace(/eval code/g,"eval").replace(/(\(eval at [^()]*)|(,.*$)/g,""));var r=t.replace(/^\s+/,"").replace(/\(eval code/g,"(").replace(/^.*?\s+/,""),i=r.match(/ (\(.+\)$)/);r=i?r.replace(i[0],""):r;var n=this.extractLocation(i?i[1]:r),o=i&&r||void 0,a=["eval","<anonymous>"].indexOf(n[0])>-1?void 0:n[0];return new e({functionName:o,fileName:a,lineNumber:n[1],columnNumber:n[2],source:t})}),this)},parseFFOrSafari:function(t){return t.stack.split("\n").filter((function(e){return!e.match(i)}),this).map((function(t){if(t.indexOf(" > eval")>-1&&(t=t.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,":$1")),-1===t.indexOf("@")&&-1===t.indexOf(":"))return new e({functionName:t});var r=/((.*".+"[^@]*)?[^@]*)(?:@)/,i=t.match(r),n=i&&i[1]?i[1]:void 0,o=this.extractLocation(t.replace(r,""));return new e({functionName:n,fileName:o[0],lineNumber:o[1],columnNumber:o[2],source:t})}),this)},parseOpera:function(e){return!e.stacktrace||e.message.indexOf("\n")>-1&&e.message.split("\n").length>e.stacktrace.split("\n").length?this.parseOpera9(e):e.stack?this.parseOpera11(e):this.parseOpera10(e)},parseOpera9:function(t){for(var r=/Line (\d+).*script (?:in )?(\S+)/i,i=t.message.split("\n"),n=[],o=2,a=i.length;o<a;o+=2){var s=r.exec(i[o]);s&&n.push(new e({fileName:s[2],lineNumber:s[1],source:i[o]}))}return n},parseOpera10:function(t){for(var r=/Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,i=t.stacktrace.split("\n"),n=[],o=0,a=i.length;o<a;o+=2){var s=r.exec(i[o]);s&&n.push(new e({functionName:s[3]||void 0,fileName:s[2],lineNumber:s[1],source:i[o]}))}return n},parseOpera11:function(r){return r.stack.split("\n").filter((function(e){return!!e.match(t)&&!e.match(/^Error created at/)}),this).map((function(t){var r,i=t.split("@"),n=this.extractLocation(i.pop()),o=i.shift()||"",a=o.replace(/<anonymous function(: (\w+))?>/,"$2").replace(/\([^)]*\)/g,"")||void 0;o.match(/\(([^)]*)\)/)&&(r=o.replace(/^[^(]+\(([^)]*)\)$/,"$1"));var s=void 0===r||"[arguments not available]"===r?void 0:r.split(",");return new e({functionName:a,args:s,fileName:n[0],lineNumber:n[1],columnNumber:n[2],source:t})}),this)}}})?i.apply(t,n):i)||(e.exports=o)}()},18:function(e,t){var r,i,n;!function(o,a){"use strict";i=[],void 0===(n="function"==typeof(r=function(){function e(e){return e.charAt(0).toUpperCase()+e.substring(1)}function t(e){return function(){return this[e]}}var r=["isConstructor","isEval","isNative","isToplevel"],i=["columnNumber","lineNumber"],n=["fileName","functionName","source"],o=r.concat(i,n,["args"],["evalOrigin"]);function a(t){if(t)for(var r=0;r<o.length;r++)void 0!==t[o[r]]&&this["set"+e(o[r])](t[o[r]])}a.prototype={getArgs:function(){return this.args},setArgs:function(e){if("[object Array]"!==Object.prototype.toString.call(e))throw new TypeError("Args must be an Array");this.args=e},getEvalOrigin:function(){return this.evalOrigin},setEvalOrigin:function(e){if(e instanceof a)this.evalOrigin=e;else{if(!(e instanceof Object))throw new TypeError("Eval Origin must be an Object or StackFrame");this.evalOrigin=new a(e)}},toString:function(){var e=this.getFileName()||"",t=this.getLineNumber()||"",r=this.getColumnNumber()||"",i=this.getFunctionName()||"";return this.getIsEval()?e?"[eval] ("+e+":"+t+":"+r+")":"[eval]:"+t+":"+r:i?i+" ("+e+":"+t+":"+r+")":e+":"+t+":"+r}},a.fromString=function(e){var t=e.indexOf("("),r=e.lastIndexOf(")"),i=e.substring(0,t),n=e.substring(t+1,r).split(","),o=e.substring(r+1);if(0===o.indexOf("@"))var s=/@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(o,""),c=s[1],l=s[2],u=s[3];return new a({functionName:i,args:n||void 0,fileName:c,lineNumber:l||void 0,columnNumber:u||void 0})};for(var s=0;s<r.length;s++)a.prototype["get"+e(r[s])]=t(r[s]),a.prototype["set"+e(r[s])]=function(e){return function(t){this[e]=Boolean(t)}}(r[s]);for(var c=0;c<i.length;c++)a.prototype["get"+e(i[c])]=t(i[c]),a.prototype["set"+e(i[c])]=function(e){return function(t){if(r=t,isNaN(parseFloat(r))||!isFinite(r))throw new TypeError(e+" must be a Number");var r;this[e]=Number(t)}}(i[c]);for(var l=0;l<n.length;l++)a.prototype["get"+e(n[l])]=t(n[l]),a.prototype["set"+e(n[l])]=function(e){return function(t){this[e]=String(t)}}(n[l]);return a})?r.apply(t,i):r)||(e.exports=n)}()},700:function(e,t,r){var i;!function(n,o){"use strict";var a="function",s="undefined",c="object",l="string",u="model",d="name",b="type",f="vendor",m="version",p="architecture",w="console",h="mobile",g="tablet",v="smarttv",y="wearable",x="embedded",k="Amazon",S="Apple",O="ASUS",R="BlackBerry",E="Google",N="Huawei",A="LG",T="Microsoft",B="Motorola",L="Samsung",C="Sharp",M="Sony",P="Xiaomi",I="Zebra",U="Facebook",D="Chromium OS",j="Mac OS",F=function(e){for(var t={},r=0;r<e.length;r++)t[e[r].toUpperCase()]=e[r];return t},q=function(e,t){return typeof e===l&&-1!==W(t).indexOf(W(e))},W=function(e){return e.toLowerCase()},z=function(e,t){if(typeof e===l)return e=e.replace(/^\s\s*/,""),typeof t===s?e:e.substring(0,350)},V=function(e,t){for(var r,i,n,s,l,u,d=0;d<t.length&&!l;){var b=t[d],f=t[d+1];for(r=i=0;r<b.length&&!l&&b[r];)if(l=b[r++].exec(e))for(n=0;n<f.length;n++)u=l[++i],typeof(s=f[n])===c&&s.length>0?2===s.length?typeof s[1]==a?this[s[0]]=s[1].call(this,u):this[s[0]]=s[1]:3===s.length?typeof s[1]!==a||s[1].exec&&s[1].test?this[s[0]]=u?u.replace(s[1],s[2]):o:this[s[0]]=u?s[1].call(this,u,s[2]):o:4===s.length&&(this[s[0]]=u?s[3].call(this,u.replace(s[1],s[2])):o):this[s]=u||o;d+=2}},_=function(e,t){for(var r in t)if(typeof t[r]===c&&t[r].length>0){for(var i=0;i<t[r].length;i++)if(q(t[r][i],e))return"?"===r?o:r}else if(q(t[r],e))return"?"===r?o:r;return e},$={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},G={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[m,[d,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[m,[d,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[d,m],[/opios[\/ ]+([\w\.]+)/i],[m,[d,"Opera Mini"]],[/\bopr\/([\w\.]+)/i],[m,[d,"Opera"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[d,m],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[m,[d,"UCBrowser"]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[m,[d,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[m,[d,"WeChat"]],[/konqueror\/([\w\.]+)/i],[m,[d,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[m,[d,"IE"]],[/yabrowser\/([\w\.]+)/i],[m,[d,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[d,/(.+)/,"$1 Secure Browser"],m],[/\bfocus\/([\w\.]+)/i],[m,[d,"Firefox Focus"]],[/\bopt\/([\w\.]+)/i],[m,[d,"Opera Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[m,[d,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[m,[d,"Dolphin"]],[/coast\/([\w\.]+)/i],[m,[d,"Opera Coast"]],[/miuibrowser\/([\w\.]+)/i],[m,[d,"MIUI Browser"]],[/fxios\/([-\w\.]+)/i],[m,[d,"Firefox"]],[/\bqihu|(qi?ho?o?|360)browser/i],[[d,"360 Browser"]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[d,/(.+)/,"$1 Browser"],m],[/(comodo_dragon)\/([\w\.]+)/i],[[d,/_/g," "],m],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[d,m],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[d],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[d,U],m],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[d,m],[/\bgsa\/([\w\.]+) .*safari\//i],[m,[d,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[m,[d,"Chrome Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[d,"Chrome WebView"],m],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[m,[d,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[d,m],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[m,[d,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[m,d],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[d,[m,_,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[d,m],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[d,"Netscape"],m],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[m,[d,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[d,m],[/(cobalt)\/([\w\.]+)/i],[d,[m,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[p,"amd64"]],[/(ia32(?=;))/i],[[p,W]],[/((?:i[346]|x)86)[;\)]/i],[[p,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[p,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[p,"armhf"]],[/windows (ce|mobile); ppc;/i],[[p,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[p,/ower/,"",W]],[/(sun4\w)[;\)]/i],[[p,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[p,W]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[u,[f,L],[b,g]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[u,[f,L],[b,h]],[/\((ip(?:hone|od)[\w ]*);/i],[u,[f,S],[b,h]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[u,[f,S],[b,g]],[/(macintosh);/i],[u,[f,S]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[u,[f,C],[b,h]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[u,[f,N],[b,g]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[u,[f,N],[b,h]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[u,/_/g," "],[f,P],[b,h]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[u,/_/g," "],[f,P],[b,g]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[u,[f,"OPPO"],[b,h]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[u,[f,"Vivo"],[b,h]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[u,[f,"Realme"],[b,h]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[u,[f,B],[b,h]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[u,[f,B],[b,g]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[u,[f,A],[b,g]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[u,[f,A],[b,h]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[u,[f,"Lenovo"],[b,g]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[u,/_/g," "],[f,"Nokia"],[b,h]],[/(pixel c)\b/i],[u,[f,E],[b,g]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[u,[f,E],[b,h]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[u,[f,M],[b,h]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[u,"Xperia Tablet"],[f,M],[b,g]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[u,[f,"OnePlus"],[b,h]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[u,[f,k],[b,g]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[u,/(.+)/g,"Fire Phone $1"],[f,k],[b,h]],[/(playbook);[-\w\),; ]+(rim)/i],[u,f,[b,g]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[u,[f,R],[b,h]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[u,[f,O],[b,g]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[u,[f,O],[b,h]],[/(nexus 9)/i],[u,[f,"HTC"],[b,g]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[f,[u,/_/g," "],[b,h]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[u,[f,"Acer"],[b,g]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[u,[f,"Meizu"],[b,h]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[f,u,[b,h]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[f,u,[b,g]],[/(surface duo)/i],[u,[f,T],[b,g]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[u,[f,"Fairphone"],[b,h]],[/(u304aa)/i],[u,[f,"AT&T"],[b,h]],[/\bsie-(\w*)/i],[u,[f,"Siemens"],[b,h]],[/\b(rct\w+) b/i],[u,[f,"RCA"],[b,g]],[/\b(venue[\d ]{2,7}) b/i],[u,[f,"Dell"],[b,g]],[/\b(q(?:mv|ta)\w+) b/i],[u,[f,"Verizon"],[b,g]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[u,[f,"Barnes & Noble"],[b,g]],[/\b(tm\d{3}\w+) b/i],[u,[f,"NuVision"],[b,g]],[/\b(k88) b/i],[u,[f,"ZTE"],[b,g]],[/\b(nx\d{3}j) b/i],[u,[f,"ZTE"],[b,h]],[/\b(gen\d{3}) b.+49h/i],[u,[f,"Swiss"],[b,h]],[/\b(zur\d{3}) b/i],[u,[f,"Swiss"],[b,g]],[/\b((zeki)?tb.*\b) b/i],[u,[f,"Zeki"],[b,g]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[f,"Dragon Touch"],u,[b,g]],[/\b(ns-?\w{0,9}) b/i],[u,[f,"Insignia"],[b,g]],[/\b((nxa|next)-?\w{0,9}) b/i],[u,[f,"NextBook"],[b,g]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[f,"Voice"],u,[b,h]],[/\b(lvtel\-)?(v1[12]) b/i],[[f,"LvTel"],u,[b,h]],[/\b(ph-1) /i],[u,[f,"Essential"],[b,h]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[u,[f,"Envizen"],[b,g]],[/\b(trio[-\w\. ]+) b/i],[u,[f,"MachSpeed"],[b,g]],[/\btu_(1491) b/i],[u,[f,"Rotor"],[b,g]],[/(shield[\w ]+) b/i],[u,[f,"Nvidia"],[b,g]],[/(sprint) (\w+)/i],[f,u,[b,h]],[/(kin\.[onetw]{3})/i],[[u,/\./g," "],[f,T],[b,h]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[u,[f,I],[b,g]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[u,[f,I],[b,h]],[/smart-tv.+(samsung)/i],[f,[b,v]],[/hbbtv.+maple;(\d+)/i],[[u,/^/,"SmartTV"],[f,L],[b,v]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[f,A],[b,v]],[/(apple) ?tv/i],[f,[u,"Apple TV"],[b,v]],[/crkey/i],[[u,"Chromecast"],[f,E],[b,v]],[/droid.+aft(\w)( bui|\))/i],[u,[f,k],[b,v]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[u,[f,C],[b,v]],[/(bravia[\w ]+)( bui|\))/i],[u,[f,M],[b,v]],[/(mitv-\w{5}) bui/i],[u,[f,P],[b,v]],[/Hbbtv.*(technisat) (.*);/i],[f,u,[b,v]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[f,z],[u,z],[b,v]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[b,v]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[f,u,[b,w]],[/droid.+; (shield) bui/i],[u,[f,"Nvidia"],[b,w]],[/(playstation [345portablevi]+)/i],[u,[f,M],[b,w]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[u,[f,T],[b,w]],[/((pebble))app/i],[f,u,[b,y]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[u,[f,S],[b,y]],[/droid.+; (glass) \d/i],[u,[f,E],[b,y]],[/droid.+; (wt63?0{2,3})\)/i],[u,[f,I],[b,y]],[/(quest( 2| pro)?)/i],[u,[f,U],[b,y]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[f,[b,x]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[u,[b,h]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[u,[b,g]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[b,g]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[b,h]],[/(android[-\w\. ]{0,9});.+buil/i],[u,[f,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[m,[d,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[m,[d,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[d,m],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[m,d]],os:[[/microsoft (windows) (vista|xp)/i],[d,m],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[d,[m,_,$]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[d,"Windows"],[m,_,$]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[m,/_/g,"."],[d,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[d,j],[m,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[m,d],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[d,m],[/\(bb(10);/i],[m,[d,R]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[m,[d,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[m,[d,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[m,[d,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[m,[d,"watchOS"]],[/crkey\/([\d\.]+)/i],[m,[d,"Chromecast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[d,D],m],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[d,m],[/(sunos) ?([\w\.\d]*)/i],[[d,"Solaris"],m],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[d,m]]},H=function(e,t){if(typeof e===c&&(t=e,e=o),!(this instanceof H))return new H(e,t).getResult();var r=typeof n!==s&&n.navigator?n.navigator:o,i=e||(r&&r.userAgent?r.userAgent:""),u=r&&r.userAgentData?r.userAgentData:o,d=t?function(e,t){var r={};for(var i in e)t[i]&&t[i].length%2==0?r[i]=t[i].concat(e[i]):r[i]=e[i];return r}(G,t):G;return this.getBrowser=function(){var e,t={};return t.name=o,t.version=o,V.call(t,i,d.browser),t.major=typeof(e=t.version)===l?e.replace(/[^\d\.]/g,"").split(".")[0]:o,r&&r.brave&&typeof r.brave.isBrave==a&&(t.name="Brave"),t},this.getCPU=function(){var e={};return e.architecture=o,V.call(e,i,d.cpu),e},this.getDevice=function(){var e={};return e.vendor=o,e.model=o,e.type=o,V.call(e,i,d.device),!e.type&&u&&u.mobile&&(e.type=h),"Macintosh"==e.model&&r&&typeof r.standalone!==s&&r.maxTouchPoints&&r.maxTouchPoints>2&&(e.model="iPad",e.type=g),e},this.getEngine=function(){var e={};return e.name=o,e.version=o,V.call(e,i,d.engine),e},this.getOS=function(){var e={};return e.name=o,e.version=o,V.call(e,i,d.os),!e.name&&u&&"Unknown"!=u.platform&&(e.name=u.platform.replace(/chrome os/i,D).replace(/macos/i,j)),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return i},this.setUA=function(e){return i=typeof e===l&&e.length>350?z(e,350):e,this},this.setUA(i),this};H.VERSION="1.0.34",H.BROWSER=F([d,m,"major"]),H.CPU=F([p]),H.DEVICE=F([u,f,b,w,h,v,g,y,x]),H.ENGINE=H.OS=F([d,m]),typeof t!==s?(e.exports&&(t=e.exports=H),t.UAParser=H):r.amdO?(i=function(){return H}.call(t,r,t,e))===o||(e.exports=i):typeof n!==s&&(n.UAParser=H);var X=typeof n!==s&&(n.jQuery||n.Zepto);if(X&&!X.ua){var Y=new H;X.ua=Y.getResult(),X.ua.get=function(){return Y.getUA()},X.ua.set=function(e){Y.setUA(e);var t=Y.getResult();for(var r in t)X.ua[r]=t[r]}}}("object"==typeof window?window:this)}},t={};function r(i){var n=t[i];if(void 0!==n)return n.exports;var o=t[i]={exports:{}};return e[i].call(o.exports,o,o.exports,r),o.exports}r.amdO={},(()=>{"use strict";const e=Symbol.for("RemoteUi::Retain"),t=Symbol.for("RemoteUi::Release"),i=Symbol.for("RemoteUi::RetainedBy");class n{constructor(){this.memoryManaged=new Set}add(t){this.memoryManaged.add(t),t[i].add(this),t[e]()}release(){for(const e of this.memoryManaged)e[i].delete(this),e[t]();this.memoryManaged.clear()}}const o="_@f";function a(r){const a=new Map,s=new Map,c=new Map;return{encode:function e(t){if("object"==typeof t){if(null==t)return[t];if(t instanceof ArrayBuffer)return[t];const r=[];if(Array.isArray(t)){return[t.map((t=>{const[i,n=[]]=e(t);return r.push(...n),i})),r]}return[Object.keys(t).reduce(((i,n)=>{const[o,a=[]]=e(t[n]);return r.push(...a),{...i,[n]:o}}),{}),r]}if("function"==typeof t){if(a.has(t)){const e=a.get(t);return[{[o]:e}]}const e=r.uuid();return a.set(t,e),s.set(e,t),[{[o]:e}]}return[t]},decode:l,async call(r,o){const a=new n,c=s.get(r);if(null==c)throw new Error("You attempted to call a function that was already released.");try{const r=(u=c,Boolean(u&&u[e]&&u[t])?[a,...c[i]]:[a]);return await c(...l(o,r))}finally{a.release()}var u},release(e){const t=s.get(e);t&&(s.delete(e),a.delete(t))},terminate(){a.clear(),s.clear(),c.clear()}};function l(n,a){if("object"==typeof n){if(null==n)return n;if(n instanceof ArrayBuffer)return n;if(Array.isArray(n))return n.map((e=>l(e,a)));if(o in n){const o=n["_@f"];if(c.has(o))return c.get(o);let s=0,l=!1;const u=()=>{s-=1,0===s&&(l=!0,c.delete(o),r.release(o))},d=()=>{s+=1},b=new Set(a),f=(...e)=>{if(l)throw new Error("You attempted to call a function that was already released.");if(!c.has(o))throw new Error("You attempted to call a function that was already revoked.");return r.call(o,e)};Object.defineProperties(f,{[t]:{value:u,writable:!1},[e]:{value:d,writable:!1},[i]:{value:b,writable:!1}});for(const e of b)e.add(f);return c.set(o,f),f}return Object.keys(n).reduce(((e,t)=>({...e,[t]:l(n[t],a)})),{})}return n}}function s(){return`${c()}-${c()}-${c()}-${c()}`}function c(){return Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)}const l="production",u="0.0.349",d="ab9016a5w09126b9fp260b266fmecbb582e";async function b(e,t=""){if(e.includes(self.location.origin)&&!e.match(/\/\.well-known\/shopify\/monorail\/unstable\/produce_batch/))return!1;const r=new self.Blob([t],{type:"text/plain"});try{return self.fetch(e,{method:"POST",keepalive:!0,body:r}),!0}catch{return!1}}function f(){try{return self instanceof DedicatedWorkerGlobalScope}catch(e){return!1}}var m=r(700),p=r(747);class w extends Error{constructor(...e){super(...e),Error.captureStackTrace&&Error.captureStackTrace(this,w)}}class h extends Error{constructor(...e){super(...e),this.message="Excessive Stacktrace: May indicate infinite loop forming"}}const g={development:"https://web-pixels-manager.myshopify.io/bugsnag",production:"https://notify.bugsnag.com",test:"https://localhost"};function v(e,t,r,i=!0){try{const n={...i?Object.getOwnPropertyDescriptor(e,t):{},...r};return Object.defineProperty(e,t,n)}catch(n){return e}}class y extends Error{constructor(...e){super(...e),this.name="InsecureUrlError"}}class x extends Error{constructor(...e){super(...e),this.name="InsecureUrlError"}}function k(){const e=XMLHttpRequest.prototype.open;return XMLHttpRequest.prototype.open=function(t,r){const i=new URL(r);if("https:"!==i.protocol)throw new x(`URL must be secure (HTTPS): ${i.href}`);if(i.href.includes(self.location.origin))throw new x(`Request are not allowed to the same origin: ${i.href}`);e.apply(this,arguments)},XMLHttpRequest}const S={Request:!1,Response:!1,Headers:!1,XMLHttpRequest:!1,XMLHttpRequestEventTarget:!1,XMLHttpRequestUpload:!1},O={BarcodeDetector:!0,BroadcastChannel:!0,Cache:!0,CustomEvent:!0,FormData:!0,ImageData:!0,NetworkInformation:!0,ServiceWorkerRegistration:!0,WebSocket:!0,Browser:!0,WorkerBrowser:!0,MessageChannel:!0,MessagePort:!0,crypto:!0,Crypto:!0,CryptoKey:!0,SubtleCrypto:!0,TextDecoder:!0,TextDecoderStream:!0,TextEncoder:!0,TextEncoderStream:!0,Request:!1,Response:!1,Headers:!1,indexedDB:!0,IDBCursor:!0,IDBCursorWithValue:!0,IDBDatabase:!0,IDBFactory:!0,IDBIndex:!0,IDBKeyRange:!0,IDBObjectStore:!0,IDBOpenDBRequest:!0,IDBRequest:!0,IDBTransaction:!0,IDBVersionChangeEvent:!0,Navigator:!0,navigator:!0,Notification:!0,NotificationEvent:!0,EventSource:!0,WebGL2RenderingContext:!0,WebGLActiveInfo:!0,WebGLBuffer:!0,WebGLFramebuffer:!0,WebGLProgram:!0,WebGLQuery:!0,WebGLRenderbuffer:!0,WebGLRenderingContext:!0,WebGLSampler:!0,WebGLShader:!0,WebGLShaderPrecisionFormat:!0,WebGLSync:!0,WebGLTexture:!0,WebGLTransformFeedback:!0,WebGLUniformLocation:!0,WebGLVertexArrayObject:!0,Path2D:!0,Worker:!0,WorkerLocation:!0,WorkerNavigator:!0,ServiceWorker:!0,ServiceWorkerContainer:!0,XMLHttpRequest:!0,XMLHttpRequestEventTarget:!0,XMLHttpRequestUpload:!0,ArrayBuffer:!1,Uint8Array:!0,Int8Array:!0,Uint16Array:!0,Int16Array:!0,Uint32Array:!0,Int32Array:!0,Float32Array:!0,Float64Array:!0,Uint8ClampedArray:!0,BigUint64Array:!0,BigInt64Array:!0,DataView:!0,PushSubscriptionOptions:!0,PushSubscription:!0,PushManager:!0,Permissions:!0,PermissionStatus:!0,PeriodicSyncManager:!0,PaymentInstruments:!0,NavigatorUAData:!0,BackgroundFetchRegistration:!0,BackgroundFetchRecord:!0,BackgroundFetchManager:!0,WritableStreamDefaultWriter:!0,WritableStreamDefaultController:!0,WritableStream:!0,ReadableStreamDefaultReader:!0,ReadableStreamDefaultController:!0,ReadableStreamBYOBRequest:!0,ReadableStreamBYOBReader:!0,ReadableStream:!0,ReadableByteStreamController:!0,RTCEncodedVideoFrame:!0,RTCEncodedAudioFrame:!0,RTCDataChannel:!0,RTCTransformEvent:!0,RTCRtpScriptTransformer:!0,OffscreenCanvasRenderingContext2D:!0,OffscreenCanvas:!0,FontFace:!0,FontFaceSet:!0,FileReaderSync:!0,FileReader:!0,FileList:!0,File:!0,FileSystemDirectoryHandle:!0,FileSystemFileHandle:!0,FileSystemHandle:!0,FileSystemWritableFileStream:!0,FileSystemSyncAccessHandle:!0,webkitRequestFileSystem:!0,webkitRequestFileSystemSync:!0,webkitResolveLocalFileSystemSyncURL:!0,webkitResolveLocalFileSystemURL:!0,DOMStringList:!0,DOMRectReadOnly:!0,DOMRect:!0,DOMQuad:!0,DOMPointReadOnly:!0,DOMPoint:!0,DOMMatrixReadOnly:!0,DOMMatrix:!0,DOMException:!0,CompressionStream:!0,Atomics:!0,WebAssembly:!0,AudioData:!0,EncodedAudioChunk:!0,EncodedVideoChunk:!0,ImageTrack:!0,ImageTrackList:!0,VideoColorSpace:!0,VideoFrame:!0,AudioDecoder:!0,AudioEncoder:!0,ImageDecoder:!0,VideoDecoder:!0,VideoEncoder:!0,AudioTrackConfiguration:!0,VideoTrackConfiguration:!0,Lock:!0,LockManager:!0,WebTransport:!0,WebTransportBidirectionalStream:!0,WebTransportDatagramDuplexStream:!0,WebTransportError:!0,Serial:!0,SerialPort:!0,USB:!0,USBAlternateInterface:!0,USBConfiguration:!0,USBConnectionEvent:!0,USBDevice:!0,USBEndpoint:!0,USBInTransferResult:!0,USBInterface:!0,USBIsochronousInTransferPacket:!0,USBIsochronousInTransferResult:!0,USBIsochronousOutTransferPacket:!0,USBIsochronousOutTransferResult:!0,USBOutTransferResult:!0};function R(e,t){let r=e;do{Object.getOwnPropertyNames(r).filter((e=>e in t&&!1!==t[e])).forEach((e=>{try{let i;"object"==typeof t[e]?(i=r[e],R(i,t[e])):i=!0===t[e]?void 0:t[e],v(r,e,{value:i,configurable:!1,enumerable:!1,writable:!1},!1)}catch(i){}})),r=Object.getPrototypeOf(r)}while(r!==Object.prototype)}function E(e,t=self){var r;R(t,{...e?O:S,fetch:(r=t.fetch,Object.freeze(String.prototype),Object.freeze(Request.prototype),Object.freeze(URL.prototype),v(self,"String",{writable:!1,configurable:!1}),v(self,"Request",{writable:!1,configurable:!1}),v(self,"URL",{writable:!1,configurable:!1}),(e,t)=>{const i=e instanceof Request?e:new Request(e),n=new URL(i.url);if("https:"!==n.protocol)throw new y(`URL must be secure (HTTPS): ${n.href}`);if(n.href.includes(self.location.origin)&&!n.href.match(/\/\.well-known\/shopify\/monorail\/unstable\/produce_batch/))throw new y(`Request are not allowed to the same origin: ${n.href}`);return r(i,{...t})}),XMLHttpRequest:k()})}function N(e){let t=e;return{update:async function(e,r){try{t=r(),t=await e()}catch(i){console.error(i)}return t},getRemote:async function(e){try{t=await e()}catch(r){console.error(r)}return t},getValue:()=>t}}function A(e,t,r){const i=N(""),n={get:function(){return i.getRemote(e),i.getValue()},set:function(e){const n=e.split(";").map((e=>e.trim())).find((e=>e.startsWith("domain="))),o=(null==n?void 0:n.split("=")[1])||"";if(!(r.filter((e=>new RegExp(`^\\.?${e}$`).test(o))).length>0)){const r=i.getValue();i.update((()=>t(e)),(()=>function(e,t){const r=e.split("; ").reduce(((e,t)=>{const[r,i]=t.split("=");return i&&(e[r]=i),e}),{}),i=t.split(";")[0],[n,o]=i.split("=");return r[n]=o,Object.entries(r).map((([e,t])=>`${e}=${t}`)).join("; ")}(r,e)))}},configurable:!1,enumerable:!1};return v(document,"cookie",n),{cache:i,definition:n,initialize:()=>i.getRemote(e)}}function T(e){const t=N(""),r={get:function(){return t.getRemote(e),t.getValue()},configurable:!1,enumerable:!1,writeable:!1};return v(window,"origin",r),{cache:t,definition:r,initialize:()=>t.getRemote(e)}}function B(e){const t=N(""),r={get:()=>(t.getRemote(e),t.getValue()),configurable:!1,enumerable:!1,writeable:!1};return v(document,"referrer",r),{cache:t,definition:r,initialize:()=>t.getRemote(e)}}function L(e,t,r){const i=function(e){const t=new Map,r={initialize:async()=>{const r=await e.length()||0;for(let i=0;i<r;i++){const r=await e.key(i)||"",n=await e.getItem(r);n&&t.set(r,n)}},getItem:e=>t.get(e)||null,setItem(r,i){e.setItem(r,i),t.set(r,i)},removeItem(r){e.removeItem(r),t.delete(r)},clear(){e.clear(),t.clear()},get length(){return t.size},key(e){const r=[...t.keys()],[i]=r.filter(((t,r)=>r===e));return i||null}};return r}(r),n={get:()=>i,configurable:!1,enumerable:!1,writeable:!1};return v(e,t,n),{definition:n,initialize:async()=>{await i.initialize()}}}function C(e){return L(window,"localStorage",e.localStorage)}function M(e){return L(window,"sessionStorage",e.sessionStorage)}class P extends Error{constructor(...e){super(...e),this.message="Invalid Extension Point"}}const I=function(){let e={call:()=>{},replace:()=>{},expose:()=>{},callable:()=>{},terminate:()=>{}},t="unknown";try{const r=f();t=r?"worker":"iframe";const i=r?self:function({targetOrigin:e="*"}={}){if("undefined"==typeof self||null==self.parent)throw new Error("This does not appear to be a child iframe, because there is no parent window.");const{parent:t}=self,r=()=>t.postMessage("remote-ui::ready",e);"complete"===document.readyState?r():document.addEventListener("readystatechange",(()=>{"complete"===document.readyState&&r()}));const i=new WeakMap;return{postMessage(r,i){t.postMessage(r,e,i)},addEventListener(e,r){const n=e=>{e.source===t&&r(e)};i.set(r,n),self.addEventListener(e,n)},removeEventListener(e,t){const r=i.get(t);null!=r&&(i.delete(t),self.removeEventListener(e,r))}}}();e=function(e,{uuid:t=s,createEncoder:r=a,callable:i}={}){let o=!1,c=e;const l=new Map,u=new Map,d=function(e,t){let r;if(null==t){if("function"!=typeof Proxy)throw new Error("You must pass an array of callable methods in environments without Proxies.");const t=new Map;r=new Proxy({},{get(r,i){if(t.has(i))return t.get(i);const n=e(i);return t.set(i,n),n}})}else{r={};for(const i of t)Object.defineProperty(r,i,{value:e(i),writable:!1,configurable:!0,enumerable:!0})}return r}(p,i),b=r({uuid:t,release(e){f(3,[e])},call(e,r,i){const n=t(),o=w(n,i),[a,s]=b.encode(r);return f(5,[n,e,a],s),o}});return c.addEventListener("message",m),{call:d,replace(e){const t=c;c=e,t.removeEventListener("message",m),e.addEventListener("message",m)},expose(e){for(const t of Object.keys(e)){const r=e[t];"function"==typeof r?l.set(t,r):l.delete(t)}},callable(...e){if(null!=i)for(const t of e)Object.defineProperty(d,t,{value:p(t),writable:!1,configurable:!0,enumerable:!0})},terminate(){f(2,void 0),h(),c.terminate&&c.terminate()}};function f(e,t,r){o||c.postMessage(t?[e,t]:[e],r)}async function m(e){const{data:t}=e;if(null!=t&&Array.isArray(t))switch(t[0]){case 2:h();break;case 0:{const e=new n,[i,o,a]=t[1],s=l.get(o);try{if(null==s)throw new Error(`No '${o}' method is exposed on this endpoint`);const[t,r]=b.encode(await s(...b.decode(a,[e])));f(1,[i,void 0,t],r)}catch(r){const{name:e,message:t,stack:n}=r;throw f(1,[i,{name:e,message:t,stack:n}]),r}finally{e.release()}break}case 1:{const[e]=t[1];u.get(e)(...t[1]),u.delete(e);break}case 3:{const[e]=t[1];b.release(e);break}case 6:{const[e]=t[1];u.get(e)(...t[1]),u.delete(e);break}case 5:{const[e,i,n]=t[1];try{const t=await b.call(i,n),[r,o]=b.encode(t);f(6,[e,void 0,r],o)}catch(r){const{name:t,message:i,stack:n}=r;throw f(6,[e,{name:t,message:i,stack:n}]),r}break}}}function p(e){return(...r)=>{if(o)return Promise.reject(new Error("You attempted to call a function on a terminated web worker."));if("string"!=typeof e&&"number"!=typeof e)return Promise.reject(new Error(`Can’t call a symbol method on a remote endpoint: ${e.toString()}`));const i=t(),n=w(i),[a,s]=b.encode(r);return f(0,[i,e,a],s),n}}function w(e,t){return new Promise(((r,i)=>{u.set(e,((e,n,o)=>{if(null==n)r(o&&b.decode(o,t));else{const e=new Error;Object.assign(e,n),i(e)}}))}))}function h(){var e;o=!0,l.clear(),u.clear(),null===(e=b.terminate)||void 0===e||e.call(b),c.removeEventListener("message",m)}}(i,{callable:["webPixelApi","internalApi"]}),e.expose({initialize:function(t){return new Promise(((r,i)=>{(async()=>{try{const[n,o]=await Promise.all([e.call.webPixelApi(),e.call.internalApi()]);try{const e=f();if(e&&(n.browser.sendBeacon=b),E(e),!e){const e=await o.cookieRestrictedDomains();await function(e,t,r){const i=[A(e.cookie.get,e.cookie.set,r).initialize(),T(t.self.origin.get).initialize(),B(t.document.referrer.get).initialize(),C(e).initialize(),M(e).initialize()];return Promise.allSettled?Promise.allSettled(i):Promise.all(i)}(n.browser,o,e),self.document.title=t}Object.defineProperty(self,"webPixelsManager",{value:{createShopifyExtend:()=>({extend:(e,t)=>{if("WebPixel::Render"!==e)throw new P;try{t.call(n,n),r({status:"success",hashVersion:d,sandboxUrl:self.location.href||"unknown"})}catch(i){r({status:"error",error:i,errorLocation:"extend",hashVersion:d,sandboxUrl:self.location.href||"unknown"})}}})},enumerable:!0,writable:!1});try{self.initWebPixel()}catch(i){r({status:"error",error:i,errorLocation:"initWebPixel",hashVersion:d,sandboxUrl:self.location.href||"unknown"})}}catch(i){r({status:"error",error:i,errorLocation:"initialize/retrievedApi",hashVersion:d,sandboxUrl:self.location.href||"unknown"})}}catch(i){r({status:"error",error:i,errorLocation:"initialize",hashVersion:d,sandboxUrl:self.location.href||"unknown"})}})()}))}})}catch(r){return((e,t)=>{try{var r,i,n;if(null!=t&&null!==(r=t.options)&&void 0!==r&&r.sampleRate&&!function(e){if(e<=0||e>100)throw new Error("Invalid sampling percent");return 100*Math.random()<=e}(t.options.sampleRate))return;const s={severity:"error",context:"",unhandled:!0,library:"sandbox",...t},c=function(t){try{return new m(t).getResult()}catch(e){return{ua:"",browser:{name:"",version:"",major:""},engine:{name:"",version:""},os:{name:"",version:""},device:{model:"",type:"",vendor:""},cpu:{architecture:""}}}}(s.userAgent||(null===(i=self.navigator)||void 0===i?void 0:i.userAgent));let b={errorClass:null==e?void 0:e.name,message:null==e?void 0:e.message,stacktrace:[],type:"browserjs"};try{b=function(e){if(t=e,!Boolean(t)||!(Boolean(t.stack)||Boolean(t.stacktrace)||Boolean(t["opera#sourceloc"]))||"string"!=typeof(t.stack||t.stacktrace||t["opera#sourceloc"])||t.stack===`${t.name}: ${t.message}`)throw new Error("Error incompatible with error-stack-parser");var t;const r=p.parse(e).reduce(((e,t)=>{const r=function(e){const t={file:e.fileName,method:(r=e.functionName,/^global code$/i.test(r||"")?"global code":r),lineNumber:e.lineNumber,columnNumber:e.columnNumber};var r;return t.lineNumber&&t.lineNumber>-1&&!t.file&&!t.method&&(t.file="global code"),t}(t);try{return"{}"===JSON.stringify(r)?e:e.concat(r)}catch(i){return e}}),[]);return{errorClass:null==e?void 0:e.name,message:null==e?void 0:e.message,stacktrace:r,type:"browserjs"}}(e)}catch(o){try{b=function(e,t){let r="";const i={lineNumber:"1",columnNumber:"1",method:t.context,file:"https://cdn.shopify.com/sab9016a5w09126b9fp260b266fmecbb582em.js"};if(e.stackTrace||e.stack||e.description){r=e.stack.split("\n")[0];const t=e.stack.match(/([0-9]+):([0-9]+)/);if(t&&t.length>2&&(i.lineNumber=t[1],i.columnNumber=t[2],parseInt(i.lineNumber,10)>1e5))throw new h}return{errorClass:(null==e?void 0:e.name)||r,message:(null==e?void 0:e.message)||r,stacktrace:[i],type:"browserjs"}}(e,s)}catch(a){if(a instanceof h)return}}const f=g[l];if(!f)return;fetch(f,{method:"POST",headers:{"Content-Type":"application/json","Bugsnag-Api-Key":"bcbc9f6762da195561967577c2d74ff8","Bugsnag-Payload-Version":"5"},body:JSON.stringify({payloadVersion:5,notifier:{name:"web-pixel-manager",version:u,url:"-"},events:[{exceptions:[b],context:s.context,severity:s.severity,unhandled:s.unhandled,app:{version:u},device:{manufacturer:c.device.vendor,model:c.device.model,osName:c.os.name,osVersion:c.os.version,browserName:c.browser.name,browserVersion:c.browser.version},metaData:{app:{library:s.library,browserTarget:"modern",env:l,hashVersion:d,hashVersionSandbox:s.hashVersionSandbox||"N/A",sandboxUrl:s.sandboxUrl||"N/A"},device:{userAgent:s.userAgent||(null===(n=self.navigator)||void 0===n?void 0:n.userAgent),renderingEngineName:c.engine.name,renderingEngineVersion:c.engine.version},request:{shopId:s.shopId,shopUrl:self.location.href,pixelId:s.pixelId,pixelType:s.pixelType,runtimeContext:s.runtimeContext},"Additional Notes":{initConfig:JSON.stringify(s.initConfig),notes:s.notes}}}]})}).catch((()=>{}))}catch(s){}})(r,{context:`refactor/createSandbox/${t}`}),{endpoint:e}}return{endpoint:e}}();self.webPixelsManagerSandbox=I})()})();
