
const openBtn=document.querySelector('.btn_open_popup')
const popup=document.querySelector('.popup_wrapper')
const cross=document.querySelector(".cross")
const form=document.querySelector('form')


form.querySelector("[name='name']").value=localStorage.getItem('name')
form.querySelector("[name='email']").value=localStorage.getItem('email')
form.querySelector("[name='message']").value=localStorage.getItem('message')
console.log(form.querySelector("[name='message']"))

form.querySelector("[name='name']").addEventListener('change',(e)=>{
    localStorage.setItem('name',e.target.value)
})

form.querySelector("[name='email']").addEventListener('change',(e)=>{
    localStorage.setItem('email',e.target.value)
})

form.querySelector("[name='message']").addEventListener('change',(e)=>{
    localStorage.setItem('message',e.target.value)
})

openBtn.addEventListener('click' ,(e) =>{
    e.preventDefault()
    popup.classList.add("popup_open")
})


cross.addEventListener('click' ,(e) =>{
    e.preventDefault()
    popup.classList.remove("popup_open")
})


form.addEventListener('submit', (e) =>{
    e.preventDefault()

    const data={
        name:form.querySelector("[name='name']").value,
        email:form.querySelector("[name='email']").value,
        message:form.querySelector("[name='message']").value
    }
    form.querySelector("[name='name']").value=''
    form.querySelector("[name='email']").value=''
    form.querySelector("[name='message']").value=''
    localStorage.setItem('name',  form.querySelector("[name='name']").value)
    localStorage.setItem('email',  form.querySelector("[name='email']").value)
    localStorage.setItem('message',  form.querySelector("[name='message']").value)
    form.querySelector('.check_box').checked=false
    popup.classList.remove("popup_open")
    fetch("https://formcarry.com/s/aWDb2vTQJ",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    })
})
