var quizdata = [
    {
      question: 'Which is not a framework?',
      a: 'React',
      b: 'Java',
      c: 'Angular',
      d: 'Django',
      correct: 'b'
    },
    {
      question: 'Which is not a programming language?',
      a: 'Python',
      b: 'Java',
      c: 'HTML',
      d: 'JS',
      correct: 'c'
    },
    {
      question: 'CSS stands for',
      a: 'Cascading Style State',
      b: 'Cascading Style Sheet',
      c: 'Cascading Sheet of Style',
      d: 'None',
      correct: 'b'
    }
  ];

  var quiz = document.getElementById('quiz');
  var answerOptions = document.getElementsByName('answer');
  var questionElem = document.getElementById('question');
  var option_a = document.getElementById('a_value');
  var option_b = document.getElementById('b_value');
  var option_c = document.getElementById('c_value');
  var option_d = document.getElementById('d_value');
  var submitBtn = document.getElementById('submit');

  var currentQuestion = 0;
  var quizScore = 0;

  loadQuiz();

  function loadQuiz() {
    var current = quizdata[currentQuestion];
    questionElem.innerText = current.question;
    option_a.innerText = current.a;
    option_b.innerText = current.b;
    option_c.innerText = current.c;
    option_d.innerText = current.d;
    deselect();
  }

  function deselect() {
    for (var i = 0; i < answerOptions.length; i++) {
      answerOptions[i].checked = false;
    }
  }

  submitBtn.addEventListener('click', function () {
    var selectedOption = document.querySelector('input[name="answer"]:checked');

    if (!selectedOption) {
      alert('Please select an answer!');
      return;
    }

    var selectedAnswer = selectedOption.id;

    if (selectedAnswer === quizdata[currentQuestion].correct) {
      quizScore++;
    }

    currentQuestion++;

    if (currentQuestion < quizdata.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>Your Score: ${quizScore} out of ${quizdata.length}</h2>`;
    }
  });
