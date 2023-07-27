//2.filter method

var a=[1,2,3,4,5,6,7,8,9];
document.write("filter method"+"<br>"+"<br>"+"a=[1,2,3,4,5,6,7,8,9]"+"<br>"+"Even number"+"<br>");

var output=a.filter(function(e){
	return e%2==0;
})
document.write(output);


//3.map method

var b=["mango","orange","apple","banana"];
document.write("b=mango,orange,apple,banana"+"<br>"+"<br>")
var output=b.map (function(e){
	return e.toUpperCase();
})
document.write(output);