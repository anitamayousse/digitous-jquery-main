$("input").keyup(function(){
    const input = $("input")
        if (input.val().length >= 5) {
        input.addClass("is-valid");
        input.removeClass("is-invalid");
        } else {
            input.addClass("is-invalid");
        }
  });