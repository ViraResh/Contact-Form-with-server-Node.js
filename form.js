$(document).ready(function() {
  $(".submit").click(function() {
    var name = $('#firstname').val();
    var lastname = $('#lastname').val();
    var radio = $("input:radio[name=optionsRadios]:checked" ).val();
    var year = $('#year').val();
    var phone = $('#phone').val();

    // validate and process form here

    $.ajax({
      url: 'http://localhost:3000/send',
      type: 'POST',
      dataType: 'json',
      data: {'firstname': name, 'lastname': lastname, 'gender': radio, 'year': year, 'phone': phone},
      success: function(result){
        JSON.parse(result);
      },
      error: function (xhr, ajaxOptions, thrownError) {
        console.log(xhr);
      }
    });
  });
});