
<form id="frm1" action="form_action.asp">
University: <input type="text" name="fname" value="Rice U"><br>
<input type="radio" name="type" onclick="food_drink(this.value)" value="Drink">Drink<br>
<input type="radio" name="type" onclick="food_drink(this.value)" value="Food">Food<br>
<input type="radio" name="pickup" onclick="out_in(this.value)" value="Delivery">Delivery<br>
<input type="radio" name="pickup" onclick="out_in(this.value)" value="Pickup">Pickup<br>
</form> 

<p>Click "Try it" to display the value of each element in the form.</p>

<button onclick="myFunction()">Try it</button>

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
    text = x.elements[0].value + "\n";
    text = text.replace(' ','+');
    text += food_or_drink + "\n" + out_or_in + "\n";
    document.getElementById("demo").innerHTML = text;

}
</script>

