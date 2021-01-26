function game() {
    let startBtn = document.getElementsByClassName('startBtn')[0];

    startBtn.addEventListener('click', () => {
        startBtn.style.display = 'none';
        
        let score = document.getElementsByClassName('score')[0];
        score.style.display = 'none';

        let count = 59;
        let scoreTrack = 0;
        
        let countPrint = document.getElementsByClassName('timer')[0];
        countPrint.innerHTML = '60';

        let timer = setInterval(() => {
            countPrint.innerHTML = count;
            count--;

            if (count < 0) {
                clearInterval(timer);
                
                showNumbs.style.display = 'none';
                showInput.style.display = 'none';

                score.innerHTML = `${scoreTrack} Right Answers`;
                score.style.display = 'block';

                startBtn.style.display = 'block';
            }  
        }, 1000);

        function randomNumbers() {
            let randomNumb = Math.floor(Math.random() * 40) + 1;
            
            return randomNumb
        }
        
        let showNumbs = document.getElementsByClassName('numbers')[0];
        showNumbs.style.display = 'block';
        showNumbs.innerHTML = `${randomNumbers()} + ${randomNumbers()}`;

        let showInput = document.getElementsByClassName('inputAnswer')[0];
        showInput.style.display = 'block';

        showInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                let correctAnswer = showNumbs.textContent.split(" ");
                let firstNumb = Number(correctAnswer[0]);
                let secondNumb = Number(correctAnswer[2]);

                if (showInput.value == firstNumb + secondNumb) {
                    let correctAudio = document.querySelector('.correctSound').play();
                    showNumbs.innerHTML = `${randomNumbers()} + ${randomNumbers()}`;
                    scoreTrack++;
                } else {
                    let errorAudio = document.querySelector('.errorSound').play();
                }

                showInput.value = '';
            }
            
        });

    })
        
}

game();