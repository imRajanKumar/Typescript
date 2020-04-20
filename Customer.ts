class Customer
{
 private fname:string;
 private lname:string;

constructor(a:string,b:string)


{
this.fname=a;
this.lname=b;
}


}


let obj=new Customer("rajan","kumar");
//obj.fname="rajan";
//obj.lname="kumar";

console.log(obj);