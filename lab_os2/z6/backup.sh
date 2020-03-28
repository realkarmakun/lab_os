#!/bin/bash

# Аргументы командной строки: ./backup.sh [РЕЖИМ] ИСХОДНЫЙ_КАТАЛОГ (РЕЗЕРВНЫЙ_КАТАЛОГ)
# Возможные режимы (обязательный аргумент):
# rep - Замена файлов (файлы из исходного каталога замещают файлы резервного)
# add - Добавление файлов (если  в  резервном  каталоге  файла  не  существует,  то  он  добавляется  из исходного, прочие файлы не заменяются)
# del - Удаление файлов (если в резервном каталоге существует файл, которого нет в исходном, то он удаляется)
# syn - Синхронизация файлов (сравниваются даты последней модификации двух файлов, более новый файл копируется в резервный каталог)


#------------------------
#Разбираемся с аргументами и даем им читаемые имена

_mode=$1
_original_dir=$2

if test -z $3; then
    _backup_dir="${_original_dir##*/}""_bak"
else
    _backup_dir=$3
fi

mkdir -p $_backup_dir

# Тут описываем работу всех режимов

case $_mode in
    rep)
        cp -r $_original_dir/* $_backup_dir
        ;;
    add)
        for _file in $_original_dir/*
        do
            cp -r -n $_file $_backup_dir
        done
        ;;
    del)
         for _file in $_backup_dir/*
         do
            _filename="${_file##*/}"
            if [ ! -f $_original_dir/$_filename ]; then
                if [ ! -d $_original_dir/$_filename ]; then
                    rm -rf $_file
                fi
            fi
         done
        ;;
    syn)
        for _file in $_original_dir/*
        do
            _filename="${_file##*/}"
            if test $_file -nt $_backup_dir/$_filename; then
                cp -r $_file $_backup_dir
            fi
        done
        ;;
esac
