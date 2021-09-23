// 串接

$('#submitBtn').click(function(){

    let fullname = $('#fullname').val();
    
    
    if(fullname == ""){
    //   console.log(fullname,gender,phone,email,area,shop,year,month,date,product);
    // $('.formblock__required').addClass('formblock__required--active');
    alert("資料填寫尚未完成");
      
    }else{
    //   $('.formblock__required').removeClass('formblock__required--active');
      
      $.ajax({
      url: "https://script.google.com/macros/s/AKfycbxi2RwhpLcVt_LYgEP46lA8lqNGB3EjeLTIx1XDG4VvINyIBCwcf1n6RKlQ0KzQNcYt/exec",
      data: {
        "name": fullname,
      },
      success: function (response) {
        if (response == "成功") {
          alert("成功");
          console.log(fullname,gender,phone,email,area,shop,year,month,date,product)
        }
      },
    });
    }
    
  }
  )
