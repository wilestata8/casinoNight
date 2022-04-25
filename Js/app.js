// 3 sections  each sections has 5 items 
// 3 buttons min and max bet
// MIN bet LOSES = total amount - min bet (5) ; WIN = total amount + 50  
// MAX bet LOSES = total amount - min bet (5) ; WIN = total amount + 50

//varibles
const amount = document.getElementById('amount')
const box1 = document.getElementById('box1')
const box2 = document.getElementById('box2')
const box3 = document.getElementById('box3')

const min = document.getElementById('min')
const mid = document.getElementById('mid')
const max = document.getElementById('max')

// smurts(event listeners) to activate functions
min.addEventListener('click', bet25Dollars)

mid.addEventListener('click', bet50Dollars)

max.addEventListener('click', bet100Dollars)

//Get random number on each reel 1-9

function getRandomNum(){
  return Math.ceil(Math.random() * 9)
  
}
//Bet $25 dollars function
function bet25Dollars(){
  box1.innerText = getRandomNum()
  box2.innerText = getRandomNum()
  box3.innerText = getRandomNum()
 // each box is assigned a random number 

 if(amount.innerText <= '0'){
  message.innerText = "You have reached $0 purchase more coins"
  return
  // conditional to stop user from betting once they hit 0 dollars
}

if(box1.innerText === box2.innerText && box1.innerText === box3.innerText){
  const currentMoney = parseInt(amount.innerText) + 50
  amount.innerText = currentMoney
  message.innerText = "You won $50.00!"
  console.log('$$Winner$$')
  // if all boxes equal same number user wins 50 

} else {
  const currentMoney = parseInt(amount.innerText) - 25 
  amount.innerText = currentMoney
  message.innerText = "Sorry you lost $25.00!"
  console.log('Try Again')
}
}
// if boxes arent equal users loose bet

//Bet $50 dollars function
function bet50Dollars(){
  box1.innerText = getRandomNum()
  box2.innerText = getRandomNum()
  box3.innerText = getRandomNum()
 // each box is assigned a random number 
 if(amount.innerText <= '0'){
  message.innerText = "You have reached $0 purchase more coins"
  return
  // conditional to stop user from betting once they hit 0 dollars
}

if(box1.innerText === box2.innerText && box1.innerText === box3.innerText){
  const currentMoney = parseInt(amount.innerText) + 100
  amount.innerText = currentMoney
  message.innerText = "You won $100.00!"
  console.log('$$Winner$$')
  // if all boxes equal same number user wins 50 

} else {
  const currentMoney = parseInt(amount.innerText) - 50
  amount.innerText = currentMoney
  message.innerText = "Sorry you lost $50.00!"
  console.log('Try Again')
}
}
//Bet 100 function
function bet100Dollars(){
  box1.innerText = getRandomNum()
  box2.innerText = getRandomNum()
  box3.innerText = getRandomNum()
 // each box is assigned a random number 
 if(amount.innerText <= '0'){
  message.innerText = "You have reached $0 purchase more coins"
  return
  // conditional to stop user from betting once they hit 0 dollars
}

if(box1.innerText === box2.innerText && box1.innerText === box3.innerText){
  const currentMoney = parseInt(amount.innerText) + 200
  amount.innerText = currentMoney
  message.innerText = "You won $200.00!"
  console.log('$$Winner$$')
  // if all boxes equal same number user wins 50 

} else {
  const currentMoney = parseInt(amount.innerText) - 50
  amount.innerText = currentMoney
  message.innerText = "Sorry you lost $100.00!"
  console.log('Try Again')
}
}
