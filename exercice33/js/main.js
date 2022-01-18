$("button").click(function () {
    $.ajax({
      url:"https://restcountries.com/v3.1/name/france",
      success: function (data) {
        
        data.forEach((country) => {
          
          $("#country").html(
         `<p> ${country.name.common}</p>`
          )
          $("#capital").html(
         `<p> ${country.capital}</p>`
          )

        })
      }
    });
  });