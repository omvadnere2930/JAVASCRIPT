function dataSubmit() {

    const u_name = document.querySelector("#u_name").value.trim();
    const u_email = document.querySelector("#u_email").value.trim();
    const u_password = document.querySelector("#u_password").value.trim();
    const u_mobile = document.querySelector("#u_mobile").value.trim();

    const name_error = document.querySelector("#name_error");
    const email_error = document.querySelector("#email_error");
    const password_error = document.querySelector("#password_error");
    const mobile_error = document.querySelector("#mobile_error");

    const stringPattern=/^[A-Za-z.\s]*$/
    const mobilePattern=/^[6-9][\d]{9}$/
    const passwordPattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    const emailPattern=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
    ///name validation
    
    if (u_name === "") {
        name_error.innerHTML = "Please Enter Your Name";
    }else if(!stringPattern.test(u_name)){
         name_error.innerHTML = "Please Enter Your Valid Name";
    } else {
        name_error.innerHTML = "";
    }


    ///email validation
    
    if (u_email === "") {
        email_error.innerHTML = "Please Enter Your EmailId";
    } else if(!emailPattern.test(u_email)){
         email_error.innerHTML = "Please Enter Your Correct EmailId";
    }else {
        email_error.innerHTML = "";
    }

    ///password validation
    
    if (u_password === "") {
        password_error.innerHTML = "Please Enter Your Password";
    }else if(!passwordPattern.test(u_password)){
         password_error.innerHTML = "Please Enter Your Strongest Password";
    } else {
        password_error.innerHTML = "";
    }

    ///password validation
    
    if (u_mobile === "") {
        mobile_error.innerHTML = "Please Enter Your Mobile Number";
    } else if(!mobilePattern.test(u_mobile)){
         mobile_error.innerHTML = "Please Enter Your Valid Mobile Number";
    }else {
        mobile_error.innerHTML = "";
    }

}
