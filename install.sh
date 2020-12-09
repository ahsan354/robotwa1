#!/data/data/com.termux/files/usr/bin/bash

echo "\nInstallasi iseh mlaku sabar  ..."
apt update

echo "\nSedang menginstall package seng kanggo wa... sabar tunggunen wae"
apt install -y wget nodejs tesseract

echo "\nMenginstall dependency package.json"
npm i

echo "\nKetikan terakhir... sabar yo"
npm i -g cwebp

echo "\nWes rampung terinstall! terus ketik: node index.js ben enek bot e!"

exit
