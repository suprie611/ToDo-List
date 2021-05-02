var nodelist = document.getElementsByTagName("Li")
var i
// Get the input field
var textinput = document.getElementById("myInput");

// Execute a function when the user releases a key on the keyboard
textinput.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
});
for( i=0;i<nodelist.length;i++)
{
    var span = document.createElement("SPAN")
    var txt = document.createTextNode("\u274C")

    span.className = "close"
    span.appendChild(txt)
    nodelist[i].appendChild(span)
}
var close = document.getElementsByClassName("close")
var i
for(i=0; i<close.length;i++)
{
    close[i].onclick = function(){
        var div = this.parentElement
        div.style.display = "none"

    }
}

function newElement(){
    var li = document.createElement("Li")
    var inputValue = document.getElementById("myInput").value

    var t = document.createTextNode(inputValue)
    li.appendChild(t)

    if(inputValue === ""){
        alert("You must write something")
    }else{
        document.getElementById("myUL").appendChild(li)
        li.className = "list-group-item"
    }
    document.getElementById("myInput").value = ""

    var span = document.createElement("SPAN")
    var txt = document.createTextNode("\u274C")

    span.className = "close"
    span.appendChild(txt)
    li.appendChild(span)

    for (i=0 ; i<close.length;i++){

    close[i].onclick = function(){
        var div = this.parentElement
        div.style.display = "none"

    }

    }
}