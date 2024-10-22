// Step03Class/test01.ts

(function(){
    //클래스 
    class Car{

        //필드 
        name:string //초기화를 반드시 하거나 혹은 생성자에서 값을 넣어주는 코드가 있어야 한다. 

        //생성자 
        constructor(name:string){
            this.name=name
        }

        //메소드 
        drive(){
            console.log(this.name+" 이 달려요!")
        }
    }

    const c1:Car = new Car("소나타")
    const c2:Car = new Car("아반떼")

    c1.drive()
    c2.drive()

})()