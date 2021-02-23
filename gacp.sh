#!/bin/bash
git add .;
git commit -m "$1";
echo "$2" | git push;

