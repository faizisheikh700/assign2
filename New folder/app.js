
//? ch# 5, Q 1

// var num1 = +prompt('Enter value 1');
// var num2 = +prompt('Enter value 2');

// var sum = num1 + num2;
// document.write(sum);

//? Q 2

// var num1 = +prompt('Enter value 1');
// var num2 = +prompt('Enter value 2');

// var mul = num1 * num2;
// var mod = num1 % num2;
// var min = num1 - num2;
// var div = num1 / num2;
// document.write(div);

//? Q 3
//? a
// var chap5;

//? b
// document.write("Value after variable declaration is: " + chap5 +'<br>') ; 

//? c
// chap5 = 5;

//? d
// document.write("Initial value: " + chap5 +'<br>');

//? e
// chap5++;

//? f
// document.write("Value after increment is: " + chap5 +'<br>');

//? g
// chap5 += 7;

//? h
// document.write("Value after addition is: " + chap5 +'<br>');

//? i
// chap5--;

//? j
// document.write("Value after decrement is: " + chap5 +'<br>');

//? k
// var rem = chap5 % 3;
// document.write("The remainder is: " + rem +'<br>');

//? Q 4

// var cost = 600;
// var num1 = 5;
// var mul = cost * num1;
// var abc = ('The cost to buy 5 tickets to a movieis ' + mul + 'PKR');
// document.write(abc );

//? Q 5
// document.write("<h1>TABLE OF 2</h1>")
// for (var i=1; i<=10; i++) {
//     document.write(2+" x "+i+" = "+2*i, "<br>");
// }

//? Q 6

//? a.
// var cel_Temp = 25; 

//? b.
// var fah_Temp = (cel_Temp * 9/5) + 32;
// document.write(cel_Temp + "°C is " + fah_Temp + "°F" + "<br>");

//? c. 
// var fah_Temp2 = 70; 

//? d.  
// var cel_Temp2 = (fah_Temp2 - 32) * 5/9;
// document.write(fah_Temp2 + "°F is " + cel_Temp2 + "°C");


//? Q 7

// var pi1 = 650;
// document.write("Price of item 1 is "+ pi1+ '<br>');
// var qi1 = 3;
// document.write("Quantity of item 1 is "+ qi1+ '<br>');
// var mul1 = pi1 * qi1;

// var pi2 = 100;
// document.write("Price of item 2 is "+ pi2+ '<br>');
// var qi2 = 7;
// document.write("Quantity of item 2 is "+ qi2+ '<br>');
// var mul2 = pi2 * qi2;
// var spc = 100;
// document.write("Shipping charges "+ spc + '<br> <br>');
// var res = mul1 + mul2 + spc;
// document.write("Total cost of your order is " + res);

//? Q 8
// document.write("MARKS SHEET" + "<br>");
// var marks = 980;
// document.write('Total marks is '+ marks+ "<br>");
// var obMarks = 809;
// document.write('Obtained makrs is  '+ obMarks + "<br>");
// var per =  obMarks /marks  * 100;
// document.write("Percentage:" + per);

//? Q 9
// document.write("<h1> Currency In PKR</h1>")
// var usd = 10;
// var sar = 25;
// var chRateUSD = 104.80;
// var chRateSAR = 28;

// var tRupees = (usd * chRateUSD) + (sar * chRateSAR);

// document.write("Total Currency in PKR: " + tRupees);


//? Q 10

// var initValue = 15; 

// var res = (((initValue + 5) * 10) / 2);

// document.write("Result: " + res);

//? Q 11

//? a.
// document.write('<h1>AGE CALCULATOR</h1>' + '<br>')
// var curYear = new Date().getFullYear();
// document.write("Current Year " + curYear+ '<br>')

//? b. 
// var bYear = 1998; 
// document.write("Birth Year " + bYear+ '<br>')

// c. 
// var age1 = curYear - bYear;
// document.write("Your age is " + age1 );

//? Q 12

//? a. 
// document.write("<h1>The Geometrizer</h1>")

// var radius = 20; 
// document.write("Radius of a circle: " + radius+ '<br>')

// var circum = 2 * Math.PI * radius;

// var area = Math.PI * Math.pow(radius, 2);

// document.write("The circumference is: " + circum.toFixed(2)+ "<br>");
// document.write("The area is: " + area.toFixed(2));


//? Q 13

//? a
// document.write("<h1>The Lifetime Supply Calculator</h1>"+ "<br>")
// var favSnack = "chocolate chip";
// document.write("Favourite: "+ favSnack+ "<br>")

//? b
// var curAge = 24; 
// document.write("Current Age: "+ curAge+ "<br>")

//? c
// var maxAge = 60; 
// document.write("Estimated Maximum Age: "+ maxAge+ "<br>")

//? d
// var snacksPD = 3; 
// document.write("Amount of Snacks PerDay: "+ snacksPD+ "<br>")

//? e
// var yearsRem = maxAge - curAge;
// var snacksReq = yearsRem * snacksPD;

// document.write("You will need " + snacksReq + " " + favSnack + " to last you until the ripe old age of " + maxAge);
