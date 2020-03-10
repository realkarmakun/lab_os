#!/bin/bash

if test -e $1; then
    if test -r $1; then echo "Файл читаем"; fi
    if test -w $1; then echo "Файл записываем"; fi
    if test -x $1; then echo "Файл исполняем"; fi
else
 echo "Файл не найден"
fi
