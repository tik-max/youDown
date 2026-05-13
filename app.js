// GET ELEMENTS
const analyzeBtn = document.getElementById("analyzeBtn");

const youtubeUrl = document.getElementById("youtubeUrl");

// BUTTON CLICK
analyzeBtn.addEventListener("click", () => {

    const url = youtubeUrl.value;

    // CHECK IF URL EXISTS
    if(url === ""){
        alert("Please enter YouTube URL");
        return;
    }

    console.log("Analyzing URL:", url);

    // FUTURE:
    // Send URL to backend server

});