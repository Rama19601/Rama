var getUserName = prompt("Hello! Who are you? :P"); 

console. log(getUserName);

document.getElementById("username").innerText = getUserName;

//tooltip//
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})