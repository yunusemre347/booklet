// function scrolled(e) {
//     if (myDiv.offsetHeight + myDiv.scrollTop >= myDiv.scrollHeight) {
//       scrolledToBottom(e);
//     }
//   }
// window.addEventListener("wheel", event => console.info(event.deltaY));
//const myElement = document.getElementById("c1");
// const myElement = document.getElementById("c2");
// const c3 = document.getElementById("c3");
// const c4 = document.getElementById("c4");
let deltaCounter=0;
//windowdan dolayı mı böyle oluyor amk.c1 yazıyorum oluyor. normalde olmaması lazım. tam tersi yukarıdaki gibi yapıyorum olmuyor

window.addEventListener("wheel", actionFunction=(event) => {
        //for click
        const bb0 = document.getElementById("bb0")
        const nb0 = document.getElementById("nb0")
        const bb1 = document.getElementById("bb1")
        const nb1 = document.getElementById("nb1")
        const bb2 = document.getElementById("bb2")
        const nb2 = document.getElementById("nb2")
        const bb3 = document.getElementById("bb3")
        const nb3 = document.getElementById("nb3")
        bb0.addEventListener("click",e=()=>{
            deltaCounter=4
            containerCheck.checked=true;
            console.log("1sdasd")
        })
        nb0.addEventListener("click",e=()=>{
            deltaCounter=4
            containerCheck.checked=true;
            console.log("2asddsa")
        })
        bb1.addEventListener("click",e=>{
            deltaCounter=6
        })
        nb1.addEventListener("click",e=>{
            deltaCounter=6
        })
        bb2.addEventListener("click",e=>{
            deltaCounter=8
        })
        nb2.addEventListener("click",e=>{
            deltaCounter=8
        })
        bb3.addEventListener("click",e=>{
            deltaCounter=10
        })
        nb3.addEventListener("click",e=>{
            deltaCounter=10
        })
        //for click end
    const delta = Math.sign(event.deltaY);
     if (deltaCounter>=0)
     {deltaCounter=deltaCounter+delta;};
     if(deltaCounter==-1){
    deltaCounter=0
     }
    console.info(deltaCounter)
    if(deltaCounter>=2){
        containerCheck.checked=true;
    }else{
        containerCheck.checked=false
    }
    if(deltaCounter>=4){
        c0.checked=true;
    }else{
        c0.checked=false
    }
    if(deltaCounter>=6){
        // c1.checked=true;
       c1.checked = true;
      //  console.log("oluyor")
     //   console.info(c1)
        // console.log(myElement)
    }else{
        c1.checked=false
    }
    if(deltaCounter>=8){
        c2.checked=true;
    }else{
        c2.checked=false
    }
    if(deltaCounter>=10){
        c3.checked=true
    }else{c3.checked=false}
    if(deltaCounter>12){
        deltaCounter=12
    }

});
