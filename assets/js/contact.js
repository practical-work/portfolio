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
    () => {


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
            async function(event){


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
                   VALIDATION
                ========================================== */


                if(
                    name === "" ||
                    email === "" ||
                    subject === "" ||
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
                   FORMSPREE SUBMISSION
                ========================================== */


                const formData =
                new FormData(contactForm);



                try{


                    const response =
                    await fetch(

                        "https://formspree.io/f/xnjeardv",

                        {

                            method:"POST",

                            body:formData,

                            headers:{

                                "Accept":"application/json"

                            }

                        }

                    );





                    if(response.ok){


                        showMessage(

                            "Message sent successfully. I will contact you soon.",

                            "success"

                        );


                        contactForm.reset();



                    }
                    else{


                        showMessage(

                            "Message could not be sent. Please try again.",

                            "error"

                        );


                    }





                }
                catch(error){



                    showMessage(

                        "Network error. Please try again.",

                        "error"

                    );


                }



            }

        );


    }

);






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


            alertBox.textContent = "";


        },
        4000
    );


}