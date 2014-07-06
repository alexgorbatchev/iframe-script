# iframe-script

[![GitTip](http://img.shields.io/gittip/alexgorbatchev.svg)](https://www.gittip.com/alexgorbatchev/)
[![Dependency status](https://david-dm.org/alexgorbatchev/iframe-script.svg)](https://david-dm.org/alexgorbatchev/iframe-script)
[![devDependency Status](https://david-dm.org/alexgorbatchev/iframe-script/dev-status.svg)](https://david-dm.org/alexgorbatchev/iframe-script#info=devDependencies)
[![Build Status](https://secure.travis-ci.org/alexgorbatchev/iframe-script.svg?branch=master)](https://travis-ci.org/alexgorbatchev/iframe-script)

[![NPM](https://nodei.co/npm/iframe-script.svg)](https://npmjs.org/package/iframe-script)

A basic helper module to execute a function inside an IFRAME. This is helpful if you are building a service script that is meant to be executed on 3rd party sites and you want to avoid any possible conflicts.

## Installation

    npm install iframe-script

## Usage

    var iframeScript = require('iframe-script');

    // this function gets stringified and executed inside an iframe,
    // it doesn't preserve the scope
    function frameFunction(opts) {
      return {
        printFoo: function() {
          console.log(opts.foo);
        }
      }
    }

    iframeScript(frameFunction, {foo: 'hello world'}, function(err, results) {
      results.printFoo();
    });

## API

### iframeScript(fn, opts, callback)

- `fn` is a `function(opts)` that gets passed into the `iframe`. The function gets stringified and it's expects to return results that are then passed into the `callback`
- `opts` object that is passed by reference as first argument into the `fn`.
- `callback` is a `function(err, results)` that gets called when `fn` is executed.

## Testing

    npm test # runs test suite once
    npm run dev # starts karma in watch mode

# License

The MIT License (MIT)

Copyright (c) 2014 Alex Gorbatchev

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
