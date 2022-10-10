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


$("#save-bank").on('click', function () {

let bankName = $("#bank-Name").val()
console.log("bankname",bankName); 

let accountNumber = $("#account-number").val()
console.log("bankname",accountNumber); 

let ifscCode = $("#ifcs-code").val()
console.log("bankname",ifscCode); 

$.ajax({
    url: `http://103.88.221.150:9439/api/bank`,
    dataType: 'json',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({
       
            "accountNumber": accountNumber,
            "bankName": bankName,
            "createdBy": "Admin tast",
            "createdId": 1,
            "ifscCode":ifscCode, 
        
    }),
    success: function (response) {
      
    },
    

});
});
