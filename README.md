[![Build Status](https://travis-ci.org/icetemple/npm-rusn.svg?branch=master)](https://travis-ci.org/icetemple/npm-rusn)

# npm-rusn
Portable from python package small library for getting russian text with singular and plural forms


## Instalation

`npm install rusn`


## Example


    appleForms = ['яблоко', 'яблока', 'яблок']
    
    rusNGetText(1, appleForms)
    >> 'яблоко'

    rusNGetText(10, appleForms)
    >> 'яблок'
