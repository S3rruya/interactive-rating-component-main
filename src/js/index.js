let currentValue = 0;
const body = document.querySelector("body");
const finishCard = document.getElementsByClassName("ratingContainer--finish")[0];
const radioGroup = Array.from(document.getElementsByClassName("radioButton"));
radioGroup.forEach(element => {
    element.addEventListener('click',() => setRate(radioGroup.indexOf(element)+1));
});
finishCard.remove();
function setRate(value){
    currentValue = value    
    radioGroup.forEach(element => {
        element.classList.remove("radioButton--active");
        console.log("removeu");
        if(radioGroup.indexOf(element)+1 === currentValue) element.classList.add("radioButton--active");
    });
}
function submitValue(){
    let submittedValue = currentValue;
    submittedCard(submittedValue);
}
function submittedCard(value){
    body.append(finishCard);
    let span = document.getElementsByClassName("selectedBar")[0];
    span.innerText = `You selected ${value} out of 5`;
}
