const conatiner=document.getElementById('root');
// console.log(conatiner)

const root=ReactDOM.createRoot(conatiner);
const h2=React.createElement('h2',{style:{color:'red', backgroundColor:'black'}},'Welcome to React');
const h1=React.createElement('h1',{},"ABES Engineering College");
const img=React.createElement('img',{src:'', style:{height:'200px', width:'200px',borderRadius:'50%'}})
const div=React.createElement('div',{style:{border:'2px solid red'}},img,h1,h2);
//JSX
const div1=<div><h2>Welocme to JSX</h2></div>
root.render(div1);