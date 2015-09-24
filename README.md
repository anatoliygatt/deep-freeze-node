![deep-freeze-node Logo][logo]

Recursively `Object.freeze()` objects.

[![NPM Package Version][npm-package-version-badge]][npm-package-url]
[![NPM Package License][npm-package-license-badge]][npm-package-license-url]
[![NPM Package Downloads][npm-package-downloads-badge]][npm-package-url]
[![devDependencies Status][devDependencies-status-badge]][devDependencies-status-page-url]

[![Node Version][node-version-badge]][node-downloads-page-url]
[![Travis CI Build Status][travis-ci-build-status-badge]][travis-ci-build-status-page-url]
[![Code Climate Status][code-climate-status-badge]][code-climate-status-page-url]
[![Code Climate Test Coverage Status][code-climate-test-coverage-status-badge]][code-climate-test-coverage-status-page-url]
[![Inch CI Documentation Coverage Status][inch-ci-documentation-coverage-status-badge]][inch-ci-documentation-coverage-status-page-url]

[![NPM Package Statistics][npm-package-statistics-badge]][npm-package-url]

## Installation

`npm install deep-freeze-node`

## Usage Example

```javascript
var freeze = require('deep-freeze-node');

var person = {
    name: 'John',
    surname: 'Johnson',
    age: 26,
    address: {
        street: '1st Street',
        city: 'Los Angeles',
        country: 'USA'
    },
    vehicles: [
        'BMW',
        'Ferrari',
        'Lamborghini'
    ]
};

person = freeze(person);

person.name = 'Jack';
person.surname = 'Jackson';
person.nickname = 'JJ';
person.age = 18;
person.address = {
    street: 'Third Street',
    city: 'San Francisco',
    country: 'USA'
};
person.vehicles = [
    'Toyota'
];
person.occupation = 'Lawyer';

console.log(person.name);
console.log(person.surname);
console.log(person.nickname);
console.log(person.age);
console.log(person.address);
console.log(person.vehicles);
console.log(person.occupation);
```

***

```javascript
John
Johnson
undefined
26
{ 
    street: '1st Street', 
    city: 'Los Angeles', 
    country: 'USA' 
}
[
    'BMW',
    'Ferrari',
    'Lamborghini'
]
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

[logo]: https://cldup.com/eoIsKXU7s7.png

[npm-package-url]: https://npmjs.org/package/deep-freeze-node

[npm-package-version-badge]: https://img.shields.io/npm/v/deep-freeze-node.svg?style=flat-square

[npm-package-license-badge]: https://img.shields.io/npm/l/deep-freeze-node.svg?style=flat-square
[npm-package-license-url]: http://opensource.org/licenses/MIT

[npm-package-downloads-badge]: https://img.shields.io/npm/dm/deep-freeze-node.svg?style=flat-square

[devDependencies-status-badge]: https://david-dm.org/AnatoliyGatt/deep-freeze-node/dev-status.svg?style=flat-square
[devDependencies-status-page-url]: https://david-dm.org/AnatoliyGatt/deep-freeze-node#info=devDependencies

[node-version-badge]: https://img.shields.io/node/v/deep-freeze-node.svg?style=flat-square
[node-downloads-page-url]: https://nodejs.org/en/download/

[travis-ci-build-status-badge]: https://img.shields.io/travis/AnatoliyGatt/deep-freeze-node.svg?style=flat-square
[travis-ci-build-status-page-url]: https://travis-ci.org/AnatoliyGatt/deep-freeze-node

[code-climate-status-badge]: https://img.shields.io/codeclimate/github/AnatoliyGatt/deep-freeze-node.svg?style=flat-square
[code-climate-status-page-url]: https://codeclimate.com/github/AnatoliyGatt/deep-freeze-node

[code-climate-test-coverage-status-badge]: https://img.shields.io/codeclimate/coverage/github/AnatoliyGatt/deep-freeze-node.svg?style=flat-square
[code-climate-test-coverage-status-page-url]: https://codeclimate.com/github/AnatoliyGatt/deep-freeze-node/coverage

[inch-ci-documentation-coverage-status-badge]: https://inch-ci.org/github/AnatoliyGatt/deep-freeze-node.svg?style=flat-square
[inch-ci-documentation-coverage-status-page-url]: https://inch-ci.org/github/AnatoliyGatt/deep-freeze-node

[npm-package-statistics-badge]: https://nodei.co/npm/deep-freeze-node.png?downloads=true&downloadRank=true&stars=true