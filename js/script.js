const counter = document.getElementById('contadorVisitas')
const btnReset = document.getElementById('btnReestablecer')

btnReset.addEventListener('click', () => {
    counter.innerText = 1
    localStorage.setItem('visits', 1)
})

if(localStorage.getItem('visits') === null){
    localStorage.setItem('visits', 1)
    counter.innerText = localStorage.getItem('visits')
}else{
    localStorage.setItem('visits', Number.parseFloat(localStorage.getItem('visits'))+1)
    counter.innerText = localStorage.getItem('visits')
}