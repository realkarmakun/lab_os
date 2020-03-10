#!/bin/bash


#A=1
#B=2
read -n 1 -p "Введите первое число: " A 
echo ""
read -n 1 -p "Введите второе число: " B 
echo ""
if test $A -gt $B; then 
    echo "Первое больше второго"
elif test $A -lt $B; then 
    echo "Второе число больше"
else 
    echo "Числа равны"
fi
