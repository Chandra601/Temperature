const button = document.querySelector(".reset")
const Celcius = document.querySelector(".Celcius");
const Fahrenheit = document.querySelector(".Fahrenheit");


button.addEventListener("click",()=>{
    const value = document.querySelector("#degree").value;
    const valuePrint = document.querySelector("#valuePrint");
    valuePrint.innerHTML = 0;
})


Fahrenheit.addEventListener("click",()=>{
    const value1 = document.querySelector("#degree").value;
    const result = (value1*9/5) + 32;
    valuePrint.innerHTML = `${result}F`;
})

Celcius.addEventListener("click",()=>{
    const value2 = document.querySelector("#degree").value;
    const result2 = ((value2-32)*5)/9;
    valuePrint.innerHTML = `${result2}C`;
})