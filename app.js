/*
oyunun fonksiyonları: 

*/

const game =document.querySelector("#game"),
guessBtn = document.querySelector("#guess-btn"),
guessInput = document.querySelector("#guess-input"),
message = document.querySelector(".message"),
minNum = document.querySelector(".min-num"),
maxNum = document.querySelector(".max-num");



//oyunda kullanılacak değerler

let min=1;
max=10,
winningNumber=10,
guessesLeft=3;

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener('click', () => {
    let guess = parseInt(guessInput.value);
  if(guess === winningNumber){
    gameOver(true, `Kazandınız! Doğru Tahmin: ${winningNumber}`);
  }else{
   
    guessesLeft --;


    if(guessesLeft === 0){
        gameOver(false,`Kaybettiniz! Doğru Tahmin: ${winningNumber}`);
    }
    else{
        guessInput.computedStyleMap.borderColor = 'red';

        guessInput.value='';

        //kullanıcıya kaç hakkının kaldığını söyle
        setMessage(`${guess} doğru değil, ${guessesLeft} hakkınız kaldı`,'red');
    }
  }

});

// oyunu bitirme

function gameOver(won,msg){
    let color = won ? "green" :"red";
    console.log(color);

    guessInput.disabled= true;

    guessInput.borderColor= color;
    //kullanıcıyı
    setMessage(msg)

}

function setMessage(msg,color){
    message.style.color=color;
    message.textContent=msg;
}


function getRandomNum(min,max){
   let random = Match.floor( Match.random() * (max - min + 1) + min);
   console.log(random);

   return random;

}


