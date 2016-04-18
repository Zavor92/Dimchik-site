$(document).ready(function(){


	$('.phone-me').on('click', function(){ 
      	if ( $('#footer .your-name').val() != "" && $('#footer .your-phone').val() != "" )
      	{
          
      		var phoneMe = $("#footer .your-phone").val().replace(/-+/g, '').replace(/\s+/g,'').replace(/[()]+/g,'');

          if (phoneMe.match(/[А-яЁё]+/)){
            $('#phoneModal').arcticmodal();
            return;
          }

          // формирование строки с номером +7 (999) 999-9999
      		if (phoneMe.charAt(0) == '8')
				phoneMe = "+7" +  phoneMe.substring(1);      			

      		if (phoneMe.charAt(0) == '+' && phoneMe.charAt(1) == '7'){
      			if (phoneMe.length != 12){

      				return;
      			}
      			phoneMe = "+7"+' ('+ phoneMe.substring(2, 5) +')'+ ' '+phoneMe.substring(5, 8) +'-'+phoneMe.substring(8);
      		}

          var name = "name:" + $("#footer .your-name'").val();
          var phone = "phone:"+phoneMe

          // данные для отправки
      		var data = {name,phone};

      		$.ajax({
            url:'dataparser.php'
            , type:'POST'
            , data: data
            , success: function(res) {
                $('#SuccessModal').arcticmodal();
            }
        });
      	}
      	else
      	{
      		$('#failModal').arcticmodal();
      	}

      });
});