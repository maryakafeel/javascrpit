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


// function num(){
//     var start= +prompt("starting no");
//     var end =  +prompt("end no");
//     for(i=start ; i <= end ; i++){
//         document.write (i);
//         document.write("<br>");
//     }




// }
// num();
// Q8


// function hypotenuse(){
//     var base= +prompt("base ");
//     var per= +prompt(" prependicular");
//     var base2= (base * base);
//     var per2 = per * per;
//     var hyp2 = base2 +  per2;
// var hyp = Math.sqrt(hyp2) ;
// document.write (" hypotenuse of aright angle is  " + hyp);

// }
// hypotenuse();
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

// var w=prompt("Enter the width of rectangle");
// var h=prompt("Enter the height of rectangle");
// var result=Area(w,h);
// document.write("The area of rectangle is: "+result);
//  function Area(w,h)
//  {
//      w=parseFloat(w);
//      h=parseFloat(h)
//      var a=w*h;
//      return a;
//  }

//  Area();

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
// var str=prompt("Enter str");
// var letter=prompt("Enter letter");
// var res=char_count(str,letter);
// document.write(letter+" is "+res+" times");
// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// char_count();

// Q14

//var radius=prompt("Enter the radius");
// radius=parseInt(radius);
// calcCircumference(radius);
// calcArea(radius);
// function calcCircumference(radius)
// {
//     var c=2*(3.14)*radius;
//     document.write("The crcumference is: "+c+"<br>");
// }
// function calcArea(radius)
// {
//     var a=(3.14*radius*radius);
//     document.write("The radius is: "+a);
// }

//calcCircumference();


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
// var month = 11; 
// var laterdate = new Date(2022, month + 1, 0);
// document.write("later date"+laterdate);

// Q9
// var num1=new Date(2022,3,2);
//  var num2=new Date();
//  sdr=num1.getTime();
//  edr=num2.getTime();
//  var num=Math.floor(((edr-sdr) / (1000 * 60 * 60 * 24)));
//  document.write(num+" days have passed since "+num1);
// Q10
// var num1=new Date(2022,0,1);
//  var num1c=num1.getTime();
//  var num2=new Date();
// var num2c=num2.getTime();
//  var diff=num2c-num1c;
// var secPassed=Math.floor((diff/1000));
//  document.write("On reference date "+num1+"  "+secPassed+" seconds  "+" had passed since beginning of 2020");


// Q11

// var currentDate=new Date();
//  var getHours=currentDate.getTime();
// var currentTime=Math.floor(getHours/(1000*60*60));
// var getHours=getHours+(1000*60*60);
//  var incrementedTime=Math.floor(getHours/(1000*60*60));
//  var diff=incrementedTime-currentTime;
// diff--;
//  var newDate=new Date();
// newDate.setHours(diff);
//  document.write(" date: "+currentDate+"<br>"+"One hour ahead: "+newDate);


// Q12
// var date = new Date()
//  var current=date.getFullYear();
//  var YearBack100=current-100;
//  var YearBack100Date=new Date();
//  YearBack100Date.setFullYear(YearBack100);
//  alert("Current Date:"+date+"\n"+"100 years back"+YearBack100Date);
// Q13

// var age=prompt("Enter your age?");
// age=parseInt(age);
//  var date=new Date();
//  var currentYear=date.getFullYear();
//  var HisAge=currentYear-age;
//  var dateofBirth=new Date(HisAge);
//  var yearDate=dateofBirth.setFullYear(HisAge);
//  var YearOfdateofBirth=dateofBirth.getFullYear();
//  document.write("Your age is: "+HisAge+"<br>"+"Year of date of birth is: "+YearOfdateofBirth);

// Q14

// var name=prompt("Enter your name?");
// var month=prompt("Enter the month?");
// var units=prompt(name+" Please! Enter the units consumed in the month of "+month+"?");
// units=parseFloat(units);
// var chargesPerUnit=prompt(name+" Please enter the charges per unit?");
// chargesPerUnit=parseFloat(chargesPerUnit);

// var netAmountPayable=units*chargesPerUnit;
// var NetAmountPayable=netAmountPayable.toFixed(2);
// var LatePaymentSurcharge=(10/100)*NetAmountPayable;
// var latePaymentSurcharge=LatePaymentSurcharge.toFixed(2);
// var GrossAmountPayable=netAmountPayable+LatePaymentSurcharge;
// GrossAmountPayable=GrossAmountPayable.toFixed(2);

// var finalUnits=units.toFixed(2); 
// var finalChargesPerUnit=chargesPerUnit.toFixed(2);

// document.write("Customer Name: "+name+"<br>"+"Month: "+month+"<br>"+"Number of units: "
// +finalUnits+"<br>"+"Charges per unit: "+finalChargesPerUnit+"<br><br><br>"+"Net Amount"+
// "Payable (within due date) :"+NetAmountPayable+"<br>LatePaymentSurcharge :"+latePaymentSurcharge+
// "<br>Gross Amount Payable (After due date): "+GrossAmountPayable);





