let input=document.getElementById('input');
let but=Array.from(document.getElementsByClassName('btn'));
but.map(bt =>{
    bt.addEventListener('click',(ev)=>{
        switch(ev.target.innerText){
            case 'C':
                input.innerText="";
                break;
            case '=':
                try{
                    input.innerText=eval(input.innerText);
                }
                catch{
                    input.innerText="Math Error";
                }
                break;
            default:
                input.innerText+=ev.target.innerText;
        }
    });
});