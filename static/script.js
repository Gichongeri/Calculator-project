let Calculator;

class Calculator{
    constructor(history,current){
        this.history=history;
        this.current=current;
    }
}

function updateDisplay(){
    this.current.innerText=this.current;

}
function Clear(){
    this.display="";
    this.operation=undefined;

}
function appendNumbers(Numbers){
    this.screen=Numbers

}

const display=document.getElementById("screen");
const Clear=document.getElementById("clear");
const Equals=document.getElementById("equals");
const Numbers=document.getElementsByClassName("number-div");



const calculator= new Calculator()

Numbers.forEach(li=>{
    li.addEventListener("click",()=>{
        calculator.appendNumber(li.innerText)
        calculator.updateDisplay()
    })
    })