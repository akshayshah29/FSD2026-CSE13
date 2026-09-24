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
    // h2.innerHTML=`${jsonData[1].title}`;

    let table=`<table border=2px>
            ${
                jsonData.map((ele)=>(
                  `<tr>
                  <td>
                  <img src=${ele.image} height=200px width=200px></img>
                  </td>
                  <td>${ele.title}</td>
                  <td>${ele.price}</td>
                  <td>${ele.description}</td>
                  </tr>`
                ))
            }
    
    
    </table>`
     h2.innerHTML=table;
    }catch(e){
        console.log("Error is:"+e)
        loader.innerHTML='Error is'+e;
    }
    finally{
        loader.innerHTML='';

    }

}
button.addEventListener('click',fetchData);