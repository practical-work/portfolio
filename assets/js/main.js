/* ==========================================================
   MAIN.JS
   Portfolio Website
   Author : Kunal Vats
   ========================================================== */


/* ==========================================================
   DOM LOADED
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {


    /* ==========================================
       Mobile Navigation
    ========================================== */


    const menuBtn = document.querySelector(".menu-btn");

    const navMenu = document.querySelector(".nav-menu");


    if(menuBtn && navMenu){


        menuBtn.addEventListener("click",()=>{


            navMenu.classList.toggle("active");


            menuBtn.classList.toggle("active");


        });



        document.querySelectorAll(".nav-menu a")
        .forEach(link=>{


            link.addEventListener("click",()=>{


                navMenu.classList.remove("active");


                menuBtn.classList.remove("active");


            });


        });


    }




    /* ==========================================
       Header Scroll Effect
    ========================================== */


    const header = document.querySelector(".header");


    window.addEventListener("scroll",()=>{


        if(window.scrollY > 50){


            header?.classList.add("scrolled");


        }

        else{


            header?.classList.remove("scrolled");


        }


    });





    /* ==========================================
       Back To Top Button
    ========================================== */


    const backTop = document.querySelector(".back-to-top");


    if(backTop){


        window.addEventListener("scroll",()=>{


            if(window.scrollY > 500){


                backTop.classList.add("active");


            }

            else{


                backTop.classList.remove("active");


            }


        });



        backTop.addEventListener("click",()=>{


            window.scrollTo({

                top:0,

                behavior:"smooth"

            });


        });


    }





    /* ==========================================
       Current Year
    ========================================== */


    const yearElement =
    document.querySelector("#currentYear");


    if(yearElement){


        yearElement.textContent =
        new Date().getFullYear();


    }





    /* ==========================================
       Scroll Reveal Animation
    ========================================== */


    const revealElements =
    document.querySelectorAll(
        ".card-reveal"
    );



    const revealObserver =
    new IntersectionObserver((entries)=>{


        entries.forEach(entry=>{


            if(entry.isIntersecting){


                entry.target.classList.add("show");


            }


        });



    },{


        threshold:0.15


    });



    revealElements.forEach(element=>{


        revealObserver.observe(element);


    });





    /* ==========================================
       Smooth Scroll
    ========================================== */


    document.querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(anchor=>{


        anchor.addEventListener(
        "click",
        function(e){


            const target =
            document.querySelector(
                this.getAttribute("href")
            );



            if(target){


                e.preventDefault();


                target.scrollIntoView({

                    behavior:"smooth"

                });


            }



        });


    });





    /* ==========================================
       Image Lazy Loading
    ========================================== */


    const images =
    document.querySelectorAll("img");



    images.forEach(img=>{


        img.setAttribute(
            "loading",
            "lazy"
        );


    });





    /* ==========================================
       Console Message
    ========================================== */


    console.log(
`
======================================
 Portfolio Website
 Machine Learning Engineer
 Developed by Kunal Vats

 Welcome Recruiters & Developers
======================================
`
    );


});