/* function registration_group2() {
  //assigning variables
  var name_group2 = document.getElementById("name_group2").value;
  var mobile_group2 = document.getElementById("mobile_group2").value;
  var email_group2 = document.getElementById("email_group2").value;
  var password_group2 = document.getElementById("password_group2").value;
  var repassword_group2 = document.getElementById("repassword_group2").value;

  //numeric = /^[0-9]/ //creating varialbe for numbers
  //letters = /^[A-Za-z]/; //creating varialbe for lettters
} */

//Jquery
$(document).ready(() => {
  $("#button_group2").click(() => {
    const fname = $("#fname_group2").val();
    const mobile = $("#mobile_group2").val();
    const email = $("#email_group2").val();
    const password = $("#password_group2").val();
    const repassword = $("#repassword_group2").val();
    let isValid = true;

    //Full Name Validations
    if (fname == "") {
      $("#fname_group2").next().text("This field is required");
      isValid = false;
    } else {
      $("#fname_group2").next().text("");
      if (fname == fname.match(/^[a-zA-Z\s]+$/)) {
        $("#fname_group2").next().text("");
      } else {
        $("#fname_group2").next().text("Only Aplhabets Allowed");
      }
    }

    //Mobile Number Validations
    if (mobile == "") {
      $("#mobile_group2").next().text("This field is required");
      isValid = false;
    } else {
      $("#mobile_group2").next().text("");
      if (isNaN(mobile)) {
        $("#mobile_group2").next().text("Only Numbers Allowed");
        isValid = false;
      } else {
        $("#mobile_group2").next().text("");
        if (mobile.length == 10) {
          $("#mobile_group2").next().text("");
        } else {
          $("#mobile_group2")
            .next()
            .text("Mobile number should be 10 digits long only");
          isValid = false;
        }
      }
    }

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

    //Re_Enter Password Validations
    if (repassword == "") {
      $("#repassword_group2").next().text("This field is required");
      isValid = false;
    } else {
      $("#repassword_group2").next().text("");
      if ((password.isValid = true)) {
        $("#repassword_group2").next().text("");
        if (password == repassword) {
          $("#repassword_group2").next().text("");
        } else {
          $("#repassword_group2").next().text("Your passwords dont match");
        }
      } else {
        $("#repassword_group2").next().text("Password conditions not met");
      }
    }

    if (isValid) location.href = `login.html`;
  });
});
