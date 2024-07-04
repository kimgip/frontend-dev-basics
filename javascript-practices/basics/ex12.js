/*
Array 확장(prototype 기반의 확장)
예제: List 함수 추가
*/

Array.prototype.remove = function(index) {
    this.splice(index, 1);
}

Array.prototype.insert = function(index, value) {
    if (value instanceof Array) {
        // 방법 1
        // for (var i = 0; i < value.length; i++) {
        //     this.splice(index + i, 0, value[i]);
        // }

        // 방법 2
        value.forEach(element => this.splice(index++, 0, element));

        // 방법 3
        // 오류!
        // 콜백 함수 안의 this는 어휘 상의 this와 일치하지 않는다.
        // value.forEach(function(e) {
        //     this.splice(index++, 0, e);
        // });

        // 해결방법1
        // var that = this;
        // value.forEach(function(e) {
        //     that.splice(index++, 0, e);
        // });

        // 해결방법2
        // value.forEach(function(e) {
        //     this.splice(index++, 0, e);
        // }.bind(this));

    } else {
        this.splice(index, 0, value);

    }
}

// List 함수 사용하기
var a = [1, 2, 4];
console.log(a);

a.remove(2);
console.log(a);

a.insert(2, 3);
console.log(a);

a.insert(3, ['a', 'b', 'c']);
console.log(a);