 
      $(document).ready(function(){
      
      $('button').hover(
        
    function(){
    $(this).addClass('red');
    
    },
    function(){
  
    $(this).removeClass('red');
    
    }
    
    
    );

    
      
            
  
  $('#clubs').hide();
  $('#sports').hide();
  $('#tech').hide();
  
  $("#1").click(function(){
      $('#clubs').hide();
	   $('#sports').hide();
	   $('#tech').hide();
        $('#departments').show();
      
      
      });
     $('#2').click(function(){
         $('#departments').hide();
		  $('#sports').hide();
		  $('#tech').hide();
           $('#clubs').show();
         
         
         }); 
		 
		
     $('#3').click(function(){
	 $('#tech').hide();
	 $('#clubs').hide();
        $('#departments').hide();
	 $('#sports').show();
	 
	 
	 });
	  $('#4').click(function(){
	 $('#tech').show();
	 $('#clubs').hide();
        $('#departments').hide();
	 $('#sports').hide();
	 
	 
	 });
	  $('button').click(function(){
		 
		  $('.text').hide();
		 });
	 
         $('.text').hide(); 
		 $('#logod1').click(function(){
		    $('.text').hide();
			$('#td1').show();
			
			
		 });
           $('#logod2').click(function(){
		    $('.text').hide();
			$('#td2').show();
			
			
		 });
		  $('#logod3').click(function(){
		    $('.text').hide();
			$('#td3').show();
			
			
		 });
           $('#logod4').click(function(){
		    $('.text').hide();
			$('#td4').show();
			
			
		 });
		  $('#logod5').click(function(){
		    $('.text').hide();
			$('#td5').show();
			
			
		 });
           $('#logod6').click(function(){
		    $('.text').hide();
			$('#td6').show();
			
			
		 });
		  $('#logod7').click(function(){
		    $('.text').hide();
			$('#td7').show();
			
			
		 });
           $('#logod8').click(function(){
		    $('.text').hide();
			$('#td8').show();
			
			
		 });
		 
		  $('#logoc1').click(function(){
		    $('.text').hide();
			$('#tc1').show();
			
			
		 });
           $('#logoc2').click(function(){
		    $('.text').hide();
			$('#tc2').show();
			
			
		 });
          
   
      
      });
      
 
  
