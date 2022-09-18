class a{
    constructor(){
        this.b=function(p){
            return 1
        }
    }
    static b(pp) {
        return 2
    }
    b(ppp){
        return 3
    }
}
const newA=new a()
console.log('-',newA.b())
console.log('--',a.b())
