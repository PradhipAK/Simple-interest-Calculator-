//Computes the simple interest and displays
function compute()  
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    validate(principal);
    if (principal>0){
        document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"
        
    }


}
//Update the Rate near the slider
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
//Validates the entered Principal amount
function validate(principal)
{
    if (principal<=0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    } 

}
        
