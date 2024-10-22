// test03.ts

/*
    [ array type ]
    데이터 type[] 형식으로 만들 수 있다.

     number[], string[], boolean[], object[] ...
*/

(function(){
    //number 배열
    let nums:number[] = [10, 20, 30]
    //string 배열
    let names:string[] = ["kim", "park", "lee"]

    nums.push(40)
    //nums.push("kim") //type 이 맞지 않아서 에러가 난다.
    names.push("kim")
    //names.push(40) //type 이 맞지 않아서 에러가 난다.

    // nums 가 number[] 이기 때문에 num0 은 number type 이다
    let num0 = nums[0] 
    //type 추론으로 인해 num0 가 number type 으로 지정되어 number type 만 대입할 수 있다.
    num0 = 99
    //num0 = "kim"


    // 혼합(union) 배열
    let anythings : (number | string)[]
    anythings = [10, "kim", "park", 20]

})()