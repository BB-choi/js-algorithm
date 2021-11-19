# 입출력 관리 in BOJ

**입력**을 읽어오고, **출력**도 알맞게 해 내야 한다.

## 공식 언어 가이드

https://help.acmicpc.net/language/info

### node.js

-   [1000번](https://www.acmicpc.net/problem/1000) 예제 소스코드

```
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a+b);
```

---

### 파일 읽어오기

```
var fs = require('fs');
```

-   파일을 읽어들이기 위해 Node.js의 [FileSystem 모듈](https://nodejs.org/api/fs.html) (fs모듈) 사용

### 입력을 읽어와서 input이라는 변수에 할당하기

```
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
```

-   input 변수를 선언
-   `fs.readFileSync(경로)` : '경로'의 파일을 동기적으로 읽어와서 그 내용을 input 변수에 할당한다.
-   `toString().split(' ')` : 읽어온 내용을 공백(' ')을 기준으로 Array에 저장

### input배열의 값을 별도 변수에 할당

```
var a = parseInt(input[0]);
var b = parseInt(input[1]);
```

-   Array에 저장된 요소들을 a, b라는 변수에 할당
-   현재 문제 [1000번](https://www.acmicpc.net/problem/1000)에서 요구하는 숫자로 변환하기 위해서 `parseInt()` 사용

**_참고_**

> `parseInt` : parseInt('123가나다'); 👉 return `123`<br> `Number` : Number('123가나다'); 👉 return `NaN`<br> `parseInt` : parseInt('10.123'); 👉 return `10`<br> `Number` : Number('10.123'); 👉 return `10.123`

-   parseInt도 숫자로 시작하지 않는 경우에는 return `NaN`
