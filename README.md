
# npm-rusn

[![Build Status](https://travis-ci.org/icetemple/npm-rusn.svg?branch=master)](https://travis-ci.org/icetemple/npm-rusn)
[![Coverage Status](https://coveralls.io/repos/github/icetemple/npm-rusn/badge.svg)](https://coveralls.io/github/icetemple/npm-rusn)


Portable from python package small library for getting russian text with singular and plural forms


## Instalation

`npm install rusn`


## Example


    appleForms = ['яблоко', 'яблока', 'яблок']
    
    rusNGetText(1, appleForms)
    >> 'яблоко'

    rusNGetText(10, appleForms)
    >> 'яблок'
