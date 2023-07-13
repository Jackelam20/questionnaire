
var strtButton = document.getElementById('start');
var timerEl = document.getElementById ('timer');
var q = document.getElementById('question');
var ans1 = document.getElementById('answer1');
var ans2 = document.getElementById('answer2');
var ans3 = document.getElementById('answer3');
var ans4 = document.getElementById('answer4');
var ans5 = document.getElementById('answer5');

                                           


var countdown = function countdown() {

strtButton.style.display = 'none';
var currentQuestion = 1;


    var timeLeft = 10000;

    var timeInterval = setInterval(function () {
        if(timeLeft > 1) {
            timerEl.textContent = timeLeft + 'time remaining';
            timeLeft--;
        } else if (timeLeft === 1){
            timeLeft.textContent = timeLeft = 'time expirded';

            timeLeft--;
        }else {
            timerEl.textContent ='';
            clearInterval(timeInterval);

            alert('rats make you crazy');
        }
    } );
    
        nextQuestion(currentQuestion);
        function nextQuestion(currentQuestion) {
            if (currentQuestion === 1) { 
               
                question1()
            };
            if (currentQuestion === 2) {
                
                question2();
            };
            if (currentQuestion === 3) {
                
                question3();
            };
            if (currentQuestion === 4) {
              
                question4();
            };
        }
      
   

    function question1() {
        q.textContent = 'were you crazy once?';
        ans1.textContent.content = 'yes';
        ans1.style.display = 'block';
        ans2.textContent.content = 'no';
        ans2.style.display = 'block';
        ans3.textContent.content = 'peas';
        ans3.style.display = 'block';
        ans4.textContent.content = 'maybe';
        ans4.style.display = 'block';
        ans5.textContent.content = 'none of the above';
        ans5.style.display = 'block';
        ans1.addEventListener('click', function (event){
            if (event.target === 'yes') {
                alert (message='Conrats!');
            }if (event.target === 'no') {
                alert (message ='AW rats!');
            }if (event.target === 'peas') {
                alert (message ='AW rats!');
            }if (event.target === 'maybe') {
                alert (message ='AW rats!');
            }if (event.target === 'none of the above') {
                alert (message ='AW rats!');
            };
            currentQuestion++;
            nextQuestion(currentQuestion);
        })
        
    }

    function question2() {
        q.textContent = 'were you locked in a rubber room?';
        ans1.textContent.content = 'yes';
        ans1.style.display = 'block';
        ans2.textContent.content = 'no';
        ans2.style.display = 'block';
        ans3.textContent.content = 'peas';
        ans3.style.display = 'block';
        ans4.textContent.content = 'maybe';
        ans4.style.display = 'block';
        ans5.textContent.content = 'none of the above';
        ans5.style.display = 'block';
        ans1.addEventListener('click', function (event){
            if (event.target.textContent === 'yes') {
                alert(message='Conrats!');
            }if (event.target === 'no') {
                alert(message ='AW rats!');
            }if (event.target === 'peas') {
                alert(message ='AW rats!');
            }if (event.target === 'maybe') {
                alert(message ='AW rats!');
            }if (event.target === 'none of the above') {
                alert(message ='AW rats!');
            };
            currentQuestion++;
            nextQuestion(currentQuestion);
        })
        
    }

    function question3() {
        q.textContent = 'wre there rats in the rubber room?';
        ans1.textContent.content = 'yes';
        ans1.style.display = 'block';
        ans2.textContent.content = 'no';
        ans2.style.display = 'block';
        ans3.textContent.content = 'peas';
        ans3.style.display = 'block';
        ans4.textContent.content = 'maybe';
        ans4.style.display = 'block';
        ans5.textContent.content = 'none of the above';
        ans5.style.display = 'block';
        ans1.addEventListener('click', function (event){
            if (event.target === 'yes') {
                alert (message='Conrats!');
            }if (event.target === 'no') {
                alert (message ='AW rats!');
            }if (event.target === 'peas') {
                alert (message ='AW rats!');
            }if (event.target === 'maybe') {
                alert (message ='AW rats!');
            }if (event.target === 'none of the above') {
                alert (message ='AW rats!');
            };
            currentQuestion++;
            nextQuestion(currentQuestion);
        })
    }
    function question4() {
        q.textContent = 'DO rats make you Crazy?';
        ans1.textContent.content = 'yes';
        ans1.style.display = 'block';
        ans2.textContent.content = 'no';
        ans2.style.display = 'block';
        ans3.textContent.content = 'peas';
        ans3.style.display = 'block';
        ans4.textContent.content = 'maybe';
        ans4.style.display = 'block';
        ans5.textContent.content = 'none of the above';
        ans5.style.display = 'block';
        ans1.addEventListener('click', function (event){
            if (event.target === 'yes') {
                alert (message='Conrats!');
            }if (event.target === 'no') {
                alert (message ='AW rats!');
            }if (event.target === 'peas') {
                alert (message ='AW rats!');
            }if (event.target === 'maybe') {
                alert (message ='AW rats!');
            }if (event.target === 'none of the above') {
                alert (message ='AW rats!');
            };
            currentQuestion++;
            nextQuestion(currentQuestion);
        })
        
    }
    

     
      
    
}
strtButton.addEventListener('click', countdown);


