/* ==========================================================
   TYPING.JS
   Portfolio Website
   Hero Typing Animation
   Author : Kunal Vats
   ========================================================== */


/* ==========================================================
   TYPING CONFIGURATION
   ========================================================== */


document.addEventListener(
"DOMContentLoaded",
()=>{


    const typingElement =
    document.querySelector(
        ".typing-text"
    );



    if(!typingElement){

        return;

    }




    const words = [


        "Machine Learning Engineer",

        "Artificial Intelligence Developer",

        "Python Developer",

        "Data Science Enthusiast",

        "Full Stack Developer"


    ];



    let wordIndex = 0;

    let charIndex = 0;

    let isDeleting = false;



    const typingSpeed = 100;

    const deletingSpeed = 60;

    const delayBetweenWords = 1500;





    function typeEffect(){



        const currentWord =
        words[wordIndex];



        if(isDeleting){



            typingElement.textContent =
            currentWord.substring(
                0,
                charIndex--
            );



        }

        else{



            typingElement.textContent =
            currentWord.substring(
                0,
                charIndex++
            );



        }





        let speed =
        isDeleting
        ?
        deletingSpeed
        :
        typingSpeed;




        if(!isDeleting &&
            charIndex === currentWord.length){



            speed = delayBetweenWords;


            isDeleting = true;



        }




        else if(
            isDeleting &&
            charIndex === 0
        ){



            isDeleting = false;



            wordIndex++;



            if(wordIndex >= words.length){


                wordIndex = 0;


            }


            speed = 500;


        }





        setTimeout(
            typeEffect,
            speed
        );



    }





    typeEffect();



});