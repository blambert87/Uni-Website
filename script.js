<!DOCTYPE html>
<html lang="en">
<body>

/*http://w3schools.invisionzone.com/index.php?showtopic=44592 

<script type="text/javascript">
function changeColor(elem)
{
var cell = document.getElementById(id);
cell.style.background = red;
elem.style.backgroundColor = "yellow";
}
</script>
</head>
 
<body>
<table>
<tr><td id='cell' onclick="changeColor('this')">a1</td></tr> 

 
<script>
window.onclick = myFunction;

function myFunction() {
    document.getElementsByTagName("td")[0].style.backgroundColor = "yellow";
}
</script> */


/* http://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_onclick2 
<td onclick="myFunction()"></td>
<script>
function myFunction()
{
	document.getElementsByTagName("TD")[0].style.backgroundColor = "red";
}
</script> */

/* http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onclick_color */
<td onclick="myFunction()"></td>
<script>

function myFunction() {
    document.getElementByTag("TD").style.color = "red";
}
</script>

</body>
</html>