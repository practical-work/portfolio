/* ==========================================================
   CONTACT.JS
   Portfolio Website
   Contact Form Handler
   Author : Kunal Vats
   ========================================================== */


/* ==========================================================
   DOM LOADED
   ========================================================== */


document.addEventListener(
"DOMContentLoaded",
()=>{


    const contactForm =
    document.getElementById(
        "contactForm"
    );



    if(!contactForm){

        return;

    }





    /* ==========================================
       FORM SUBMIT
    ========================================== */


    contactForm.addEventListener(
    "submit",
    function(event){


        event.preventDefault();



        const name =
        document.getElementById(
            "name"
        ).value.trim();



        const email =
        document.getElementById(
            "email"
        ).value.trim();



        const subject =
        document.getElementById(
            "subject"
        ).value.trim();



        const message =
        document.getElementById(
            "message"
        ).value.trim();





        /* ==========================================
           Validation
        ========================================== */


        if(
            name === "" ||
            email === "" ||
            message === ""
        ){


            showMessage(

                "Please fill all required fields.",

                "error"

            );


            return;


        }





        if(!validateEmail(email)){


            showMessage(

                "Please enter a valid email address.",

                "error"

            );


            return;


        }





        /* ==========================================
           Success Response
           Replace later with EmailJS/API
        ========================================== */


        showMessage(

            "Message sent successfully. I will contact you soon.",

            "success"

        );



        contactForm.reset();



    });



});







/* ==========================================================
   EMAIL VALIDATION
   ========================================================== */


function validateEmail(email){


    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



    return emailPattern.test(
        email
    );


}






/* ==========================================================
   MESSAGE DISPLAY
   ========================================================== */


function showMessage(
    message,
    type
){



    let alertBox =
    document.querySelector(
        ".form-message"
    );



    if(!alertBox){



        alertBox =
        document.createElement(
            "div"
        );



        alertBox.className =
        "form-message";



        const form =
        document.getElementById(
            "contactForm"
        );



        form.prepend(
            alertBox
        );


    }





    alertBox.textContent =
    message;



    alertBox.className =
    `form-message ${type}`;





    setTimeout(
    ()=>{


        alertBox.textContent="";


    },
    4000);



}





/* ==========================================================
   EMAILJS READY FUNCTION
   ========================================================== */


/*

Later you can integrate EmailJS:

1. Add EmailJS CDN:

<script src=
"https://cdn.emailjs.com/dist/email.min.js">
</script>


2. Initialize:

emailjs.init("YOUR_PUBLIC_KEY");


3. Send:

emailjs.send(
"service_id",
"template_id",
formData
);


*/