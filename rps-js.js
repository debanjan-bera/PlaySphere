const gameCont = document.querySelector(".container"),
    userRes = document.querySelector(".user-choice"),
    cpuRes = document.querySelector(".cpu-choice"),
    result = document.querySelector(".res"),
    optionImages = document.querySelectorAll(".options-img");

optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        optionImages.forEach(img => img.classList.remove("active"));
        image.classList.add("active");

        const imgElement = image;
        userRes.src = imgElement.src;
        // console.log(imgElement.src);
        let randomNumber = Math.floor(Math.random()*3);
        let cpuImages = ['rock','paper','scissors'];
        cpuRes.src = `images/${cpuImages[randomNumber]}.png`;
        const cpuValue = ['R','P','S']
        const userValue = ['R','P','S']
        let outCome= {
            RR:"Draw",
            RP:"CPU",
            RS:"User",
            PP:"Draw",
            PR:"CPU",
            PS:"User",
            SS:"Draw",
            SR:"CPU",
            SP:"User",
        }
        randomValue = userValue[index]+ cpuValue[randomNumber];

        let outComeValuses= outCome[randomValue];
      
        result.textContent = outComeValuses === "Draw" ? "Match Draw" : `${outComeValuses} Won!!!`
        console.log(userValue[randomNumber], cpuValue[randomNumber],outComeValuses);

    })
});
