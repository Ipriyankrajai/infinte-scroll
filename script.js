const infiList = document.getElementById("infi-list");
infiList.innerHTML=`
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
<li>Item 4</li>
<li>Item 5</li>
<li>Item 6</li>
<li>Item 7</li>
<li>Item 8</li>
<li>Item 9</li>
<li>Item 10</li>
`;
let i=10;
infiList.addEventListener('scroll', ()=> {
    // console.log("a",infiList.scrollHeight)
    // console.log("b",infiList.scrollTop)
    // console.log("c",infiList.clientHeight)
    if (infiList.scrollHeight-infiList.scrollTop-infiList.clientHeight<10){
      infiList.innerHTML+=`
<li>Item ${i+1}</li>
<li>Item ${i+2}</li>
`;
      i=i+2;
    }
  });
  localStorage.setItem("a",1);