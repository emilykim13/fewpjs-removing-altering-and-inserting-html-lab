// Write your code here!
document.getElementById('main').remove();

var newHeader = document.createElement('h1');
newHeader.setAttribute("id","victory");
newHeader.innerHTML = "Joe Mama is the champion";
document.body.appendChild(newHeader);