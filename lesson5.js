const price=document.querySelector('.input_price')
const col=document.querySelector('.input_col')
const btn=document.querySelector('.submit_choose')
const sum=document.querySelector('.sum')

btn.addEventListener('click',(e)=>{
    e.preventDefault()
    sum.innerHTML= (parseInt(price.value) * parseInt(col.value)).toString();
})
