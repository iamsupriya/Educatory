(function() 
 {
  var allQuestions = [{
    question: "Point out the wrong statement.",
    options: ["Amazon Machine Instances are sized at various levels and rented on a computing/hour basis", "The metrics obtained by CloudWatch may be used to enable a feature called Auto Scaling", "A number of tools are used to support EC2 services", "None of the mentioned"],
    answer: 3
  }, {
    question: "Which of the following is a structured data store that supports indexing and data queries to both EC2 and S3?",
    options: ["CloudWatch", "Amazon SimpleDB", "Amazon Cloudfront", "All of the mentioned"],
    answer: 1
  }, {
    question: " Which of the following is a billing and account management service?",
    options: ["Amazon Elastic MapReduce", " Amazon Mechanical Turk", "Amazon DevPay","Multi-Factor Authentication"],
    answer: 2
  },{
    question: "Which of the following is built on top of a Hadoop framework using the Elastic Compute Cloud?",
    options: ["Amazon Elastic MapReduce", "Amazon Mechanical Turk", "Amazon DevPay","Multi-Factor Authentication"],
    answer: 0
  }, {
    question: "What is the use of Glacier storage service?",
    options: ["database", "server", "Storage", "archiving and backup"],
    answer: 3
  },{
    question: "Which of the following is not a AWS storage service?",
    options: ["S3", "Elastic block storage", "Snapshot", "Elastic File System"],
    answer: 1
  },{
    question: "S3 bucket can be used for",
    options: ["Storage", "hosting static web sites", "to create database", "both A&B"],
    answer: 3
  },{
    question: "Snapshots (backups) of any EBS volume are stored in?",
    options: ["EBS", "Glacier", "EFS", "S3"],
    answer: 3
  },{
    question: "Which of the following we cannot use to upload archives to Amazon Glacier?",
    options: ["AWS Console", "AWS CLI", " AWS SDK", "REST API"],
    answer: 0
  },{
    question: "Which statement is true related to Route Table and Subnet?",
    options: ["Subnet need not be associate with route table", "Subnet can only be associated with one route table", "Subnet can be associated with multiple route table", "You can not associate multiple subnets with same route table."],
    answer: 1
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