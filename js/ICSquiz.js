(function() 
 {
  var allQuestions = [{
    question: " ____________ Storage devices connect storage to a network where they are accessed through file shares",
    options: ["DAS", "NAS", "MAS", "SAS"],
    answer: 1
  }, {
    question: "Network-Attached storage devices support____________ protocols.",
    options: ["NFS", "CIFS", "SMB", "ALl"],
    answer: 3
  }, {
    question: "Disk Management allows you to change disks between various types _________partition styles",
    options: ["MBR & MTR", "MBR & GPR", "MBR & GPT","GPR & GPT"],
    answer: 2
  },{
    question: " _________ is a process of preparing a data storage device for initial use.",
    options: ["Disk Formatting", "Disk Partitioning", "Disk Start", "Disk Initializing"],
    answer: 3
  }, {
    question: "We can extend spanned volume onto a maximum of _______ disks.?",
    options: ["34", "44", "32", "30"],
    answer: 2
  },{
    question: "___________ volume is a fault-tolerant volume whose data is duplicated on two physical disks?",
    options: ["Stripped", "Mirrored", "Spanned", "None"],
    answer: 1
  },{
    question: "  _________ virtual hard disk format support more than 2040GB disk size.",
    options: ["VHDX", "VHD", "VHDP", "VHDT"],
    answer: 0
  },{
    question: "Stripping is also known as ________. ?",
    options: ["RAID 1", "RAID 9", "RAID 2", "RAID 0"],
    answer: 3
  },{
    question: "Disk can be formatted using _________file system.",
    options: ["NTSS", "NTFS", "FTFS", "NTFT"],
    answer: 1
  },{
    question: "We can create only four primary partitions using ___________ partitioning style.",
    options: ["MBR", "GPT", "TBR", "GBR"],
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