/* ==========================================================
   PROJECT.JS
   Portfolio Website
   Dynamic Project Management
   Author : Kunal Vats
   ========================================================== */


/* ==========================================================
   PROJECT DATA
   ========================================================== */


const projects = [

    {

        title:
        "Student Performance Prediction",

        description:
        "Machine Learning regression model that predicts student performance using academic data.",

        technologies:[
            "Python",
            "Pandas",
            "Scikit-Learn",
            "Flask"
        ],

        category:
        "Machine Learning",

        github:
        "#",

        demo:
        "#"

    },


    {

        title:
        "Email Spam Detection",

        description:
        "NLP based spam classification system using TF-IDF Vectorization and Logistic Regression.",

        technologies:[
            "Python",
            "NLP",
            "TF-IDF",
            "Machine Learning"
        ],

        category:
        "NLP",

        github:
        "#",

        demo:
        "#"

    },


    {

        title:
        "Titanic Survival Prediction",

        description:
        "Classification model predicting passenger survival using preprocessing and KNN algorithm.",

        technologies:[
            "Python",
            "KNN",
            "Pandas",
            "Scikit-Learn"
        ],

        category:
        "Machine Learning",

        github:
        "#",

        demo:
        "#"

    },


    {

        title:
        "AI Portfolio Website",

        description:
        "Personal portfolio website designed for Machine Learning Engineer profile.",

        technologies:[
            "HTML",
            "CSS",
            "JavaScript"
        ],

        category:
        "Web Development",

        github:
        "#",

        demo:
        "#"

    }


];





/* ==========================================================
   LOAD PROJECTS
   ========================================================== */


document.addEventListener(
"DOMContentLoaded",
()=>{


    const projectContainer =
    document.querySelector(
        ".projects-container"
    );



    if(!projectContainer){

        return;

    }



    renderProjects(
        projects
    );


});





/* ==========================================================
   PROJECT RENDER FUNCTION
   ========================================================== */


function renderProjects(projectList){



    const container =
    document.querySelector(
        ".projects-container"
    );



    container.innerHTML="";




    projectList.forEach(
    project=>{


        const card =
        document.createElement(
            "div"
        );



        card.className =
        "project-card";



        card.innerHTML = `


            <div class="project-image">


                <div class="profile-placeholder">

                    ML

                </div>


            </div>



            <h3>

                ${project.title}

            </h3>



            <p>

                ${project.description}

            </p>



            <div class="project-tags">


                ${
                    project.technologies
                    .map(
                    tech=>
                    `
                    <span class="project-tag">

                        ${tech}

                    </span>
                    `
                    )
                    .join("")
                }


            </div>




            <div class="project-buttons">


                <a href="${project.github}"

                   class="btn primary-btn"

                   target="_blank">


                    GitHub


                </a>




                <a href="${project.demo}"

                   class="btn secondary-btn"

                   target="_blank">


                    Demo


                </a>


            </div>



        `;



        container.appendChild(
            card
        );



    });


}






/* ==========================================================
   PROJECT FILTER
   ========================================================== */


function filterProjects(category){



    if(category === "All"){


        renderProjects(
            projects
        );


        return;


    }



    const filteredProjects =
    projects.filter(
    project=>{


        return project.category
        ===
        category;


    });



    renderProjects(
        filteredProjects
    );


}





/* ==========================================================
   SEARCH PROJECTS
   ========================================================== */


function searchProjects(keyword){



    const result =
    projects.filter(
    project=>{


        return (

            project.title
            .toLowerCase()
            .includes(
                keyword.toLowerCase()
            )

            ||

            project.description
            .toLowerCase()
            .includes(
                keyword.toLowerCase()
            )


        );


    });



    renderProjects(
        result
    );


}