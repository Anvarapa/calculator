let input = document.querySelector('.input');
console.log(input);
let item = document.querySelectorAll('.item');
console.log(item);

function spesialBtn(text){
    if(text === 'C'){
        input.value = ''
    }
    else if(text==='='){
        input.value = eval(input.value)
    }
    else if(text === '+/-'){
        input.value = -input.value
    }
    else if(text === 'D'){
        
    }
    else{
        input.value += text
    }
}

for(let i = 0; i < item.length; i++){
    item[i].addEventListener('click', function(){
        // console.log(this)//или можно item[i] но this удобнее будет если название параметра длинный и сложный
    spesialBtn(this.innerText)
    })
}




































