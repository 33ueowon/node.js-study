function func1(){ // 최초 콜 스택
    console.log("1");   //추가 된 내용 -> 삭제
    func2();    //  func2 추가
    return;     
}

function func2(){   //func2 생성
    console.log("2");   //2 출력
    return; 
}

func1();