#!/bin/bash

echo "Объединение и переименование файлов";
cat a.txt b.txt > c.txt;
cat c.txt;
read -n 1 -s -r -p "Нажмите любую кнопку для продолжения"
mv a.txt fina.txt;
mv b.txt finb.txt;
echo "Задание выполнено";
read -n 1 -s -r -p "Нажмите любую кнопку для продолжения"
