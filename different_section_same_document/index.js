var counter = 1;
$('body').on('click', '.next', function() { 
	$('.content').hide();

    counter++;
	$('#content-'+counter+'').show();
    
	if(counter > 1) {
		$('.back').show();
	};
	if(counter > 3) {
		$('.content-holder').hide();
		$('.end').show();
	};
	
});

$('body').on('click', '.back', function() { 
    //alert(counter);
    counter--;
    $('.content').hide();
    var id = counter;    
	$('#content-'+id).show();
    if(counter<2){
            $('.back').hide();
    }
    
	
});

$('body').on('click', '.edit-previous', function() { 
	
});
