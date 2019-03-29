# FizzBuzz Challenge using Javascript

Fizzbuzz is a group word game for children to teach them about division. It’s a nice game for kids that will help them familiarize division. The rules are so simple, but force players to quickly analyze a number in several different ways.

The rules:
1. If the number is divisible by 3, the person doesn’t say the number, instead, they say “Fizz!”.
2. If the number contains a 5, the player must say “Buzz!”.
3. Similarly, if the number is divisible by 3 and 5  they must say “FizzBuzz!”.

These fizzes and buzzes combine together — for example, instead of 35, the player will say “Fizz, fizz, buzz!”, because the number contains a 5, is divisible by 5, and is divisible by 7.

Fizzbuzz game was written in different programming languages since it is a good exercise for beginners. Obviously we will make a program that will simulate the fizzbuzz game using Javascript.

## Learning objective
To write Unit tests with Jasmine
To write Acceptance tests with Jasmine-jQuery
To add HTML elements and get user data
To modify the DOM using jQuery
To deploy your code using GH-Pages
For the web interface there is this User story

## Getting Started

### User Story

As an individual
So that I can check a number when playing FizzBuzz
I would like to be able to enter a number in a field, click a button and see
the output according to the FizzBuzz rules.

## Setting up the Project

## JS Test Boilerplate 0.1 (WIP)
[![Build Status](https://travis-ci.org/CraftAcademy/karma-jquery-jasmine_boilerplate.svg?branch=master)](https://travis-ci.org/CraftAcademy/karma-jquery-jasmine_boilerplate)
[![Coverage Status](https://coveralls.io/repos/github/CraftAcademy/karma-jquery-jasmine_boilerplate/badge.svg?branch=master)](https://coveralls.io/github/CraftAcademy/karma-jquery-jasmine_boilerplate?branch=master)

#### Dependencies
* [Jasmine](https://github.com/jasmine/jasmine)
* [Karma](https://github.com/karma-runner/karma)
  - [Karma Jasmine](https://github.com/karma-runner/karma-jasmine)
  - [Karma Jasmine JQuery](https://github.com/bessdsv/karma-jasmine-jquery)
  - [Karma Chrome Launcher](https://github.com/karma-runner/karma-chrome-launcher)
  - [Karma Coverage](https://github.com/karma-runner/karma-coverage)
  - [Karma Coveralls](https://github.com/caitp/karma-coveralls)
  - [Karma Spec Reporter](https://github.com/mlex/karma-spec-reporter)

#### Services
* [Travis](https://travis-ci.org/) for Continuous Integration
* [Coveralls](https://coveralls.io/) for Test Coverage

#### Set up
Fork or download this repo (using `git clone`) and modify the files to suite your testing needs.

You can also use SVN to download this repo to your new project folder. On OSX you can install SVN using Homebrew.
```
$ brew install subversion
```

Create a new folder and `cd` into it. Run the `svn export` command to download files.

```
$ svn export https://github.com/CraftAcademy/karma-jquery-jasmine_boilerplate/trunk . --force
```
Once downloaded, you need to install all dependencies. Run
```
$ npm install
```

#### Usage
You can use this setup to test your units and your jQuery events. Place your JavaScript code in `assets/js/` folder and partials in `spec/fixtures/` folder.

Your specs need to be end with `_spec.js` (e.g. `fizz_buzz_spec.js`)

Run tests with
```
$ npm test

# or

$ karma start karma.conf.js
```

#### Adding tests
I have included some basic specs and `js` code for you to examine. Basically you need to build up your test environment and tear it down afterwards.
You can have different setups by nesting your `describe` blocks/functions.

```javascript
# spec/my_spec.js
describe("Given my code", function () {

	beforeEach(function () {
		/* ... Set up your test ... */
	});

	afterEach(function () {
		/* ... Tear it down ... */
	});

	describe("When ...", function () {

		beforeEach(function () {
		  /* ... Context specific setup ... */
		});

		it("Then...", function () {
			expect(true).toEqual(true);
		});
	});
});
```
## Screenshot:

![screen shot 2017-08-14 at 11 27 08 pm](https://user-images.githubusercontent.com/13605349/29292749-a265697c-8148-11e7-8ea3-40ea345abca6.png)
