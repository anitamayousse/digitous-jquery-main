$("button").click(function () {
    $.ajax({
      url:"https://restcountries.com/v3.1/name/france",
      success: function (data) {
        
        data.forEach((country) => {
          
          $("#exercise").append(
         `<p> ${country.capital}</p>`,
         `<p> ${country.name.common}</p>`
         )

        })
      }
    });
  });
