const form = document.getElementById("form");
const inputForm1 = document.getElementById("inputForm1");
const inputForm2 = document.getElementById("inputForm2");
const operatorInput = document.getElementById("operatorInput");
const result = document.getElementById("result");


form.addEventListener("submit",(event)=>{

    event.preventDefault()

    const userValue1 = inputForm1.value
    const userValue2 = inputForm2.value
    const userValue3 = operatorInput.value

  

    if(userValue3==="+"){
        result.innerHTML = userValue1 + userValue2
    }
    else if(userValue3==="-"){
        result.innerHTML = userValue1 - userValue2
    }
    else if(userValue3==="/"){
        result.innerHTML = userValue1 / userValue2
    }
    else if(userValue3==="*"){
        result.innerHTML = userValue1 * userValue2
    }
    else if(userValue3==="%"){
        result.innerHTML = userValue1 % userValue2
    }else{
        alert("Enter Correct Operator")
    }

});
