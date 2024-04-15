const inputValue = document.getElementById('user-input');

const numbers = document.querySelectorAll('.numbers');

for(var i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click', function(element){
        if(inputValue.innerText === 'Nan'){
            inputValue.innerText = "";
        }else if(inputValue.innerText === '0'){
            inputValue.innerText = "";
        }
        
        inputValue.innerText += element.target.innerHTML.trim();
    });
}

const calculate = document.querySelectorAll('.operations');

for(var i = 0; i < calculate.length; i++){
  calculate[i].addEventListener('click', function(element){
    if (element.target.innerText === '=') {
        inputValue.innerText = eval(inputValue.innerText);
    } else if (element.target.innerText === 'AC') {
      inputValue.innerText = 0;
    } else if (element.target.innerText === 'DEL') {
        if (inputValue.innerText.length > 0) { 
            inputValue.innerText = inputValue.innerText.slice(0, -1);
        }
    } else {
      inputValue.innerText += element.target.innerHTML;
    }
  });
}
