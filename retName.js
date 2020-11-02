
var firstName = prompt("enter firstName :");
var lastName = prompt("enter lastName :"); 
 
function retName(firstName , lastName){
  return  firstName + " " +lastName ;
}

var fullName = retName(firstName ,lastName);
alert("the Full Name is : "+ fullName);
//console.log("the Full Name is : "+ fullName);
 
