const adviceId = document.querySelector('#adviceId');
const advicetext =  document.querySelector('#advicetext');
const btn = document.querySelector('#btn');


function getAdvice () {
  fetch("https://api.adviceslip.com/advice")
  .then(response => {
    return response.json();
  })
  .then( adviceData => {
    console.log(adviceData);
    const  adviceNum = adviceData.slip.id;
    const  advice =  adviceData.slip.advice;


    adviceId.textContent = adviceNum;
    advicetext.innerHTML = `<p>${advice}</p>`;
  
  })
  .catch(error => {
    console.log(error);
  })
}
btn.addEventListener('click' , function(){
  getAdvice();
})

window.onload = () => {
  getAdvice();
}
