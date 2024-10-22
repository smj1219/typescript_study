// test06.ts

/*
    [ function type ]

    함수 만드는 방법

    function 함수명(매개변수명:type, 매개변수명2:type, ... ):리턴type{ }
*/

(function(){
    // number type 2개를 전달 받아서 numbr type 을 리턴해주는 함수
    function sum(num1:number, num2:number):number{
        return num1+num2
    }

    //string type 1개를 전달 받고 어떤 데이터도 리턴해주지 않는 함수
    function printMag(msg:string):void{
        console.log(msg)
    }

    // retrun type 을 명시하지 않으면 retrun type 을 infer 한다.
    function getMag(){
        return "hello"
    }

    // result 는 string type 으로 infer 된다.
    let result = getMag()
    //result = 10 // 다른 type 으로 대입 불가
    

})()