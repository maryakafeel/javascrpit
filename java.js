// function


// Q1 
// function currentdate(){
//   var a = new Date()
//   return a
// }
// currentdate();
// alert(currentdate())

// Q2
// function fullname(){
//     var a=prompt("first name")
//     var b=prompt("last name")
//     var  sum= "hello! "+ a+ " " + b
//     return sum
// }
// fullname();
// alert(fullname())



// Q3
// var a=prompt("enter a number ")
// var b=prompt("enter another number")
// function full(a,b){
   
    
//    sum =cal(a+b)
  
//     return sum
// }
// full(a,b);
// alert(full(a,b))

// Q4
// function cal(op1,sign,op2){
    //     if(sign==="+"){
    //         sum=op1+op2
    //         return sum
    //     }
    //     else  if(sign==="-"){
    //         sub=op1-op2
    //         return sub
    //     }else  if(sign==="*"){
    //         mult=op1*op2
    //         return mult
    //     }else{
    //         divide=op1%op2
    //           return divide
    //     }
    // }
    // var result1 = cal(4,"+",9);
    // var result2 = cal(4,"-",9);
    // var result3 = cal(4,"*",9);
    // var result4 = cal(4,"%",9);
    
    // document.write(result1)
    // document.write(result2)
    // document.write(result3)
    // document.write(result4)
// Q5
// var num = parseInt(prompt("Enter a number:"));
// function sumOfSquares(num) {
//     var i ;

//     for(i=0,i<=num,i++){
//         var sum=0;
//         var i = i*i;
//         sum = i;
//     }
//      document.write("The sum of squares for numbers up to and including " +num+ "is " +sum ) ;
// }

// sumOfSquares(num);



// Q6
// function factorialize(num) {
//     if (num < 0) 
//           return -1;
//     else if (num == 0) 
//         return 1;
//     else {
//         return (num * factorialize(num - 1));
//     }
//   }
//   factorialize(5);
//   document.write(factorialize(5))

// Q7
// Q8
// Q9
// Q10
		
// function validatePalin(str) {
//     const len = string.length;
//     for (let i = 0; i < len / 2; i++) {
//         if (string[i] !== string[len - 1 - i]) {
//             alert( 'It is not a palindrome');
//         }
//     }
//     alert( 'It is a palindrome');
// }
// const string = prompt('Enter a string or number: ');
// constvalue = validatePalin(string);


// Q11
// Q12
// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(find_longest_word('Web Development Tutorial'));
// Q13
// Q14


// date methods
// Q1
// var a = new Date()
// alert(a)

// Q2
// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// const d = new Date();
// letmonth = months[d.getMonth()];
// document.write(letmonth)


// Q3
// var currentDay = new Date();
// currentDay.toString;
// var b = currentDay.toString();
// var c = b.slice(0,3);
// document.write("Today is " + c);


// Q4
// var currentDate = new Date();
// currentDate.toString;
// var b = currentDate.toString();
// var c = b.slice(0,3);
// if (c === "Sat"){
//     document.write("It's Fun Day")
// }else if(c === "Sun"){
//     document.write("It's Fun Day")
// }else if(c === "Mon"){
//     document.write()
// }else if(c === "Tue"){
//     document.write()
// }else if(c === "Wed"){
//     document.write()
// }else if(c === "Thr"){
//     document.write()
// }else if(c === "Fri"){
//     document.write()
// }


// Q5
// const d = new Date();
//  a=d.getDate();
// if (a<=15){
//     document.write("first fifteen days of the month")
// }
// else{
//     document.write("last days of the month")
// }
// Q6
// Q7

// var a = new Date();
// var b = a.toString();
// var c = b.slice(16,19);
// if (c === "12:"){
//     document.write("It's PM")
// }else if(c === "13:"){
//     document.write("It's PM")
// }else if(c === "14:"){
//     document.write("It's PM")
// }else if(c === "15:"){
//     document.write("It's PM")
// }else if(c === "16:"){
//     document.write("It's PM")
// }else if(c === "17:"){
//     document.write("It's PM")
// }else if(c === "18:"){
//     document.write("It's PM")
// }else if(c === "19:"){
//     document.write("It's PM")
// }else if(c === "20:"){
//     document.write("It's PM")
// }else if(c === "21:"){
//     document.write("It's PM")
// }else if(c === "22:"){
//     document.write("It's PM")
// }else if(c === "23:"){
//     document.write("It's PM")
// }else if(c === "24:"){
//     document.write("It's AM")
// }else if(c === "01:"){
//     document.write("It's AM")
// }else if(c === "02:"){
//     document.write("It's AM")
// }else if(c === "03:"){
//     document.write("It's AM")
// }else if(c === "04:"){
//     document.write("It's AM")
// }else if(c === "05:"){
//     document.write("It's AM")
// }else if(c === "06:"){
//     document.write("It's AM")
// }else if(c === "07:"){
//     document.write("It's AM")
// }else if(c === "08:"){
//     document.write("It's AM")
// }else if(c === "09:"){
//     document.write("It's AM")
// }else if(c === "10:"){
//     document.write("It's AM")
// }else if(c === "11:"){
//     document.write("It's AM")
// }
// Q8
// Q9
// Q10
// Q11
// Q12
// Q13
// Q14





