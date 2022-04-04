const numEl = document.getElementById("output")
const buttons = Array.from(document.querySelectorAll("button"))
const values=[]

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (e) => {
        console.log(e.target.innerText)
        
        switch(e.target.innerText){
              case'%':
              numEl.innerText= parseInt(numEl.innerHTML)/100
                break;
              case 'C':
              numEl.innerText = ""
              break;
              case 'CE':
                  numEl.innerText = ""
              break;

              case 'X':
              if(numEl.innerText){
                  numEl.innerText = numEl.innerText.slice(0, -1)
              }
              break;

              case'1/x':
              numEl.innerText= 1 / parseInt(numEl.innerText)
              break;

              case'x2':
              numEl.innerText = parseInt(numEl.innerText) * parseInt(numEl.innerText)
              break;

              case'√x':
              numEl.innerText = parseInt(Math.sqrt(numEl.innerText))
              break;
              case '=':
                  try{
                      numEl.innerText = eval(numEl.innerText)
                  } catch{
                      numEl.innerText = 'Error!';
                  }
                  break;
          
      
          default:
              numEl.innerText += e.target.innerText;
      }

console.log(numEl)
    });
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }