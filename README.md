# Goddamn Javascript Babel

A zero config package that gives you a bleeding edge Javascript, with the latest proposals including pipe operator `foo |> bar`, optional chaining `foo?.bar`, null coalescing `foo ?? bar` and more.


## Quick Start

Here's how to create a project with the latest and greatest Babel proposals:

```
$ yarn init -y
$ yarn add --dev goddamn-javascript-babel
$ yarn goddamn-javascript-babel
$ yarn add --dev goddamn-javascript-eslint
$ yarn goddamn-javascript-eslint
$ yarn babel -w src/* --out-dir dist
```
Note that we've also installed our recommended eslint package, which includes Airbnb's rules + Prettier.


## Why?

I've had enough with Javascript configs breaking. There's a gazillion modules you need
to get state of the art linting and formatting and they all change versions and break
in various different ways eventually.

This is just one module to install that locks all deps and brings you to latest
babel level.


# Contributing

Fork, implement, add tests, pull request, get my everlasting thanks and a respectable place here :).


### Thanks:

To all [Contributors](https://github.com/jondot/goddamn-javascript-babel/graphs/contributors) - you make this happen, thanks!


# Copyright

Copyright (c) 2018 [@jondot](http://twitter.com/jondot). See [LICENSE](LICENSE) for further details.
