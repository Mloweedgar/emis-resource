# emis-resource

[![Build Status](https://travis-ci.org/CodeTanzania/emis-resource.svg?branch=develop)](https://travis-ci.org/CodeTanzania/emis-resource)
[![Dependencies Status](https://david-dm.org/CodeTanzania/emis-resource/status.svg?style=flat-square)](https://david-dm.org/CodeTanzania/emis-resource)
[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/CodeTanzania/emis-resource/tree/develop)

A representation of item(i.e materials, services, staff, assets etc.) and it stock that may be consumed or made available in emergency(or disaster) management(or event).

[Demo](https://emis-resource.herokuapp.com/v1/items)

## Domain Model

![EMIS Resource Domain Model](https://raw.githubusercontent.com/CodeTanzania/emis-resource/develop/specifications/resource.model.png)

## Requirements

- [NodeJS v8.11.1+](https://nodejs.org)
- [Npm v5.6.0+](https://www.npmjs.com/)
- [MongoDB v3.4.10+](https://www.mongodb.com/)
- [Mongoose v5.1.2+](https://github.com/Automattic/mongoose)

## Installation

```sh
npm install @codetanzania/emis-resource --save
```

## Usage

```js
const { app } = require('@codetanzania/emis-resource');
app.start((error) => { ... });
```

## Demo
- [View Demo](https://emis-resource.herokuapp.com/v1/items)
- [View apidoc](https://codetanzania.github.io/emis-resource/)


## Testing

- Clone this repository

- Install all development dependencies

```sh
npm install
```

- Run example

```sh
npm run dev
```

- Then run test

```sh
npm test
```

## Contribute

It will be nice, if you open an issue first so that we can know what is going on, then, fork this repo and push in your ideas. Do not forget to add a bit of test(s) of what value you adding.


## References
- [Resource](https://en.wikipedia.org/wiki/Resource)
- [Inventory](https://en.wikipedia.org/wiki/Inventory)
- [Resource Management](https://en.wikipedia.org/wiki/Resource_management)
- [Disaster](https://en.wikipedia.org/wiki/Disaster)
- [FEMA - Emergency Response Resource Requirements](https://www.fema.gov/media-library/assets/documents/89520)
- [Unit of Measure Codes ](https://www.doa.la.gov/osp/Vendorcenter/docs/unitofmeasurecodes.pdf)
- [UOM for Line Items](https://www.urmc.rochester.edu/purchasing/documents/um.pdf)

## Licence

The MIT License (MIT)

Copyright (c) 2018 CodeTanzania & Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
