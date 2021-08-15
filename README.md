
# rusn

[![ci](https://github.com/icetemple/npm-rusn/actions/workflows/ci.yml/badge.svg)](https://github.com/icetemple/npm-rusn/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/icetemple/npm-rusn/badge.svg)](https://coveralls.io/github/icetemple/npm-rusn)

Small library without deps for getting russian text with singular and plural forms

## Installation

`npm install rusn`


## Usage

```js
import { rusPluralize } from "rusn";

const appleForms = ["яблоко", "яблока", "яблок"];

console.log(rusPluralize(1, appleForms)); // яблоко

console.log(rusPluralize(10, appleForms)); // яблок
```
