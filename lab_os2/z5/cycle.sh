#!/bin/bash

for i in $1/*.txt
do
ls -d $PWD/$i
cat $i
done
