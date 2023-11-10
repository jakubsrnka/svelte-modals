# `@jakubsrnka/svelte-modals`

[![npm version](https://badge.fury.io/js/%40jakubsrnka%2Fsvelte-modals.svg)](https://badge.fury.io/js/%40jakubsrnka%2Fsvelte-modals)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

`@jakubsrnka/svelte-modals` is a library for Svelte that provides a simple way to create modals. There is several methods to manipulate opening and closing modals.

## Installation

### npm

`npm install -D @jakubsrnka/svelte-modals`

### yarn

`yarn add -D @jakubsrnka/svelte-modals`

### pnpm

`pnpm add -D @jakubsrnka/svelte-modals`

## Usage

There is a main component called `<ModalWrapper />` in which you wrap your layout in an `+layout.svelte` file, preferably your root layout. This library does not (as of `v0.0.1`) provide any styling, so you have to style it yourself. The library only provides a way to display (push) and hide (pop) modals.

### Main methods

#### `displayModal`

This method displays a single modal and / or adds a modal to the queue (next modal is displayed on closing the current modal). It takes two parameters, the first is the modal component, the second is the props for the modal component.

You can also call the same function via aliases `addModalToStack` or just simply `stack`.

#### `addModalToQueue`

If instead of adding your modal to the stack (first-in first-out), you want to add it to the queue (first-in last-out), you can use the `addModalToQueue`. It takes the same parameters as the `displayModal` method, the first is the modal component, the second is the props for the modal component.

You can also call the same function just simply using the alias `queue`.

#### `hideModal`

This method hides the current modal and displays the next modal in the stack. If there is no modal in the stack, the modal is simply hidden. It takes no parameters.

## Licence

Copyright (c) 2023 Jakub Srnka

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
