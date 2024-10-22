// Step03Class/test02.ts

/*
    [ 접근 지정자 ]
    
    public, protected, private 

    public : 전체 공개 (생략하면 public 으로 설정된다)
    protected : 상속관계에서 공개
    private : 비공개
*/
(function(){
    class Person{
        // typescript 에서는 접근 지정자가 존재한다 
        private firstname:string
        private lastname:string
        
        constructor(firstname:string, lastname:string){
            this.firstname=firstname
            this.lastname=lastname
        }

        showInfo(){
            console.log(`이름 : ${this.firstname} ${this.lastname}`)
        }
    }

    const p1 = new Person("kim", "gura")
    p1.showInfo()
    // 필드(property) 에 접근 불가 
    //p1.firstname = "xxx"
    //p1.lastname = "xxx"
   
})()