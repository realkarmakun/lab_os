#!/bin/bash

> otchet.txt
ls -li $1 | sort -n >> otchet.txt
chmod 777 otchet.txt
ln otchet.txt ~
ln -s ~/OtherProjects/lab_os/z2/otchet.txt ~/Desktop

