---
category: feature
tag:
  - es-proposal
---

# [`Function.{ isCallable, isConstructor }`](https://github.com/caitp/TC39-Proposals/blob/trunk/tc39-reflect-isconstructor-iscallable.md)

## Modules

- [`esnext.function.is-callable`](https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/esnext.function.is-callable.js)
- [`esnext.function.is-constructor`](https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/esnext.function.is-constructor.js)

## Types

```ts
interface FunctionConstructor {
  isCallable(value: any): boolean;
  isConstructor(value: any): boolean;
}
```

## Entry points

```
core-js/proposals/function-is-callable-is-constructor
core-js(-pure)/full/function/is-callable
core-js(-pure)/full/function/is-constructor
```

## Example

[_Example_](https://is.gd/Kof1he):

```js
Function.isCallable(null); // => false
Function.isCallable({}); // => false
Function.isCallable(function () {}); // => true
Function.isCallable(() => {}); // => true
Function.isCallable(class {}); // => false

Function.isConstructor(null); // => false
Function.isConstructor({}); // => false
Function.isConstructor(function () {}); // => true
Function.isConstructor(() => {}); // => false
Function.isConstructor(class {}); // => true
```
