const s = document.querySelector(".selector");
const col_input=document.querySelector('.col')
let price_tovar=100;
let col=0;
let isChecked=false
const price=document.querySelector('.price')
const options=document.querySelector('.select_options')
const check_box=document.querySelector('.delivery_check')
let type="bron"
col_input.addEventListener('change',(e)=>{
    col=e.target.value
    const event=new Event("change")
    s.dispatchEvent(event)
})

s.addEventListener("change", function(event) {
    let select = event.target;
    if(select.value==='1' || select.value==='3'){
        options.style.display='none'
        select.value==='1'? price_tovar=100 : price_tovar=300
    }
    else options.style.display='block'
    if(select.value==='1' || select.value==='2'){
        check_box.style.display='none'
        select.value==='1'? price_tovar=100 : price_tovar=200
    }
    else check_box.style.display='block'
    if(select.value==="2"){
        if(type==="ser"){
           price_tovar=250
        }
        if(type==="gold") {
            price_tovar = 300
        }
    }
    if(select.value==='3' && isChecked){
        price.innerHTML=price_tovar*col + 100

    }
    else price.innerHTML=price_tovar*col
});

const option_list=document.querySelectorAll('.radio')
option_list.forEach(item=>
    item.addEventListener('change',(e)=>{
        type=e.target.value
        const event=new Event("change")
        s.dispatchEvent(event)
    })
)

const check=document.querySelector('.delivery')

check.addEventListener('change',(e)=>{
    isChecked=e.target.checked
    const event=new Event("change")
    s.dispatchEvent(event)
})

