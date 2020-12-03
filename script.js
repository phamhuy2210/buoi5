baiTapFuntion=()=>{
    var x = 100+200 ;
console.log("Gia tri cua x:"+x);

let arrNumber = [0,1,2,3,4,5,6,7,8,9];
console.log("Phần tử có index thứ 7 là :"+arrNumber[6]);
console.log("Xoá phần tử thứ 5 .....")

arrNumber.splice(4,1);
console.log("Mảng sau khi xóa phần tử thứ 5 là:"+arrNumber);

var mangX2= arrNumber.map(x=>x*2);
console.log("Mảng sau khi nhân đôi :"+mangX2);
} 
baiTapFuntion();    
