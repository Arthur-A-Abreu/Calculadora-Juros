const calcular = document.getElementById("calcular")
calcular.addEventListener("click",function(){
    const value = document.getElementById("value").value
    const fee = (document.getElementById("fee").value) /100
    const time = document.getElementById("time").value

    const total = value * (1+fee)**time

    document.getElementById("total").innerHTML = ("R$ " + total.toFixed(2).replace('.',","))
})

document.addEventListener("keydown", function(event){

    if (event.key == "Enter") {

        calcular.click()
    
    }
    
})