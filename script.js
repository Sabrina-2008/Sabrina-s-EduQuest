// Sign-in Screen Functionality
document.getElementById('signinBtn').addEventListener('click', function() {
    const studentNumber = document.getElementById('studentNumber').value.trim();
    if (studentNumber) {
        // Hide sign-in screen
        document.getElementById('signinScreen').style.display = 'none';
        // Show game container
        document.getElementById('gameContainer').style.display = 'block';
        // Store student number for later use
        document.getElementById('studentNumberDisplay').textContent = studentNumber;
    } else {
        alert('Please enter your student number');
    }
});

// Original Game JavaScript (paste your entire original game code here)
// ... (all your original game code from the first implementation) ...

// Modify the resetGame function to show sign-in screen again
function resetGame() {
    currentLevel = 1;
    retryAttempts = 2;
    endScreen.style.display = 'none';
    gameScreen.style.display = 'none';
    homeScreen.style.display = 'block';
    document.getElementById('signinScreen').style.display = 'flex';
    document.getElementById('studentNumber').value = '';
    document.getElementById('studentNumber').focus();
}

// Your original game initialization function
function initGame() {
    // Paste your entire original game JavaScript code here
    // (the first implementation you liked)
    
    // Game state
    let currentLevel = 1;
    let selectedOption = null;
    let retryAttempts = 2;
    let currentQuestion = null;
    
    // DOM elements
    const gameScreen = document.getElementById('gameScreen');
    const endScreen = document.getElementById('endScreen');
    // ... rest of your original game code ...
}
// Game data
const questions = {
    level1: [
        {
            question: "What animal is the school mascot?",
            options: ["Tiger", "Lion", "Polar Bear", "Panda"],
            answer: "Polar Bear"
        },
        {
            question: "What department does Ms. Dhuga teach in?",
            options: ["Math", "Science", "Law", "Global Studies"],
            answer: "Global Studies"
        },
        {
            question: "How many department offices are on the second floor?",
            options: ["5", "3", "4", "6"],
            answer: "5"
        },
        {
            question: "What is the chemical symbol for Iron?",
            options: ["Ir", "Fe", "Mg", "He"],
            answer: "Fe"
        },
        {
            question: "What is the capitol city of Canada?",
            options: ["Brampton", "Toronto", "Ottawa", "Caledon"],
            answer: "Ottawa"
        },
    ],
    level2: [
        {
            question: "Who is considered the father of modern education?",
            options: ["John Dewey", "Maria Montessori", "Horace Mann", "Jean Piaget"],
            answer: "Horace Mann"
        },
        {
            question: "Which Province is the largest by land area?",
            options: ["British Columbia", "Alberta", "Ontario", "Quebec"],
            answer: "Quebec"
        },
        {
            question: "Which teaching method focuses on student-centered learning?",
            options: ["Montessori", "Traditional", "Lecture-based", "Rote memorization"],
            answer: "Montessori"
        },
        {
            question: "What are the first three digits of pi?",
            options: ["3.12", "3.14", "3.41", "3.21"],
            answer: "3.14"
        },
        {
            question: "Who is Mr.Singh?",
            options: ["Student-Teacher", "Custodian", "Department Head", "IDK"],
            answer: "Department Head"
        }
    ],
    level3: [
        {
            question: "What is the average class size in Canadian public schools?",
            options: ["15 students", "20 students", "25 students", "30 students"],
            answer: "25 students"
        },
        {
            question: "Which of these is NOT a common teaching certification?",
            options: ["TEFL", "PGCE", "QTS", "MCAT"],
            answer: "MCAT"
        },
        {
            question: "How many credits do you need to graduate?",
            options: ["30", "16", "24", "20"],
            answer: "30"
        },
        {
            question: "Who is on the 10 dollar bill?",
            options: ["King Charles III", "Viola Desmond", "Doug Ford", "Justin Trudeau"],
            answer: "Viola Desmond"
        },
        {
            question: "What is Canada's national animal?",
            options: ["Moose", "Polar Bear", "Beaver", "Blue Jay"],
            answer: "Beaver"
        }
    ],
    level4: [
        {
            question: "What team ISN'T in our school?",
            options: ["Basketball", "Bowling", "Lacrosse", "Tennis"],
            answer: "Lacrosse"
        },
        {
            question: "What is the first word of our school motto?",
            options: ["Believe", "Empathy", "Succeed", "Dream"],
            answer: "Dream"
        },
        {
            question: "What department does Mr. Juras teach in?",
            options: ["French", "Math", "English", "Business"],
            answer: "French"
        },
        {
            question: "How many continents are in the World?",
            options: ["5", "7", "6", "8"],
            answer: "7"
        },
        {
            question: "What shape is a stop sign?",
            options: ["Pentagon", "Septagon", "Octagon", "Hexagon"],
            answer: "Octagon"
        }
    ],
    level5: [
        {
            question: "What is the term for a teacher's assistant who is learning to teach?",
            options: ["Intern", "Apprentice", "Student teacher", "Teacher candidate"],
            answer: "Student teacher"
        },
        {
            question: "Which of these is NOT one of Howard Gardner's multiple intelligences?",
            options: ["Linguistic", "Musical", "Bodily-kinesthetic", "Emotional"],
            answer: "Emotional"
        },
        {
            question: "How many Vice Prinicpals do we have?",
            options: ["3", "2", "1", "4"],
            answer: "3"
        },
        {
            question: "What department does Ms. Bryan teach in?",
            options: ["French", "Math", "English", "Business"],
            answer: "Math"
        },
        {
            question: "Who is the Attendance Secretary?",
            options: ["Ms.McBride", "Ms.McCreath", "Ms.Kinnear", "Ms.Saldutto"],
            answer: "Ms.Kinnear"
        }
    ],
    level6: [
        {
            question: "Which country has the highest student-teacher ratio in primary schools?",
            options: ["India", "China", "Brazil", "Mexico"],
            answer: "India"
        },
        {
            question: "What is the name of the document that outlines what students should learn?",
            options: ["Syllabus", "Curriculum", "Lesson plan", "Pedagogy"],
            answer: "Curriculum"
        },
        {
            question: "Who is the Lead Custodian?",
            options: ["Ms.Damani", "Mr.Parker", "Mr.Maclean", "Mr.Leiva"],
            answer: "Mr.Maclean"
        },
        {
            question: "Who is NOT a Vice Prinicpal?",
            options: ["Ms.Patel", "Mr.Shaw", "Ms.bhotoia", "Mr.Habib"],
            answer: "Mr.Habib"
        },
        {
            question: "When was our school opened?",
            options: ["2003", "2004", "2002", "2000"],
            answer: "2003"
        }
    ],
    level7: [
        {
            question: "What is the term for adjusting teaching methods to accommodate different learning styles?",
            options: ["Differentiation", "Standardization", "Homogenization", "Normalization"],
            answer: "Differentiation"
        },
        {
            question: "Who was the first artist to reach 100 million monthly listeners on spotify?",
            options: ["Billie Eilish", "The Weeknd", "Justin Beiber", "Drake"],
            answer: "The Weeknd"
        },
        {
            question: "Who is the Superintendent?",
            options: ["Ms.Belchior", "Mr.Diogo", "Ms. Punjabi", "Ms.Kuran"],
            answer: "Ms. Punjabi"
        },
        {
            question: "Who is the Guidance Office Secretary?",
            options: ["Ms.Patel", "Ms. McCreath", "Mr. Shaw", "Ms. Saldutto"],
            answer: "Ms. Saldutto"
        },       
        {
            question: "Who is the Librarian?",
            options: ["Ms.Refling", "Ms. Kllapi", "Mr. Sykes", "Ms.Modi"],
            answer: "Ms.Refling"
        }
    ],
    level8: [
        {
            question: "Which teaching approach emphasizes learning through discovery?",
            options: ["Constructivist", "Behaviorist", "Essentialist", "Perennialist"],
            answer: "Constructivist"
        },
        {
            question: "Who is NOT a Guidance Counselor?",
            options: ["Mr. Parker", "Ms. McBride", "Ms. Rampersad", "Mr. Koene"],
            answer: "Ms. McBride"
        },
        {
            question: "Which country was the first to establish compulsory education?",
            options: ["United States", "France", "Prussia (Germany)", "England"],
            answer: "Prussia (Germany)"
        },
        {
            question: "Who is the head of the Math Department?",
            options: ["Mr. Gray", "Ms. Wang", "Ms. Molenhuis", "Ms. Bryan"],
            answer: "Ms. Bryan"
        },       
        {
            question: "What do you call a group of geese?",
            options: ["Gaggle", "Gang", "Family", "Honk Patrol"],
            answer: "Gaggle"
        }
    ],
    level9: [
        {
            question: "What is the term for a teacher's ongoing professional development?",
            options: ["In-service training", "Continuing education", "Pedagogical development", "Teacher maturation"],
            answer: "Continuing education"
        },
        {
            question: "Which educational psychologist developed the zone of proximal development?",
            options: ["Jean Piaget", "Jerome Bruner", "Lev Vygotsky", "Albert Bandura"],
            answer: "Lev Vygotsky"
        },
        {
            question: "Who gifted the Statue of Liberty of the U.S.?",
            options: ["Canada", "China", "IKEA", "France"],
            answer: "France"
        },
        {
            question: "Who is the head of the Science department?",
            options: ["Ms. Raue", "Ms. Noor", "Ms. Kaur", "Mr. Mbengue"],
            answer: "Ms. Raue"
        },
        {
            question: "What department does Ms. Yeats teach in?",
            options: ["Tech", "Math", "Art", "English"],
            answer: "Math"
        }
    ],
    level10: [
        {
            question: "When does Education week end?",
            options: ["Monday, May 5", "Friday, May 9", "Friday, May 30", "Never"],
            answer: "Friday, May 9"
        }
    ]
};

// Game state
let currentLevel = 1;
let selectedOption = null;
let retryAttempts = 2;
let currentQuestion = null;

// DOM elements
const homeScreen = document.getElementById('homeScreen');
const gameScreen = document.getElementById('gameScreen');
const endScreen = document.getElementById('endScreen');
const startBtn = document.getElementById('startBtn');
const playAgainBtn = document.getElementById('playAgainBtn');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const submitBtn = document.getElementById('submitBtn');
const feedback = document.getElementById('feedback');
const currentLevelDisplay = document.getElementById('currentLevel');
const progressBar = document.getElementById('progressBar');

// Event listeners
startBtn.addEventListener('click', startGame);
playAgainBtn.addEventListener('click', resetGame);
submitBtn.addEventListener('click', checkAnswer);

// Start the game
function startGame() {
    homeScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    loadQuestion();
    updateProgressBar();
}

// Load a random question for the current level
function loadQuestion() {
    const levelQuestions = questions[`level${currentLevel}`];
    currentQuestion = levelQuestions[Math.floor(Math.random() * levelQuestions.length)];
    
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';
    
    currentQuestion.options.forEach((option, index) => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'option-btn';
        optionBtn.textContent = option;
        optionBtn.dataset.option = option;
        optionBtn.addEventListener('click', selectOption);
        optionsContainer.appendChild(optionBtn);
    });
    
    currentLevelDisplay.textContent = currentLevel;
    feedback.textContent = '';
    submitBtn.disabled = true;
    selectedOption = null;
}

// Select an option
function selectOption(e) {
    // Deselect all options
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Select clicked option
    e.target.classList.add('selected');
    selectedOption = e.target.dataset.option;
    submitBtn.disabled = false;
}

// Check the selected answer
function checkAnswer() {
    if (!selectedOption) return;
    
    const optionButtons = document.querySelectorAll('.option-btn');
    const correctAnswer = currentQuestion.answer;
    
    // Disable all options
    optionButtons.forEach(btn => {
        btn.style.pointerEvents = 'none';
    });
    
    // Mark correct and wrong answers
    optionButtons.forEach(btn => {
        if (btn.dataset.option === correctAnswer) {
            btn.classList.add('correct');
        } else if (btn.dataset.option === selectedOption && selectedOption !== correctAnswer) {
            btn.classList.add('wrong');
        }
    });
    
    // Check if answer is correct
    if (selectedOption === correctAnswer) {
        feedback.textContent = 'Correct! Well done!';
        feedback.className = 'feedback correct';
        
        // Add confetti effect
        createConfetti();
        
        // Move to next level after delay
        setTimeout(() => {
            if (currentLevel < 10) {
                currentLevel++;
                questionText.parentElement.classList.add('flip-animation');
                setTimeout(() => {
                    questionText.parentElement.classList.remove('flip-animation');
                    loadQuestion();
                    updateProgressBar();
                }, 600);
            } else {
                // Game completed
                gameScreen.style.display = 'none';
                endScreen.style.display = 'block';
                createConfetti(true);
            }
        }, 1500);
    } else {
        retryAttempts--;
        
        if (retryAttempts > 0) {
            feedback.textContent = `Incorrect. You have ${retryAttempts} more attempt(s). Try again!`;
            feedback.className = 'feedback wrong';
            
            // Re-enable options for retry
            setTimeout(() => {
                optionButtons.forEach(btn => {
                    btn.style.pointerEvents = 'auto';
                    if (btn.dataset.option !== selectedOption) {
                        btn.classList.remove('wrong');
                    }
                });
                
                submitBtn.disabled = true;
                selectedOption = null;
            }, 1000);
        } else {
            feedback.textContent = `Incorrect. The correct answer is: ${correctAnswer}`;
            feedback.className = 'feedback wrong';
            
            // Show correct answer and move on after delay
            setTimeout(() => {
                if (currentLevel < 10) {
                    currentLevel++;
                    retryAttempts = 2;
                    questionText.parentElement.classList.add('flip-animation');
                    setTimeout(() => {
                        questionText.parentElement.classList.remove('flip-animation');
                        loadQuestion();
                        updateProgressBar();
                    }, 600);
                } else {
                    // Game completed
                    gameScreen.style.display = 'none';
                    endScreen.style.display = 'block';
                    createConfetti(true);
                }
            }, 2000);
        }
    }
}

// Update progress bar
function updateProgressBar() {
    const progress = (currentLevel - 1) / 10 * 100;
    progressBar.style.width = `${progress}%`;
}

// Create confetti effect
function createConfetti(massive = false) {
    const colors = ['#f1c40f', '#e74c3c', '#3498db', '#2ecc71', '#9b59b6'];
    const count = massive ? 100 : 20;
    
    for (let i = 0; i < count; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.width = `${Math.random() * 10 + 5}px`;
        confetti.style.height = `${Math.random() * 10 + 5}px`;
        confetti.style.animation = `confettiFall ${Math.random() * 3 + 2}s linear forwards`;
        
        document.body.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Reset the game
function resetGame() {
    currentLevel = 1;
    retryAttempts = 2;
    endScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    loadQuestion();
    updateProgressBar();
}