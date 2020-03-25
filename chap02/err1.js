//"use strict"; // 이 문장을 파일 선두에 입력해두면, 변수를 미리 선언하지 않을 시 문법 오류를 발생시킴.(작동 안 됨)

for (i = 0 ; i < 5 ; ++i)
    console.log(i);

    // 오류는 뜨나(eslint를 설치했으므로) 자바스크립트 문법상으론 원래 문제가 없으므로 작동은 잘 됨.
    // 자바스크립트 문법에서는 변수 선언을 생략해도, 변수가 처음 나오는 문장을 실행할 때 변수를 자동으로 생성하기 때문.
    // 다만 변수를 선언하지 않는 방식은 바람직하지 않음.