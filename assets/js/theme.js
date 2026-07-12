/* ==========================================================
   THEME.JS
   Portfolio Website
   Dark / Light Mode Manager
   Author : Kunal Vats
   ========================================================== */


/* ==========================================================
   SELECT ELEMENTS
   ========================================================== */

const themeToggle =
document.getElementById("themeToggle");

const body =
document.body;



/* ==========================================================
   LOAD SAVED THEME
   ========================================================== */

const savedTheme =
localStorage.getItem("portfolio-theme");



if(savedTheme === "dark"){


    body.classList.add("dark-mode");


    updateThemeIcon(true);


}

else{


    updateThemeIcon(false);


}





/* ==========================================================
   THEME TOGGLE FUNCTION
   ========================================================== */


if(themeToggle){


    themeToggle.addEventListener(
    "click",
    ()=>{


        body.classList.toggle(
            "dark-mode"
        );



        const isDark =
        body.classList.contains(
            "dark-mode"
        );



        if(isDark){


            localStorage.setItem(
                "portfolio-theme",
                "dark"
            );


        }

        else{


            localStorage.setItem(
                "portfolio-theme",
                "light"
            );


        }



        updateThemeIcon(isDark);



    });


}





/* ==========================================================
   UPDATE ICON
   ========================================================== */


function updateThemeIcon(isDark){


    if(!themeToggle) return;



    if(isDark){


        themeToggle.innerHTML="☀️";


        themeToggle.setAttribute(
            "aria-label",
            "Switch to Light Mode"
        );


    }

    else{


        themeToggle.innerHTML="🌙";


        themeToggle.setAttribute(
            "aria-label",
            "Switch to Dark Mode"
        );


    }


}





/* ==========================================================
   SYSTEM THEME DETECTION
   ========================================================== */


const systemTheme =
window.matchMedia(
"(prefers-color-scheme: dark)"
);



if(!savedTheme){


    if(systemTheme.matches){


        body.classList.add(
            "dark-mode"
        );


        updateThemeIcon(true);


    }


}




/* ==========================================================
   LISTEN SYSTEM CHANGES
   ========================================================== */


systemTheme.addEventListener(
"change",
(event)=>{


    const userPreference =
    localStorage.getItem(
        "portfolio-theme"
    );



    if(!userPreference){


        if(event.matches){


            body.classList.add(
                "dark-mode"
            );


            updateThemeIcon(true);


        }

        else{


            body.classList.remove(
                "dark-mode"
            );


            updateThemeIcon(false);


        }


    }



});