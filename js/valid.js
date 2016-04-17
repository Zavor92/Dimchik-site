$(document).ready(function(){


	$('.phone-me').on('click', function(){ 
      	if ( $('#footer .your-name').val() != "" && $('#footer .your-phone').val() != "" )
      	{
      		var phoneMe = $("#footer .your-phone").val().replace(/-/, '').replace(/\s+/,'').replace(/[()]/,'').replace( /[)]/ , '');

      		if (phoneMe.charAt(0) == '8')
				phoneMe = "+7" +  phoneMe.substring(2);      			

      		if (phoneMe.charAt(0) == '+' && phoneMe.charAt(1) == '7'){
      			if (phoneMe.length() != 12){

      				return;
      			}
      			phoneMe = "+7"+' ('+ phoneMe.substring(2, 5) +')'+ ' '+phoneMe.substring(5, 8) +' -'+phoneMe.substring(8);
      		}

      		var data = {
      			"data1":$("#footer .your-name'").val(),
            	"data2":phoneMe
        	};

      		$.ajax({
            url:'dataparser.php'
            , type:'POST'
            , data: data
            , success: function(res) {
                alert(res);
            }
        });
      	}
      	else
      	{
      		$('#failModal').arcticmodal();
      	}

      });
});