[![NPM version](https://badge.fury.io/js/haml-coffee-loader.svg)](http://badge.fury.io/js/haml-coffee-loader)

# haml-coffee-loader

Automatically compile and cache [haml-coffee](https://github.com/netzpirat/haml-coffee) (.hamlc) files.

## Installation

This package is available on npm as:

```
npm install haml-coffee-loader
```

## Usage

Example:

```
require('haml-coffee-loader').register();
var template = require('./template.hamlc');
var html = template({ foo : 42 });
```

## License

(Apache 2)

Copyright (c) 2014-2015 Scott Brady.