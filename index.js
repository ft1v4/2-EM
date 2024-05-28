function pesquisa(){
    let input = document.querySelector('#inputID').value
    input = input.toLowerCase()

    let x = document.getElementsByClassName('comidas')

    for(i = 0; i < x.length; i++){
        if (!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].style.display = 'none'
        }else{
            x[i].style.display = 'list-item'
        }
    }
}