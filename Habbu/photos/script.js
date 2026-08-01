/* =====================================================
   KEDAR BIRTHDAY WEBSITE
   SCRIPT.JS
   PART 1
   GLOBAL FUNCTIONS
===================================================== */

"use strict";

/* =====================================================
   RUN WHEN PAGE LOADS
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    createParticles();

    revealOnScroll();

    randomQuote();

});

/* =====================================================
   START EXPERIENCE
===================================================== */

function startExperience() {

    const music = document.getElementById("music");

    if (music) {

        music.play().catch(() => {});

    }

    fireworks();

    createConfetti();

    setTimeout(() => {

        window.location.href = "report.html";

    }, 1800);

}

/* =====================================================
   FLOATING PARTICLES
===================================================== */

function createParticles() {

    const container = document.getElementById("particles");

    if (!container) return;

    for (let i = 0; i < 90; i++) {

        const particle = document.createElement("div");

        particle.className = "particle";

        particle.style.left = Math.random() * 100 + "%";

        particle.style.animationDuration =
            6 + Math.random() * 8 + "s";

        particle.style.animationDelay =
            Math.random() * 8 + "s";

        particle.style.opacity =
            Math.random();

        particle.style.width =
            3 + Math.random() * 5 + "px";

        particle.style.height =
            particle.style.width;

        container.appendChild(particle);

    }

}

/* =====================================================
   REVEAL ANIMATION
===================================================== */

const revealItems =
document.querySelectorAll(

".report-box,.scan-box,.adventure-box,.memory-box,.birthday-box,.polaroid,.complaint"

);

function revealOnScroll(){

    revealItems.forEach(item=>{

        const top =
        item.getBoundingClientRect().top;

        if(top < window.innerHeight-100){

            item.classList.add("show");

        }

    });

}

window.addEventListener(
"scroll",
revealOnScroll
);

/* =====================================================
   SMOOTH SCROLL TOP
===================================================== */

function goTop(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

/* =====================================================
   RANDOM LOVE QUOTES
===================================================== */

const quotes=[

"❤️ You are my favourite notification.",

"😂 My favourite idiot forever.",

"🌎 Life is better with you in it.",

"✨ Never stop being amazing.",

"👑 My king, my chaos, my comfort.",

"💫 Every memory becomes special.",

"❤️ Impossible to replace.",

"🌊 Keep exploring the world."

];

function randomQuote(){

    const element =
    document.getElementById("loveQuote");

    if(!element) return;

    const random =
    quotes[
        Math.floor(Math.random()*quotes.length)
    ];

    element.innerHTML=random;

}

setInterval(randomQuote,5000);

/* =====================================================
   PAGE TRANSITION
===================================================== */

window.addEventListener("load",()=>{

    document.body.classList.add("fade-in");

});

/* =====================================================
   END PART 1
===================================================== */
/* =====================================================
   PART 2
   REPORT & SCAN ANIMATIONS
===================================================== */

/* ===========================
   GLITCH EFFECT
=========================== */

const glitchTitle = document.querySelector(".glitch");

if (glitchTitle) {

    setInterval(() => {

        glitchTitle.style.textShadow = `
        ${Math.random()*8-4}px ${Math.random()*8-4}px #00ffff,
        ${Math.random()*8-4}px ${Math.random()*8-4}px red
        `;

        setTimeout(() => {

            glitchTitle.style.textShadow =
            "0 0 10px #d8b36a,0 0 20px #d8b36a";

        },150);

    },2500);

}

/* ===========================
   TERMINAL TYPING
=========================== */

function typeTerminal(){

    const terminal =
    document.querySelector(".terminal");

    if(!terminal) return;

    const rows =
    terminal.querySelectorAll("p");

    rows.forEach(row=>{

        row.style.opacity="0";

    });

    rows.forEach((row,index)=>{

        setTimeout(()=>{

            row.style.opacity="1";

            row.style.transform="translateX(0)";

        },index*900);

    });

}

typeTerminal();

/* ===========================
   PROGRESS BAR ANIMATION
=========================== */

const bars =
document.querySelectorAll(".bar span");

function animateBars(){

    bars.forEach(bar=>{

        const width =
        bar.style.width;

        bar.style.width="0";

        setTimeout(()=>{

            bar.style.transition="2s";

            bar.style.width=width;

        },400);

    });

}

animateBars();

/* ===========================
   COMPLAINT CARD ANIMATION
=========================== */

const complaints =
document.querySelectorAll(".complaint");

complaints.forEach((card,index)=>{

    card.style.opacity="0";

    card.style.transform="translateY(40px)";

    setTimeout(()=>{

        card.style.transition=".7s";

        card.style.opacity="1";

        card.style.transform="translateY(0)";

    },600+(index*300));

});

/* ===========================
   FINAL REPORT GLOW
=========================== */

const report =
document.querySelector(".final-report");

if(report){

setInterval(()=>{

report.style.boxShadow=
"0 0 35px rgba(216,179,106,.45)";

setTimeout(()=>{

report.style.boxShadow="";

},800);

},3000);

}

/* ===========================
   VERDICT PULSE
=========================== */

const verdict =
document.querySelector(".verdict");

if(verdict){

setInterval(()=>{

verdict.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.04)"

},

{

transform:"scale(1)"

}

],{

duration:1200

});

},2500);

}

/* ===========================
   PAGE TITLE FLOAT
=========================== */

const headings =
document.querySelectorAll("h1");

headings.forEach(title=>{

title.animate([

{

transform:"translateY(0px)"

},

{

transform:"translateY(-6px)"

},

{

transform:"translateY(0px)"

}

],{

duration:3500,

iterations:Infinity

});

});

/* ===========================
   NAVIGATION BUTTON EFFECT
=========================== */

const buttons =
document.querySelectorAll(".next-btn,.back-btn");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});

/* =====================================================
   END PART 2
===================================================== */
/* =====================================================
   PART 3
   ADVENTURE + MEMORIES
===================================================== */

/* ===========================
   ADVENTURE IMAGE EFFECT
=========================== */

const divePhoto = document.querySelector(".dive-photo");

if (divePhoto) {

    divePhoto.addEventListener("mouseenter", () => {

        divePhoto.style.transform = "scale(1.05) rotate(1deg)";
        divePhoto.style.boxShadow =
            "0 0 40px rgba(0,180,255,.6)";

    });

    divePhoto.addEventListener("mouseleave", () => {

        divePhoto.style.transform = "";
        divePhoto.style.boxShadow = "";

    });

}

/* ===========================
   CAT MESSAGE
=========================== */

const catMessage = document.querySelector(".cat-message");

if (catMessage) {

    const messages = [

        "🐱 Adventure Approved!",

        "🌊 Dive Again!",

        "😂 Even the scuba cat is impressed!",

        "❤️ Keep Exploring!"

    ];

    setInterval(() => {

        catMessage.innerHTML =
            messages[Math.floor(Math.random() * messages.length)];

    }, 3000);

}

/* ===========================
   POLAROID ANIMATION
=========================== */

const photos =
document.querySelectorAll(".polaroid");

photos.forEach((photo,index)=>{

    photo.style.opacity="0";
    photo.style.transform="translateY(80px)";

    setTimeout(()=>{

        photo.style.transition=".8s";

        photo.style.opacity="1";
        photo.style.transform="translateY(0)";

    },400+(index*250));

});

/* ===========================
   PHOTO CLICK
=========================== */

photos.forEach(photo=>{

    photo.addEventListener("click",()=>{

        photo.animate([

            {

                transform:"scale(1)"

            },

            {

                transform:"scale(1.08)"

            },

            {

                transform:"scale(1)"

            }

        ],{

            duration:600

        });

        createSparkles(photo);

    });

});

/* ===========================
   SPARKLES
=========================== */

function createSparkles(target){

    const rect =
    target.getBoundingClientRect();

    for(let i=0;i<20;i++){

        const sparkle =
        document.createElement("div");

        sparkle.className="sparkle";

        sparkle.innerHTML="✨";

        sparkle.style.left =
        rect.left+
        Math.random()*rect.width+"px";

        sparkle.style.top =
        rect.top+
        Math.random()*rect.height+"px";

        document.body.appendChild(sparkle);

        setTimeout(()=>{

            sparkle.remove();

        },1200);

    }

}

/* ===========================
   AUDIO EFFECT
=========================== */

const audio =
document.querySelector("audio");

if(audio){

audio.addEventListener("play",()=>{

createConfetti();

});

}

/* ===========================
   MEMORY NOTE
=========================== */

const note =
document.querySelector(".memory-note");

if(note){

note.animate([

{

opacity:.5

},

{

opacity:1

},

{

opacity:.5

}

],{

duration:3500,

iterations:Infinity

});

}

/* ===========================
   FLOATING IMAGES
=========================== */

photos.forEach((photo,index)=>{

photo.animate([

{

transform:"translateY(0px)"

},

{

transform:"translateY(-10px)"

},

{

transform:"translateY(0px)"

}

],{

duration:3500+(index*300),

iterations:Infinity

});

});

/* ===========================
   RANDOM MEMORY QUOTE
=========================== */

const memoryQuotes=[

"❤️ Every picture tells a story.",

"📸 Forever my favourite memories.",

"🌎 Adventures become memories.",

"😂 Chaos captured forever.",

"✨ Best moments deserve to be remembered."

];

const subtitle =
document.querySelector(".memory-subtitle");

if(subtitle){

setInterval(()=>{

subtitle.innerHTML=

memoryQuotes[
Math.floor(Math.random()*memoryQuotes.length)
];

},5000);

}

/* =====================================================
   END PART 3
===================================================== */
/* =====================================================
   PART 4
   BIRTHDAY CELEBRATION
===================================================== */

/* ===========================
   CELEBRATE BUTTON
=========================== */

function celebrateBirthday(){

    fireworks();

    createConfetti();

    heartExplosion();

    floatingHearts();

}

/* ===========================
   FIREWORKS
=========================== */

function fireworks(){

    for(let i=0;i<8;i++){

        setTimeout(()=>{

            for(let j=0;j<45;j++){

                const spark =
                document.createElement("div");

                spark.className="spark";

                document.body.appendChild(spark);

                const startX =
                20+Math.random()*60;

                const startY =
                15+Math.random()*45;

                spark.style.left=startX+"vw";
                spark.style.top=startY+"vh";

                const x=
                (Math.random()-.5)*500;

                const y=
                (Math.random()-.5)*500;

                spark.animate([

                {

                transform:"translate(0,0)",

                opacity:1

                },

                {

                transform:
                `translate(${x}px,${y}px)`,

                opacity:0

                }

                ],{

                duration:1200,

                easing:"ease-out"

                });

                setTimeout(()=>{

                spark.remove();

                },1300);

            }

        },i*500);

    }

}

/* ===========================
   CONFETTI
=========================== */

function createConfetti(){

    const colors=[

    "#FFD700",

    "#FF4D6D",

    "#00D4FF",

    "#FFFFFF",

    "#9DFF00"

    ];

    for(let i=0;i<180;i++){

        const piece=
        document.createElement("div");

        piece.className="confetti";

        piece.style.left=
        Math.random()*100+"vw";

        piece.style.background=
        colors[
        Math.floor(
        Math.random()*colors.length
        )
        ];

        piece.animate([

        {

        transform:"translateY(0) rotate(0deg)"

        },

        {

        transform:
        `translateY(${600+Math.random()*500}px)
        rotate(720deg)`

        }

        ],{

        duration:
        2500+
        Math.random()*2000,

        easing:"ease-out"

        });

        document.body.appendChild(piece);

        setTimeout(()=>{

        piece.remove();

        },5000);

    }

}

/* ===========================
   HEART EXPLOSION
=========================== */

function heartExplosion(){

    for(let i=0;i<35;i++){

        const heart=
        document.createElement("div");

        heart.className="heart";

        heart.innerHTML="❤️";

        heart.style.left="50%";
        heart.style.top="55%";

        document.body.appendChild(heart);

        const x=
        (Math.random()-.5)*500;

        const y=
        (Math.random()-.5)*500;

        heart.animate([

        {

        transform:
        "translate(-50%,-50%) scale(.5)",

        opacity:1

        },

        {

        transform:
        `translate(${x}px,${y}px) scale(2)`,

        opacity:0

        }

        ],{

        duration:1800,

        easing:"ease-out"

        });

        setTimeout(()=>{

        heart.remove();

        },1800);

    }

}

/* ===========================
   FLOATING HEARTS
=========================== */

function floatingHearts(){

    const emojis=[

    "❤️",

    "💛",

    "💖",

    "💕"

    ];

    for(let i=0;i<30;i++){

        setTimeout(()=>{

            const heart=
            document.createElement("div");

            heart.className="floating-heart";

            heart.innerHTML=
            emojis[
            Math.floor(Math.random()*emojis.length)
            ];

            heart.style.left=
            Math.random()*100+"vw";

            heart.style.fontSize=
            20+
            Math.random()*25+"px";

            document.body.appendChild(heart);

            setTimeout(()=>{

                heart.remove();

            },5000);

        },i*120);

    }

}

/* ===========================
   AUTO CELEBRATION
=========================== */

const celebrateBtn=
document.querySelector(".celebrate-btn");

if(celebrateBtn){

celebrateBtn.addEventListener("click",()=>{

celebrateBirthday();

});

}

/* ===========================
   REPLAY BUTTON EFFECT
=========================== */

const replayBtn=
document.querySelector(".replay-btn");

if(replayBtn){

replayBtn.addEventListener("mouseenter",()=>{

replayBtn.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.08)"

},

{

transform:"scale(1)"

}

],{

duration:600

});

});

}

/* =====================================================
   END PART 4
===================================================== */
/* =====================================================
   PART 5
   EASTER EGGS & FINAL TOUCHES
===================================================== */

/* ===========================
   SECRET DOUBLE CLICK
=========================== */

const glitch = document.querySelector(".glitch");

if (glitch) {

    glitch.addEventListener("dblclick", () => {

        heartExplosion();

        createConfetti();

        alert(
`❤️ SECRET UNLOCKED ❤️

KEDAR.EXE cannot be deleted.

Reason:
Too special to remove.`
        );

    });

}

/* ===========================
   PHOTO CLICK EFFECT
=========================== */

const images = document.querySelectorAll(".polaroid img");

images.forEach(image => {

    image.addEventListener("click", () => {

        image.animate([

            {
                transform:"scale(1)"
            },

            {
                transform:"scale(1.15)"
            },

            {
                transform:"scale(1)"
            }

        ],{

            duration:700

        });

        createSparkles(image);

    });

});

/* ===========================
   SECRET KEYBOARD
=========================== */

document.addEventListener("keydown",(event)=>{

    if(event.key.toLowerCase()=="k"){

        createConfetti();

        fireworks();

        alert("🎂 KEDAR MODE ACTIVATED ❤️");

    }

});

/* ===========================
   RANDOM BIRTHDAY POPUP
=========================== */

setTimeout(()=>{

    if(document.querySelector(".birthday-popup"))
        return;

    const popup=document.createElement("div");

    popup.className="birthday-popup";

    popup.innerHTML=`

    <div style="
    position:fixed;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    background:#111;
    color:white;
    padding:35px;
    border-radius:20px;
    border:2px solid #d8b36a;
    text-align:center;
    z-index:99999;
    max-width:400px;
    box-shadow:0 0 40px rgba(216,179,106,.4);
    ">

    <h2>❤️ Hey Kedar ❤️</h2>

    <br>

    <p>

    Never stop smiling.

    <br><br>

    Keep travelling.

    <br>

    Keep exploring.

    <br>

    Keep annoying everyone 😂

    <br><br>

    Happy Birthday ❤️

    </p>

    <br>

    <button
    onclick="this.parentElement.remove()"
    style="
    padding:12px 28px;
    border:none;
    border-radius:30px;
    background:#d8b36a;
    cursor:pointer;
    font-weight:bold;
    ">

    Close

    </button>

    </div>

    `;

    document.body.appendChild(popup);

},30000);

/* ===========================
   RANDOM TITLE CHANGE
=========================== */

const titles=[

"❤️ Happy Birthday Kedar",

"🎂 KEDAR.EXE",

"🌊 Adventure Guy",

"📸 Memory Vault",

"🎉 Celebrate Today"

];

let titleIndex=0;

setInterval(()=>{

document.title=titles[titleIndex];

titleIndex++;

if(titleIndex>=titles.length){

titleIndex=0;

}

},4000);

/* ===========================
   AUTO SCROLL TOP
=========================== */

window.addEventListener("beforeunload",()=>{

window.scrollTo(0,0);

});

/* ===========================
   CONSOLE MESSAGE
=========================== */

console.log("%c❤️ HAPPY BIRTHDAY KEDAR ❤️",
"color:#FFD700;font-size:24px;font-weight:bold;");

console.log("%cMade with lots of love ✨",
"color:#00d4ff;font-size:16px;");

/* ===========================
   FINAL MESSAGE
=========================== */

console.log("Website Loaded Successfully 🎉");

/* =====================================================
   END OF SCRIPT
===================================================== */