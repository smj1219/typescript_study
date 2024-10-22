// Step01DataType/test09.ts

/*
    [ String Literal Type ]

    - 대입할수 있는 문자열의 목록을 정의 할수 있다. 
*/

(function(){
   
    let greet : "hi" | "bye"

    greet = "hi"
    greet = "bye"
    // "hello" 는 목록에 없기때문에 대입 불가 
    //greet = "hello"

    // string literal type 에 별칭 부여하기
    type MouseEvent = "mousedown" | "mouseup" | "mousemove"

    let eventName : MouseEvent 
    eventName = "mousedown"
    eventName = "mousemove"
    eventName = "mouseup"

})()