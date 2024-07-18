/**
 * promise 지원 비동기 함수 사용법 II: async ~ await
 * 
 */
const {asyncFn02} = require('./async-fns');

// test: success
const fn = async (param) => {
    try {
        const result = await asyncFn02(param)
        console.log(result);
    } catch(err) {
        console.error(err)
    }
}

fn('params');
fn(null);

console.log('wait.....');