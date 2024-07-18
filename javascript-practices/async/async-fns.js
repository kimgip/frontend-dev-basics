// callback 지원 비동기함수
exports.asyncFn01 = function(param, callback){
    // 비동기 코드: 파일 시스템(file io), 네트워크 통신(fetch), SQL to DB, setTimeout, ... etc
    setTimeout(() => {
        //
        // 비동기 처리 됐다고 가정
        //
        if(param !== null) {
            // 결과처리
            callback(null, {result: 'success'});
        } else {
            // 에러처리
            callback(new Error('fail'), null);
        }
    }, 3000);
}

// promise 지원 비동기함수
exports.asyncFn02 = function(param){
    return new Promise((resolve, reject) => {
        // 비동기 코드: 파일 시스템(file io), 네트워크 통신(fetch), SQL to DB, setTimeout, ... etc
        setTimeout(() => {
            //
            // 비동기 처리 됐다고 가정
            //
            if(param !== null) {
                // 성공처리
                resolve({result: 'success'});
            } else {
                // 에러처리
                reject(new Error('fail'));
            }
        }, 3000);
    });
}
