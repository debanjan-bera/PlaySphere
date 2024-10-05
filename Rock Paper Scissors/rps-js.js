const gameCont = document.querySelector(".cont"),
  userRes = document.querySelector(".user-choice"),
  cpuRes = document.querySelector(".cpu-choice"),
  result = document.querySelector(".res"),
  optionImages = document.querySelectorAll(".options-img"),
  playerScore = document.querySelector(".p-value"),
  compScore= document.querySelector(".c-value"),
  cho = document.querySelectorAll(".cho"),
  ctext = document.querySelectorAll(".choice-text"),
  reset= document.querySelector(".reset-opt");
  let gameStart = 0;
  let userScoreValue = 0;
  let compScoreValue = 0;

  // Load scores from local storage
function loadScores() {
  const storedUserScore = localStorage.getItem('userScore');
  const storedCompScore = localStorage.getItem('compScore');
  const storesdGameIsStart = localStorage.getItem('start')
  
  if (storedUserScore) {
    userScoreValue = parseInt(storedUserScore);
    playerScore.textContent = userScoreValue;
  }
  
  if (storedCompScore) {
    compScoreValue = parseInt(storedCompScore);
    compScore.textContent = compScoreValue;
  }
  if(gameStart){
    gameStart = parseInt(storesdGameIsStart)
  }
}

// Update scores in local storage
function updateScores() {
  localStorage.setItem('userScore', userScoreValue);
  localStorage.setItem('compScore', compScoreValue);
  localStorage.setItem('start', gameStart)
}

function resetScroe(){
  if(localStorage.getItem('start') !== '0'){
    localStorage.clear();
    userRes.src = cpuRes.src = "/images/rock.png";
    compScoreValue = userScoreValue = 0;
    result.textContent = "Let's Play!!!";
    playerScore.textContent=userScoreValue;
    compScore.textContent= compScoreValue;
  }

  };
function determineOutcome(userChoice, cpuChoice) {
  const outcomes = {
    RR: "Draw",
    RP: "CPU",
    RS: "User",
    PP: "Draw",
    PS: "CPU",
    PR: "User",
    SS: "Draw",
    SR: "CPU",
    SP: "User",
  };
  
  return outcomes[userChoice + cpuChoice];
}
function handleImageClick(image,index) {
  userRes.src = cpuRes.src = "/images/rock.png";
  ctext.forEach((text) => text.classList.remove("active"));
  optionImages.forEach((img) => img.classList.remove("active"));
  image.classList.add("active");
  ctext[index].classList.add("active");
  gameCont.classList.add("start")
  result.textContent = "Wait!!!"
  let gameDelay = setTimeout(() => {
    gameCont.classList.remove("start");
      
    const imgElement = image;
    userRes.src = imgElement.src;
    // console.log(imgElement.src);
    let randomNumber = Math.floor(Math.random() * 3);
    let cpuImages = ["rock", "paper", "scissors"];
    cpuRes.src = `/images/${cpuImages[randomNumber]}.png`;
    const cpuValue = ["R", "P", "S"];
    const userValue = ["R", "P", "S"];
   

    let outComeValuses = determineOutcome(userValue[index],cpuValue[randomNumber])
    result.textContent =
      outComeValuses === "Draw" ? "Match Draw" : `${outComeValuses} Won!!!`;
      optionImages.forEach((img) => img.classList.remove("active"));
      ctext.forEach((text) => text.classList.remove("active"));

    if(outComeValuses === "CPU"){
      compScoreValue+=1;
      compScore.textContent= compScoreValue;
    }
    if(outComeValuses === "User"){
      userScoreValue+=1;
      playerScore.textContent=userScoreValue;
    }
    gameStart++;
    updateScores();
    
  }, 1200);
}

optionImages.forEach((image, index) => {
  image.addEventListener("click", () => {
    
    handleImageClick(image,index);
    result.textContent = "Let's Play!!!";

    userRes.src = cpuRes.src = "/images/rock.png";
  })
});

console.log(gameStart,compScoreValue);


reset.addEventListener("click",()=>{
  resetScroe();
})
loadScores();


