//---------First Team----------------//
let firstInput = document.querySelector('.first_input')
let btn = document.querySelector('.btn_1')
let boxOne = document.querySelector('.First_Team')
btn.addEventListener('click', function(){
    let p1value=firstInput.value
if(p1value == ''){
    alert('please give me someting')
}else{
    if(Boolean(p1value-10)){
     if(p1value<10){
      boxOne .style .display='none';
      boxTwo .style .display='block';
     }else{
        alert('please give a number less than 10')
     }
    }else{
        alert('please give me correct number')
    }
}
})
//------Second Team-------------//
let secondInput = document.querySelector('.Second_input')
let btn_2 = document.querySelector('.btn_2')
let boxTwo = document.querySelector('.Second_Team')
let teamTwo= document.querySelector('h4')
let teamTwo_1= document.querySelector('h5')
btn_2.addEventListener('click', function(){
    let p2value=secondInput.value
    let p1value=firstInput.value
if(p2value == ''){
    alert('please give me someting')
}else{
    if(Boolean(p2value-10)){
     if(p2value<10){
      boxOne .style .display='block';
      boxTwo .style .display='none';
    if(p1value==p2value){
        teamTwo.style.display='block';
        teamTwo_1.style.display='none';
    }else{
        teamTwo_1.style.display='block';
        teamTwo.style.display='none';
    }

     }else{
        alert('please give a number less than 10')
     }
    }else{
        alert('please give me correct number')
    }
}
})



