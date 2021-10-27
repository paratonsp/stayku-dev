$(function() {

    $("#add_property_button").on("click", function () {
        var that = this;

        if($("[name='property_name']").val() == '') {
            alert('Please enter Property name');
            return false;
        }
        if($("[name='number_of_rooms']").val() == '') {
            alert('Please enter Number of rooms');
            return false;
        }
        if($("[name='number_of_rooms']").val() > 1000) {
            alert('You can add maximum 1000 rooms.');
            return false;
        }
        
        $(that).prop("disabled", true);

		$.ajax({
			type: "POST",
			url: getBaseURL() + "auth/create_company/",
			data: {
				name: 		$("[name='property_name']").val(),
				number_of_rooms: 	$("[name='number_of_rooms']").val(),
				region: 			$("[name='region']").val(),
				subscription_type: 	$("[name='subscription_type']").val(),
				created_by:         'admin'
			},
			dataType: "json",
			success: function(data) 
			{
				window.location.reload();			
			}
		});	

	});

});