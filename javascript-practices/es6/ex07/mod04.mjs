/**
 * named export + unnamed export
 * 
 * 1. exports(require)와 비슷하다.
 *  exports.a = ...
 *  exports.b = ...
 * 
 * 2. import하는 모듈에 destructing할 수 있다.
 */

const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

export {add, subtract};
export default {add, subtract};