# deep-freeze for Node.js

Recursively `Object.freeze()` objects.

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![License][license]][license-url]
[![Travis Build][travis-image]][travis-url]

[![NPM Statistics](https://nodei.co/npm/deep-freeze-node.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/deep-freeze-node/)

## Installation

`npm install deep-freeze-node`

## Usage Example

```javascript
var freeze = require("deep-freeze-node");

var person = {
    name: "John",
    surname: "Johnson",
    age: 26,
    address: {
        street: "1st Street",
        city: "Los Angeles",
        country: "USA"
    }
};

freeze(person);

person.name = "Jack";
person.surname = "Jackson";
person.nickname = "JJ";
person.age = 18;
person.address = {
    street: "Third Street",
    city: "San Francisco",
    country: "USA"
};
person.occupation = "Lawyer";

console.log(person.name);
console.log(person.surname);
console.log(person.nickname);
console.log(person.age);
console.log(person.address);
console.log(person.occupation);
```

***

```
John
Johnson
26
{ 
    street: "1st Street", 
    city: "Los Angeles", 
    country: "USA" 
}
undefined
undefined
```

## Tests

To run the test suite, first install the dependencies, then run `npm test`:

```bash
$ npm install
$ npm test
```

## License

Distributed under the [MIT License](LICENSE).

[npm-image]: https://img.shields.io/npm/v/deep-freeze-node.svg
[npm-url]: https://npmjs.org/package/deep-freeze-node
[downloads-image]: https://img.shields.io/npm/dm/deep-freeze-node.svg
[downloads-url]: https://npmjs.org/package/deep-freeze-node
[license]: https://img.shields.io/npm/l/deep-freeze-node.svg
[license-url]: https://github.com/AnatoliyGatt/deep-freeze-node/blob/master/LICENSE
[travis-image]: https://img.shields.io/travis/AnatoliyGatt/deep-freeze-node/master.svg
[travis-url]: https://travis-ci.org/AnatoliyGatt/deep-freeze-node