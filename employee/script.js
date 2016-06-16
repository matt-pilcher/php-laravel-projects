$(document).ready(function(){
  $(':submit').on('click', function() { 
    var button = $(this).val();
    $.ajax({ 
      url: 'test.php', 
      data: 'button=' + $(this).val(), 
      dataType: 'json', 
    })
    .done(function(data) { // Data variable contains the data from serverside
      $('#employees').html(''); 
				
      if (button == 'all') { 
        for (var i in data.programmers) {
          $('#employees').append('Programmer: ' + data.programmers[i] + '<br>');
        }
        for (var i in data.engineers) {
          $('#employees').append('Engineer: ' + data.engineers[i] + '<br>');
        }
      }
      else if (button == 'programmers') { 
        for (var i in data) {
          $('#employees').append('Programmer: ' + data[i] + '<br>');
        }
      }
      else if (button == 'engineers') { 
        for (var i in data) {
          $('#employees').append('Engineer: ' + data[i] + '<br>');
        }
      }
    });
    return false; // Keeps the page from refreshing 
  });
});