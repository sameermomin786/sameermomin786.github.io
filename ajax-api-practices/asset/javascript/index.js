console.log('sam')
let globalBankId = ""
function getBankdata() {

    $.ajax({
        type: "GET",
        url: `http://103.88.221.150:9439/api/bank/getAll`,
        responseType: "json",
        success: function (response) {
            console.log("checkbankdata=>", response)
            $.each(response, function (index, value) {
                console.log("data=>", value);
                $("#bankdetail").append(`
                <tr>
                <td>${value.bankId}</td>
                <td>${value.bankName}</td>
                <td>${value.accountNumber}</td>
                <td>${value.ifscCode}</td>
                <td>${value.ipAddress}</td>
                <td ><span class="badge  rounded-pill text-bg-${value.activeStatus ? 'success' : 'danger'}">${value.activeStatus}</span>
                
                <span><div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                <label class="form-check-label" for="flexSwitchCheckDefault"></label>
                </div></span>
                
                
                </td>
                
                
  
              


                <td>${value.deletedStatus } 
                
                </td>
              <td><button  type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal" onclick="edit(${value.bankId})" class="mt-5">
              EditBank
             </button></td>
                      <td><button class="btn btn-danger" onclick="Del(${value.bankId})">DeleteBank</button></td>
                </tr>
    
    
                `);


            });
        },
        complete: function () {
            $("#tabledetail").DataTable();
        }


    })
}

getBankdata()

$("#save-bank").on('click', function () {

    let bankName = $("#bank-Name").val()
    console.log("bankname", bankName);

    let accountNumber = $("#account-number").val()
    console.log("bankname", accountNumber);

    let ifscCode = $("#ifcs-code").val()
    console.log("bankname", ifscCode);

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
            "ifscCode": ifscCode,

        }),
        success: function (response) {

        },


    });
});
// ----------------put-api--------------------

function Del(id) {
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
         
         
            $.ajax({
                url: `http://103.88.221.150:9439/api/bank/${id}/deleteById`,
                dataType: 'json',
                type: 'PUT',
                contentType: 'application/json',
                data: JSON.stringify({
        
        
                    "status": false,
                    "userId": 2,
                    "userName": "test Admin"
        
        
                }),
                success: function (response) {
                    console.log(response)
                    swal("Deleted Successfully!", "You clicked the button!", "success").then(function(){

                        location.reload()
                    });
                   
                },
        
        
            });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
      
}


function edit(id) {
    globalBankId=id;
    $.ajax({
        type: "GET",
        url: `http://103.88.221.150:9439/api/bank/${id}`,
        responseType: "json",
        success: function (response) {
            console.log("check", response);
            $('#edit-bank-Name').val(response.bankName)
            $('#edit-account-number').val(response.accountNumber)
            $('#edit-ifcs-code').val(response.ifscCode)


        }
    });
}
// --------------Edit-post-------------


$("#update-bank").on('click', function () {

    let bankName = $("#edit-bank-Name").val()
    console.log("updatebankname", bankName);

    let accountNumber = $("#edit-account-number").val()
    console.log("updatebankNumber", accountNumber);

    let ifscCode = $("#edit-ifcs-code").val()
    console.log("banknameifcscode", ifscCode);


    $.ajax({
        url: `http://103.88.221.150:9439/api/bank/${globalBankId}`,
        dataType: 'json',
        type: 'PUT',
        contentType: 'application/json',
    
        data: JSON.stringify({
    
            "accountNumber": accountNumber,
            "bankName": bankName,
            "createdBy": "Admin tast",
            "createdId": 1,
            "ifscCode": ifscCode,
    
        }),
        success: function (response) {
            console.log(response)
            swal("Good job!", "You clicked the button!", "success").then(function(){

                location.reload()
            });
        },
    
     
    });


});


