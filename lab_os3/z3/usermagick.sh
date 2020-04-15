#!/bin/bash

if ! id $1 ; then
    echo '!!! Пользователь не существует'
else
    echo '!!! Пользователь существует'
        if [ "$(whoami)" == $1 ]; then
            echo '!!! Пользователь залогинен'
        else
            echo '!!! Пользователь не залогинен'
        fi
fi
getent passwd | cut -d : -f 1,3,4,6 | sort -t: -n -k2


