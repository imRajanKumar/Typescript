for(let i=0;i<5;i++)
{
    console.log(i);
}


let arry:number[]=[23,45,56,67,78];
let total:number=0;
for(let i=0;i<arry.length;i++)
{
    console.log(arry[i]);
    total+=arry[i];
}
console.log("total "+total);

for(let a of arry)
{
    console.log(a);
}

let sports:string[]=["cricket","footbal","hockey","tennis"];
sports.push("ff");


for(let sp of sports)
{
    console.log(sp);
}