//selectors


const numEl = document.getElementById("num")
const buttons = document.querySelectorAll("button.fig")
const convertButton = document.getElementById("convert")
const resultElement = document.getElementById("result")




// triggers &listeners

const values=[]

buttons.forEach(function(btn, index){
    btn.addEventListener('click', function(){
        if(btn.textContent > 1) return alert('Invalid binary number')
        if(btn.textContent !== 'del') {
            values.push(btn.textContent)
            numEl.value = values.join('')
            return
        }
       values.pop()
        numEl.value = values.join('')
    })
})

convertButton.addEventListener('click', () => {

     resultElement.value = parseInt(numEl.value, 2)
        
    
})




window.addEventListener('keypress', (e) => {
  console.log(e)
  if (e.key !== '1' && e.key !== '0'){
      return 
  }
})

