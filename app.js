function button(num)
{
    var input = document.getElementById("input_text");
    input.value += num;
    
}
function result()
{
    var input = document.getElementById("input_text");
    input.value = eval(input.value);
}
function inputClear()
{
    var input = document.getElementById("input_text");
    input.value="";
}