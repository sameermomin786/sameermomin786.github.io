console.log('sam')
$.ajax({
	type: "GET",
	url: `http://103.88.221.150:9439/api/bank/getAll`,
	responseType: "json",
	success: function (response) {
        console.log("checkbankdata=>", response)
        $.each(response, function (index, value) { 
            console.log("data=>",value);
            $("#bankdetail").append(`
            <tr>
            <td>${value.bankId}</td>
            <td>${value.bankName}</td>
            <td>${value.accountNumber}</td>
            <td>${value.ifscCode}</td>
            <td>${value.ipAddress}</td>
            </tr>


            `);

             
        });
	},
    complete: function(){
$("#tabledetail").DataTable();
    }
    
   	
})

function getBankdata(){
    
}