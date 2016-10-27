// VARIABLES

var title = 'Тест по программированию';
var titleButton = 'Проверить мои результаты';
var questionsWithAnswersCollection = [];



// CREATE A PAGE WITH THE TEST

var programmingTest = {
  createTitle: function() {
    var testTitle = document.createElement('h1');
    testTitle.innerHTML = title;
    document.body.insertBefore(testTitle, document.body.firstChild);
  },
  
  createForm: function () {
    var form = document.createElement('form');
    document.body.insertBefore(form, document.body.lastChild);
  },

  createQuestions: function(questionsWithAnswersCollection) {
    var questionsList = document.createElement('ol');
    document.getElementsByTagName('form')[0].appendChild(questionsList);
    var namberQuestions = questionsWithAnswersCollection.length;
    for (var i = 0; i < namberQuestions; i++) {
      var questionItem = document.createElement('li');
      questionItem.className = 'question-item';
      var questionBlock = questionsWithAnswersCollection[i];
      questionItem.innerHTML = questionBlock[0];
      questionsList.appendChild(questionItem);

      var answers = questionBlock[1];
      var namberAnswers = answers.length;

      var list = document.createElement("ul");
      questionItem.appendChild(list);

        for (var j = 0; j < namberAnswers; j++) {
          var answerItem = document.createElement('li');
          var answerInput = document.createElement('input');
          var inputLabel = document.createElement('label');
          answerInput.setAttribute('type', 'checkbox');
          answerItem.className = 'checkbox';

          inputLabel.innerHTML = answers[j];

          list.appendChild(answerItem);
          answerItem.appendChild(inputLabel);
          inputLabel.insertBefore(answerInput, inputLabel.firstChild);
        }
    }
  },

  createButton: function (titleButton) {
    var formButton = document.createElement('button');
    formButton.innerHTML = titleButton;
    formButton.className = 'btn btn-primary';
    document.getElementsByTagName('form')[0].appendChild(formButton);
  }
}

questionsWithAnswersCollection.push(['Вопрос №1', ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3']]);
questionsWithAnswersCollection.push(["Вопрос №2", ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3']]);
questionsWithAnswersCollection.push(['Вопрос №3', ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3']]);

programmingTest.createTitle(title);
programmingTest.createForm();
programmingTest.createQuestions(questionsWithAnswersCollection);
programmingTest.createButton(titleButton);
