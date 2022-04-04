// selectors
const convert = document.querySelector(".convert");
const number = document.getElementById("inputs")
const result = document.getElementsByClassName("outp")

// listeners and triggers
convert.addEventListener("click", function(e){
     e.preventDefault()
    const digit = parseInt(number.value) * 100
    result[0].innerText = digit
  //   console.log(digit, result)
})//