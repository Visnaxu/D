function yes(){
    document.querySelector("#s2-header h1").innerHTML = "YAYYYY. I LOVE YOU BABY. SEE YOU ON WEEDING <3"
    document.getElementById("photo").src = "IMG/s2-yes.jpg"
    document.getElementById("yes").style.display = "none"
    document.getElementById("no").style.display = "none"
    document.getElementById("p").style.display = "block"
    document.getElementById("no").style.position = "absolute"
    document.getElementById("no").style.top = "10000px"
    document.getElementById("no").style.left = "10000px"
}
let count = 0;

function no() {
    count++;
    const button = document.getElementById("no");
    const photo = document.getElementById("photo")
    button.style.position = "absolute";

    const positions = [
        { top: "50px", left: "50px" },
        { top: "150px", left: "calc(100% - 400px)" },
        { top: "calc(100% - 200px)", left: "50px" },
        { top: "calc(100% - 400px)", left: "calc(100% - 550px)" },
        { top: "500px", left: "250px" },
        { top: "870px", left: "calc(100% - 1200px)" },
        { top: "20px", left: "1100px" }
    ];

    if (count <= positions.length) {
        const position = positions[count - 1];
        button.style.top = position.top;
        button.style.left = position.left;
    }

    if (count === 1) {
        button.innerHTML = "NO????";
        photo.src = "IMG/s2-2.jpg";
    } else if (count === 2) {
        button.innerHTML = "You sure?";
        photo.src = "IMG/s2-3.jpg";
    } else if (count === 3) {
        button.innerHTML = "PLEASE :((";
        button.style.width = "130px";
        photo.src = "IMG/s2-4.jpg";
    } else if (count === 4) {
        button.innerHTML = "bro, u dumb or what?";
        button.style.width = "170px";
        photo.src = "IMG/s2-5.jpg";
    } else if (count === 5) {
        button.innerHTML = "YOU ARE JOKING!";
        button.style.width = "110px";
        button.style.height = "50px";
        photo.src = "IMG/s2-6.jpg";
    } else if (count === 6) {
        button.innerHTML = "STOP!";
        button.style.width = "100px";
        button.style.height = "40px";
        photo.src = "IMG/s2-7.jpg";
    } else if (count === 7) {
        button.innerHTML = "I got angry..";
        button.style.width = "130px";
        photo.src = "IMG/s2-8.jpg";

        document.addEventListener("mousemove", checkCursorProximity);
        button.style.width = "160px";
        button.style.height = "50px";
    }
}

function moveButtonRandomly() {
    const button = document.getElementById("no");
    const positions = [
        { top: "50px", left: "50px" },
        { top: "150px", left: "calc(100% - 400px)" },
        { top: "calc(100% - 200px)", left: "50px" },
        { top: "calc(100% - 400px)", left: "calc(100% - 550px)" },
        { top: "500px", left: "250px" },
        { top: "870px", left: "calc(100% - 1200px)" },
        { top: "20px", left: "1100px" }
    ];

    const randomIndex = Math.floor(Math.random() * positions.length);
    const position = positions[randomIndex];

    button.style.top = position.top;
    button.style.left = position.left;

    const randomMessages = [
        "BRUUH!",
        "YOU TRIED!",
        "JUST CLICK YES!",
        "YOU'RE JUST PLAYING",
        "HAHAHAH"
    ];

    const photos = [
        "IMG/s2-2.jpg",
        "IMG/s2-3.jpg",
        "IMG/s2-4.jpg",
        "IMG/s2-5.jpg",
        "IMG/s2-6.jpg",
        "IMG/s2-7.jpg",
        "IMG/s2-8.jpg"
    ]
    button.innerHTML = randomMessages[Math.floor(Math.random() * randomMessages.length)];
    photo.src = photos[Math.floor(Math.random() * photos.length)];
}

function checkCursorProximity(event) {
    if (count < 7) return;

    const button = document.getElementById("no");
    const rect = button.getBoundingClientRect();
    const cursorX = event.clientX;
    const cursorY = event.clientY;

    const distanceX = Math.abs(cursorX - (rect.left + rect.width / 2));
    const distanceY = Math.abs(cursorY - (rect.top + rect.height / 2));

    if (distanceX < 100 && distanceY < 100) {
        moveButtonRandomly();
    }
}