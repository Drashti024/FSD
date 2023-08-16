var userdata = {
    name : "Akash",
    gender : "Male",
}
//Access Data
console.log("My Name is "+userdata.name);
console.log("My gender is "+userdata['gender']);
userdata.mobile = 123456789;
console.log("My Mobile is "+userdata['mobile']);
userdata.mobile = 123;
console.log("My Mobile is "+userdata['mobile']);
console.log('name' in userdata);
delete userdata.mobile;
console.log(userdata.mobile);
console.log(userdata);
var a = JSON.stringify(userdata);
console.log(a);
console.log(JSON.parse(a));
