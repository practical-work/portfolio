/* ==========================================================
   PARTICLES.JS
   Portfolio Website
   AI Background Particle Animation
   Author : Kunal Vats
   ========================================================== */


/* ==========================================================
   PARTICLE CANVAS SETUP
   ========================================================== */


document.addEventListener(
"DOMContentLoaded",
()=>{


    const canvas =
    document.getElementById(
        "particlesCanvas"
    );



    if(!canvas){

        return;

    }



    const ctx =
    canvas.getContext(
        "2d"
    );



    let particles = [];



    let width =
    canvas.width =
    window.innerWidth;



    let height =
    canvas.height =
    window.innerHeight;





    /* ==========================================
       PARTICLE OBJECT
    ========================================== */


    class Particle{


        constructor(){


            this.x =
            Math.random()
            *
            width;



            this.y =
            Math.random()
            *
            height;



            this.size =
            Math.random()
            *
            3
            +
            1;



            this.speedX =
            (Math.random() - .5)
            *
            1;



            this.speedY =
            (Math.random() - .5)
            *
            1;



        }





        update(){


            this.x += this.speedX;


            this.y += this.speedY;



            if(
                this.x < 0 ||
                this.x > width
            ){


                this.speedX =
                -this.speedX;


            }



            if(
                this.y < 0 ||
                this.y > height
            ){


                this.speedY =
                -this.speedY;


            }



        }





        draw(){


            ctx.beginPath();


            ctx.arc(

                this.x,

                this.y,

                this.size,

                0,

                Math.PI * 2

            );



            ctx.fillStyle =
            "rgba(37,99,235,0.7)";



            ctx.fill();


        }


    }





    /* ==========================================
       CREATE PARTICLES
    ========================================== */


    function createParticles(){


        particles = [];



        const count =
        window.innerWidth < 768
        ?
        40
        :
        100;



        for(
            let i=0;
            i<count;
            i++
        ){


            particles.push(
                new Particle()
            );


        }


    }





    /* ==========================================
       CONNECT PARTICLES
    ========================================== */


    function connectParticles(){


        for(
            let a=0;
            a<particles.length;
            a++
        ){


            for(
                let b=a;
                b<particles.length;
                b++
            ){



                const distance =
                Math.sqrt(

                    Math.pow(
                        particles[a].x -
                        particles[b].x,
                        2
                    )

                    +

                    Math.pow(
                        particles[a].y -
                        particles[b].y,
                        2
                    )

                );



                if(distance < 120){


                    ctx.beginPath();



                    ctx.strokeStyle =
                    "rgba(37,99,235,0.15)";



                    ctx.lineWidth =
                    1;



                    ctx.moveTo(

                        particles[a].x,

                        particles[a].y

                    );



                    ctx.lineTo(

                        particles[b].x,

                        particles[b].y

                    );



                    ctx.stroke();


                }


            }


        }


    }





    /* ==========================================
       ANIMATION LOOP
    ========================================== */


    function animate(){


        ctx.clearRect(

            0,

            0,

            width,

            height

        );



        particles.forEach(
            particle=>{


                particle.update();


                particle.draw();



            }
        );



        connectParticles();



        requestAnimationFrame(
            animate
        );


    }





    /* ==========================================
       WINDOW RESIZE
    ========================================== */


    window.addEventListener(
    "resize",
    ()=>{


        width =
        canvas.width =
        window.innerWidth;



        height =
        canvas.height =
        window.innerHeight;



        createParticles();


    });





    createParticles();


    animate();



});