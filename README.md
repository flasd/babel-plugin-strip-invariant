# babel-plugin-strip-invariant
Babel plugin to remove [invariant](https://github.com/zertosh/invariant) arguments not needed during production builds.

[![Build Status](https://travis-ci.org/husscode/babel-plugin-strip-invariant.svg?branch=master)](https://travis-ci.org/husscode/babel-plugin-strip-invariant) 
[![Coverage Status](https://coveralls.io/repos/github/husscode/babel-plugin-strip-invariant/badge.svg?branch=master)](https://coveralls.io/github/husscode/babel-plugin-strip-invariant?branch=master) 
[![npm version](https://badge.fury.io/js/babel-plugin-strip-invariant.svg)](https://www.npmjs.com/package/babel-plugin-strip-invariant) 
[![npm downloads per month](https://img.shields.io/npm/dm/babel-plugin-strip-invariant.svg)](https://www.npmjs.com/package/babel-plugin-strip-invariant)

## Why is this necessary?
When using invariant, the actual detailed messages do not get minified away by default as they should. That happens because the minifier doesn't know you won't use the messages anymore.

This plugin solves that by removing all non-essential arguments from invariant calls.

## Installation and Setup
Install the latest version of babel-plugin-strip-invariant:
```
npm install babel-plugin-strip-invariant --save-dev
```
Inside your .babelrc, configure this plugin to run only when building for production:
```json
{
    "env": {
        "production": {
            "plugins": ["babel-plugin-strip-invariant"]
        }
    }
}
```
That's it! No more invariant messages cluttering production code.

## Customization
Since invariant implementation is pretty small, maybe you wish to implement it yourself instead of relying on one more dependency. For that use case, you can customize how this plugin works:

#### Pragma
You can use a function with a name different from `invariant`.
```json
{
    "env": {
        "production": {
            "plugins": [
                ["babel-plugin-strip-invariant", { "pragma": "myFunc" }]
            ]
        }
    }
}
```
Than, when babel runs:
```javascript
// source
myFunc(essentialArg, minifyAway, thisToo);

// after transpilation
myFunc(essentialArg);
```

#### ArgCount
You can specify the number of arguments to keep.
```json
{
    "env": {
        "production": {
            "plugins": [
                ["babel-plugin-strip-invariant", { "argCount": 2 }]
            ]
        }
    }
}
```

Than, when babel runs:
```javascript
// source
invariant(essentialArg, anotherEssentialArg, minifyAway, thisToo);

// after transpilation
invariant(essentialArg, anotherEssentialArg);
```

You can mix both options!

That's it! If you've liked this, consider giving it a star!

### Copyright & License

Copyright (c) 2018 [Marcel de Oliveira Coelho](https://github.com/husscode) under the [MIT License](https://github.com/husscode/babel-plugin-strip-invariant/blob/master/LICENSE). Go Crazy. :rocket:
