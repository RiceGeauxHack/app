
<form id="frm1" action="http://www.willrice.org">
University: <input type="text" name="fname" value="Rice U"><br>
<br>
What are you feeling?<br>
<input type="radio" name="type" onclick="food_drink(this.value)" value="Drink">Drink<br>
<input type="radio" name="type" onclick="food_drink(this.value)" value="Food">Food<br>
<br>
Going out or staying in?<br>
<input type="radio" name="pickup" onclick="out_in(this.value)" value="Delivery">Delivery<br>
<input type="radio" name="pickup" onclick="out_in(this.value)" value="Pickup">Pickup<br>
<br>
<button onclick="myFunction();">Try it</button>
</form> 


<p id="demo"></p>

<script>
var food_or_drink = None
var out_or_in = None

function food_drink(a){
    food_or_drink = a
}
function out_in(a){
    out_or_in = a
}

function myFunction() {
    var x = document.getElementById("frm1");
    text = x.elements[0].value;
    text = text.replace(' ','+');
    document.getElementById("demo").innerHTML = text;

}
</script>

