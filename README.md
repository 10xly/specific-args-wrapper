# specific-args-wrapper

Create a wrapper function that always called the specified function with specific arguments.

## Installation

```bash
npm install specific-args-wrapper
```

## Usage

```js
var specificArgsWrapper = require("specific-args-wrapper")

var add = require("countingup").add // add function for exmaple

var return3 = specificArgsWrapper(add, [1, 2])

console.log(return3()) // 3
```

## Licence

[EGPSL10X-1.0](https://github.com/10xly/licence)