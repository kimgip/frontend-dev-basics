// import 하기

// mod1, mod2 unnamed export 모듈에서 import할 때는 반드시 이름을 지정한다.
import myFunction from "./mod01.mjs";
import myObject from "./mod02.mjs";

console.log(myFunction(10, 20));
console.log(myObject.add(10, 20));

// mod3
// 1) named export 모듈의 다수 객체 import시 destruction 하기
import {subtract} from './mod03.mjs';
console.log(subtract(20, 10));

// 2) named export는 import 대상이 다수이기 때문에 특정 이름을 지정할 수 없다.
//  대신에 '* as 이름'를 사용할 수 있다.
import * as m from './mod03.mjs';
console.log(m.subtract(20, 10));

// mod4
import math, {add} from './mod04.mjs';
console.log(math.subtract(20, 10));
console.log(add(10, 20));