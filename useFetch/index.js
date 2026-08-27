// console.log("hiii")
// let a=23;
// console.log("a="+a);

const container=document.getElementById('container');
console.log(container)
const button=document.getElementById('btn');
console.log(button)
const h2=document.getElementById('data');
const loader=document.getElementById('loader');


async function fetchData(){
    try{
        loader.innerHTML='Fetching data...';
    const serverData=await fetch('https://fakestoreapi.com/products')
                       const jsonData=await serverData.json();
    // console.log(jsonData[1].title)
    h2.innerHTML=`${jsonData[1].title}`;

    }catch(e){
        console.log("Error is:"+e)
        loader.innerHTML='Error is'+e;
    }
    finally{
        loader.innerHTML='';

    }

}
button.addEventListener('click',fetchData);