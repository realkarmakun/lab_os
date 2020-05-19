#!/bin/bash

> otchet.txt
ls -lip $1| grep -v / | sort -n >> otchet.txt
chmod 777 otchet.txt
ln otchet.txt ~
ln -s ~/OtherProjects/lab_os/z2/otchet.txt ~/Desktop

