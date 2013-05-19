[![Build Status](https://travis-ci.org/doug-martin/number-extended.png?branch=master)](https://travis-ci.org/doug-martin/number-extended)

[![browser support](https://ci.testling.com/doug-martin/number-extended.png)](http://ci.testling.com/doug-martin/number-extended)

# number-extended

`number-extended` is a Javascript library that can contains different number utilities.

`number-extended` can be used as a monad library that be be incorporated into [`extended`](https://github.com/doug-martin/extended) or used standalone.

```javascript
var num = require("number-extended");

num.round(10.000009, 5); //10.00001
```

Or

```javascript
var myextended = require("extended")
	.register(require("number-extended"));

num.round(10.000009, 5); //10.00001
```

## Installation

```
npm install number-extended
```

Or [download the source](https://raw.github.com/doug-martin/number-extended/master/index.js) ([minified](https://raw.github.com/doug-martin/number-extended/master/number-extended.min.js))

## Usage

**`round`**
Rounds a number to the specified places.

```javascript
//as a function
num.round(10.000009, 2); //10
num.round(10.000009, 5); //10.00001
num.round(10.0009, 3); //10.001
num.round(10.0009, 2); //10
num.round(10.0009, 3); //10.001

//as a monad
num(10.000009).round(2).value(); //10
num(10.000009).round(5).value(); //10.00001
num(10.0009).round(3).value(); //10.001
num(10.0009).round(2).value(); //10
num(10.0009).round(3).value(); //10.001
```

You can also provide an optional increment argument which rounds in the number in the specified increment.

```javascript
console.log(num.round(10.01, 2, 0.02)); //10.02
console.log(num.round(10.02, 2, 0.02)); //10.02
console.log(num.round(10.03, 2, 0.02)); //10.04
console.log(num.round(10.04, 2, 0.02)); //10.04
console.log(num.round(10.05, 2, 0.02)); //10.06
console.log(num.round(10.06, 2, 0.02)); //10.06
console.log(num.round(10.07, 2, 0.02)); //10.08
console.log(num.round(10.08, 2, 0.02)); //10.08
console.log(num.round(10.09, 2, 0.02)); //10.01
```


**`roundCeil`**

Rounds a number to the specified places, rounding up.

```javascript
//as a function
num.roundCeil(10.000001, 2); //10.01
num.roundCeil(10.000002, 5); //10.00001
num.roundCeil(10.0003, 3); //10.001
num.roundCeil(10.0004, 2); //10.01
num.roundCeil(10.0005, 3); //10.001
num.roundCeil(10.0002, 2); //10.0

//as a monad
num(10.000001).roundCeil(2); //10.01
num(10.000002).roundCeil(5); //10.00001
num(10.0003).roundCeil(3); //10.001
num(10.0004).roundCeil(2); //10.01
num(10.0005).roundCeil(3); //10.001
num(10.0002).roundCeil(2); //10.0
```