const photos = [
    { src: "IMG/1.jpg", width: 768, height: 1024 },
    { src: "IMG/2.jpg", width: 1920, height: 1080 },
    { src: "IMG/3.jpg", width: 1080, height: 1920 },
    { src: "IMG/4.gif", width: 944, height: 1920 },
    { src: "IMG/5.jpg", width: 1152, height: 2048 },
    { src: "IMG/6.jpg", width: 1152, height: 2048 },
    { src: "IMG/7.jpg", width: 1920, height: 1080 },
    { src: "IMG/8.jpg", width: 1080, height: 1920 },
    { src: "IMG/9.jpg", width: 1080, height: 1920 },
    { src: "IMG/10.jpg", width: 1152, height: 2048 },
    { src: "IMG/11.jpg", width: 1080, height: 1920 },
    { src: "IMG/12.jpg", width: 1152, height: 2048 }
];

function resizeImage(image) {
    if (image.width === 1920 && image.height === 1080) {
        return { src: image.src, width: 640, height: 360 };
    } else if (image.width === 944 && image.height === 1920) {
        return { src: image.src, width: 324, height: 660 };
    } else if (image.width === 768 && image.height === 1024) {
        return { src: image.src, width: 480, height: 640 };
    } else if (image.width === 1152 && image.height === 2048) {
        return { src: image.src, width: 360, height: 640 };
    } else if (image.width === 1080 && image.height === 1920) {
        return { src: image.src, width: 360, height: 640 };
    }
    return image;
}

function changeImage() {
    let currentIndex = 1;

    setInterval(() => {
        const imgElement = document.getElementById("img");
        const image = photos[currentIndex];

        const resizedImage = resizeImage(image);
        if(resizedImage.src == "IMG/4.gif")
        {
            imgElement.src = resizedImage.src;
            imgElement.style.width = resizedImage.width + "px";
            imgElement.style.height = resizedImage.height + "px";
            document.getElementById("gif").innerHTML = "Metr 63 i 7/10 się obraziło lol"
            document.getElementById("index-slider1").style.padding = "10px 20px"
        }else
        {
            imgElement.src = resizedImage.src;
            imgElement.style.width = resizedImage.width + "px";
            imgElement.style.height = resizedImage.height + "px";
            document.getElementById("gif").innerHTML = ""
            document.getElementById("index-slider1").style.padding = "20px 20px"
        }

        currentIndex = (currentIndex + 1) % photos.length;
    }, 3000); 
}

changeImage();