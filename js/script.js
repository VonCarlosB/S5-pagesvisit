const counter = document.getElementById('contadorVisitas')
const btnReset = document.getElementById('btnReestablecer')

btnReset.addEventListener('click', () => {
    counter.innerText = 0
    localStorage.setItem('visits', 0)
})

if(localStorage.getItem('visits') === null){
    localStorage.setItem('visits', 1)
    counter.innerText = localStorage.getItem('visits')
}else{
    localStorage.setItem('visits', Number.parseInt(localStorage.getItem('visits'))+1)
    counter.innerText = localStorage.getItem('visits')
}