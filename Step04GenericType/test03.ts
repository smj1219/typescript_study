
interface Member<T>{
    id:T
    name:string
    email:string
}

(function(){
    const m1:Member<number> = {
        id:1,
        name:"김구라",
        email:"aaa@"
    }

    const m2:Member<string> = {
        id:"xxx",
        name:"해골",
        email:"bbb@"
    }
})()