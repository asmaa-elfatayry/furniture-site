// scroll down
let down=document.querySelector('.scroll-down');
down.onclick=function(){
    window.scrollTo(0,document.body.scrollHeight);
    }
// scroll up


    let scrollup=document.querySelector(".scroll-up");
    window.onscroll=function(){
       // console.log(this.scrollY)
    
       this.scrollY>=800?scrollup.classList.add("show"): scrollup.classList.remove("show");
    }
    scrollup.onclick=function(){
        window.scrollTo({
            top:0,
            behavior:"smooth"
        }
    )}

let spanAddBox=document.querySelector('.deafult .sp');
let parent=document.querySelector('.buy .text');
spanAddBox.onclick=function(){
// create main div contain all ele
    let boxDiv=document.createElement('div');
//    create div contain input and p(X) to display flex
    let textBuy=document.createElement('div');
//    create input text
    let myInput=document.createElement('input');
    myInput.type="text";
//  create pragraph contain X delelte
    let removeP=document.createElement('p');
    // text X
    let text=document.createTextNode('X');
    // append text to p
    removeP.appendChild(text);
    // append input and p to text-buy box
    textBuy.append(myInput);
    textBuy.append(removeP)
    // appent all to main box
    boxDiv.append(textBuy);
// append to parent ele in html
    parent.appendChild(boxDiv);

    // add classes to style
    boxDiv.classList.add('box');
    textBuy.classList.add('text-buy');
    myInput.classList.add('input-buy');
    removeP.classList.add('remove');
    // get all remove
    let allRem=document.querySelectorAll('.remove');
    // add index to all elelment
    for(let i=0;i<allRem.length;i++){
        allRem[i].parentElement.classList.add(i);
    }
  
 
//  delete element
for(let i=0;i<allRem.length;i++){
  allRem[i].addEventListener("click",function(){
      console.log(this.parentElement.classList)
    //   allRem[this.parentElement.classList[1]].remove();
      allRem[this.parentElement.classList[1]].parentNode.remove();
  })
}
}
// buy btn
let buy_btn=document.querySelector('.buy .sub');
let overlay=document.querySelector('.overlay');
let first_pop=document.querySelector('.pop-num');
let send=document.querySelector('.send');
let suuc=document.querySelector('.success');
buy_btn.addEventListener("click",function(){
$(overlay).show();
$(first_pop).fadeIn(300);

})
send.addEventListener("click",function(){
    $(first_pop).fadeOut(200);
    $(suuc).show(100).delay(1500).fadeOut(300);
    $(overlay).fadeOut(3800)
})




// opinion header animaita
let arrLetter=document.querySelector('.opinion h2').textContent.split("");


arrLetter.forEach((letter)=>{
letter.style.color="red"
})