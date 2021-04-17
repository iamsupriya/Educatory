(function() 
 {
  var allQuestions = [{
    question: "__________ is a non-profit organization with a mission to promote the use of best practices for providing security assurance within cloud computing.",
    options: ["CSA", "CCSK", "CCM", "ENISA"],
    answer: 0
  }, {
    question: "Which of the following is the correct expansion of CSA?",
    options: ["Cloud Server Agent", "Cloud Security Alliance", "Cloud Server Alliance", "Cloud Security Agent "],
    answer: 1
  }, {
    question: "Which of the following domain of cloud control matrix is all about protection of the physical location of data in the cloud?",
    options: [" First domain ", "Second domain", "Third domain","fourth domain"],
    answer: 2
  },{
    question: "Which domain establishes the foundation of a data lifecycle in a cloud ?",
    options: ["Data Governance domain", " Control domain", "Third domain", "fourth domain "],
    answer: 0
  }, {
    question: "The ___________ is designed to provide basic security principles to guide cloud providers and to assist prospective cloud consumers in assessing the overall security risk of a cloud provider?",
    options: [" CCSK ", "CCM", "CSA", "ENISA"],
    answer: 1
  },{
    question: " Which of the following is NOT a cloud deployment model??",
    options: ["Public", "Private", "Protected", "Hybrid"],
    answer: 2
  },{
    question: "which of the given area of complete certificate of cloud security knowledge (CCSK) describes encryption and key management?",
    options: ["Cloud operations", "Cloud governance ", " Cloud Architecture", "Cloud Models"],
    answer: 0
  },{
    question: "Which of the following domain of CCSK descibes legal and electronic discovery? ?",
    options: [" Domain 1", " Domain 2", " Domain 3", " Domain 4"],
    answer: 2
  },{
    question: "CCSK has 13 domains which are included in three main areas. State True or False",
    options: ["TRUE", "FALSE"],
    answer: 0
  },{
    question: "The___________________ document says that the clouds economies of scale and flexibility are both a friend and an enemy at the same time from a security point of view",
    options: ["ENISA", "CSA", "ERM", "CCSK"],
    answer: 0
    }];
  
  var quesCounter = 0;
  var selectOptions = [];
  var quizSpace = $('#quiz');
    
  nextQuestion();
    
  $('#next').click(function () 
    {
        chooseOption();
        if (isNaN(selectOptions[quesCounter])) 
        {
            alert('Please select an option !');
        } 
        else 
        {
          quesCounter++;
          nextQuestion();
        }
    });
  
  $('#prev').click(function () 
    {
        chooseOption();
        quesCounter--;
        nextQuestion();
    });
  
  function createElement(index) 
    {
        var element = $('<div>',{id: 'question'});
        var header = $('<h2>Question No. ' + (index + 1) + ' :</h2>');
        element.append(header);

        var question = $('<p>').append(allQuestions[index].question);
        element.append(question);

        var radio = radioButtons(index);
        element.append(radio);

        return element;
    }
  
  function radioButtons(index) 
    {
        var radioItems = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < allQuestions[index].options.length; i++) {
          item = $('<li>');
          input = '<input type="radio" name="answer" value=' + i + ' />';
          input += allQuestions[index].options[i];
          item.append(input);
          radioItems.append(item);
        }
        return radioItems;
  }
  
  function chooseOption() 
    {
        selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
    }
   
  function nextQuestion() 
    {
        quizSpace.fadeOut(function() 
            {
              $('#question').remove();
              if(quesCounter < allQuestions.length)
                {
                    var nextQuestion = createElement(quesCounter);
                    quizSpace.append(nextQuestion).fadeIn();
                    if (!(isNaN(selectOptions[quesCounter]))) 
                    {
                      $('input[value='+selectOptions[quesCounter]+']').prop('checked', true);
                    }
                    if(quesCounter === 1)
                    {
                      $('#prev').show();
                    } 
                    else if(quesCounter === 0)
                    {
                      $('#prev').hide();
                      $('#next').show();
                    }
                }
              else 
                {
                    var scoreRslt = displayResult();
                    quizSpace.append(scoreRslt).fadeIn();
                    $('#next').hide();
                    $('#prev').hide();
                }
        });
    }
  
  function displayResult() 
    {
        var score = $('<p>',{id: 'question'});
        var correct = 0;
        for (var i = 0; i < selectOptions.length; i++) 
        {
          if (selectOptions[i] === allQuestions[i].answer) 
          {
            correct++;
          }
        }
        score.append('You scored ' + correct + ' out of ' +allQuestions.length);
        return score;
  }
})();