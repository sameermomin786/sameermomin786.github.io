
$.ajax({
	type: "GET",
	url: ` http://103.88.221.150:9439/api/staff
     `,
	responseType: "json",
	success: function (response) {
        console.log("check-staf=>api",response);
        $.each(response, function (index, value) { 
            console.log("check-each=>",value);
            $("#staf-details").append(`
            <tr>
            <td>${value.staffId}</td>
            <td>${value.staffName}</td>
            <td>${value.email}</td>
            <td>${value.contactNumber}</td>
            <td>${value.address}</td>
            
            </tr>
            
            `);
             
        });
       
	},
    complete: function(){
        $("#table-details").DataTable();
    }
	
});


$("#save-details").on('click', function () {
    console.log("hello");

    let staffName = $("#staff-Name").val()
    console.log("staffName",staffName);

    let StaffPhoneNumber = $("#phone-number").val()
    console.log("StaffPhoneNumber",StaffPhoneNumber);
    
        let staffEmail = $("#email").val()
        console.log("staffEmail",staffEmail);

    let StaffAddress = $("#Address").val()
    console.log("StaffAddress",StaffAddress);
    
    window.onload = function(){
        alert("check")
    }    
 function filData() {
    
 }   
$.ajax({
    url: `http://103.88.221.150:9439/api/staff/`,
    dataType: 'json',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({
       
            "address": StaffAddress,
            "contactNumber": StaffPhoneNumber,
            "createdBy": "Admin tast",
            "createdId": 1,
            "email":staffEmail, 
            "staffName": staffName
        
    }),
    complete: function (response) {
        
    },
    
    
});
});



