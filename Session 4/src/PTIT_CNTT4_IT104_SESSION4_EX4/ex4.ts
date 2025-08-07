function check(value: string|number){
    if(typeof value ==='string'){
        return value.length;
    }else if(value%2==0){
        return'Ngay la so chan'
    }



}
console.log(check("demo123"));
console.log(check(10));
console.log(check(87));


