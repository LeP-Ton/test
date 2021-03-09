const a='{"b":3}'
let aa=JSON.parse(a);
aa.b=2
a=aa
console.log(a)