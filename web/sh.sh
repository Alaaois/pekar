# /bin/bash
for i in `find $1 -type f`
do
    mv $i `echo $i | cut -d@ -f1`
done