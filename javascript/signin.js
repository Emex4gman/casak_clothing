$(document).ready(() => {
  $("#button_group2").click(() => {

    const email = $("#email_group2").val();
    const mobile = $("#mobile_group2").val();
    const password = $("#password_group2").val();
    let isValid = true;
    
    //Email Validations
    if (email == "") {
      $("#email_group2").next().text("This field is required");
      isValid = false;
    } else {
      $("#email_group2").next().text("");
      if (email.includes("@")) {
        $("#email_group2").next().text("");
        if (email.includes(".")) {
          $("#email_group2").next().text("");
        } else {
          $("#email_group2").next().text("This field must include . symbol");
          isValid = false;
        }
      } else {
        $("#email_group2").next().text("This field must include @ symbol");
        isValid = false;
      }
    }

    //Password Validations
    if (password == "") {
      $("#password_group2").next().text("This field is required");
      isValid = false;
    } else {
      $("#password_group2").next().text("");
      var pattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$";
      if (password == password.match(pattern)) {
        $("#password_group2").next().text("");
      } else {
        $("#password_group2")
          .next()
          .text(
            "Must contain LowerCase Character, Uppercase Character, Number, Special Character"
          );
      }
    }
  });
});
