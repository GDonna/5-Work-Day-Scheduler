var buttons = document.getElementsByClassName("saveBtn")

let container = $('.container-lg');

let dailyHours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]

$(function () {
  for (let i = 0; i < dailyHours.length; i++) {
    let americanHrs = dailyHours[i]+'AM';
    if(dailyHours[i] >= 12){
      americanHrs = dailyHours[i]+'PM';
      if(dailyHours[i] > 12 ){
        americanHrs = dailyHours[i] - 12 + 'PM';
      }
    }
    if(dailyHours[i] == 24){
      americanHrs = '12AM';
    }

    let mainContainer = $("<div class='row time-block'>");
    let hourCol = $("<div class='col-2 col-md-1 hour text-center py-3'>");
    let textCol = $("<textarea class='col-8 col-md-10 description' rows='3'>");
    textCol.attr("id", "textarea-" +i);
    let btnCol = $("<button class='btn saveBtn col-2 col-md-1' aria-label='save'>");
    let btnIcon = $("<i class='fas fa-save' aria-hidden='true'>");
    
    var newDate = dayjs().format('HH')
    console.log(newDate)
    if(parseInt(newDate) < dailyHours[i]) { 
      mainContainer.addClass('future');
    } else if((parseInt(newDate) == dailyHours[i])) {
      mainContainer.addClass('present');
    } else if((parseInt(newDate) > dailyHours[i])) { 
      mainContainer.addClass('past');
    }

   let textareaValue = localStorage.getItem('notes' + i);

    textCol.val(textareaValue);
    btnCol.append(btnIcon);
    hourCol.append(americanHrs);
    mainContainer.append(hourCol, textCol, btnCol);
    container.append(mainContainer);
  }

  $(".saveBtn").on('click', function() {
    for (let i = 0; i < dailyHours.length; i++) {
      const elementValue = $('#textarea-' + i).val();
      localStorage.setItem('notes' + i, elementValue);
    }
  })
}

)

