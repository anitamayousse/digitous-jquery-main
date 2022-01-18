/* 1st method */
/*$("button").click(function () {
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
  }); */

/*2nd method done by fetch*/
  $("button").click(function() {
    getCountries()
    .then(res =>{
      res.forEach(country => {
        
        $("#exercise").append(  
        `<p> ${country.capital}</p>`,
        `<p> ${country.name.common}</p>`
        )
         
      });
      
    })
  });
  
  
  async function getCountries(){
    const response = await fetch(`https://restcountries.com/v3.1/name/france`);
    const responseData = await response.json();
  
    return responseData;
  }
