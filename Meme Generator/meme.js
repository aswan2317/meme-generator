document.getElementById("memeForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const topText = document.getElementById("topText").value;
    const bottomText = document.getElementById("bottomText").value;
    const imageUrl = document.getElementById("imageUrl").value;

    const memeDiv = document.createElement("div");
    memeDiv.classList.add("meme");

    const memeImage = document.createElement("img");
    memeImage.src = imageUrl;

    const topTextDiv = document.createElement("div");
    topTextDiv.classList.add("memeText", "top");
    topTextDiv.innerText = topText;

    const bottomTextDiv = document.createElement("div");
    bottomTextDiv.classList.add("memeText", "bottom");
    bottomTextDiv.innerText = bottomText;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.addEventListener("click", function() {
        memeDiv.remove();
    });

    memeDiv.appendChild(memeImage);
    memeDiv.appendChild(topTextDiv);
    memeDiv.appendChild(bottomTextDiv);
    memeDiv.appendChild(deleteBtn);

    document.getElementById("memeContainer").appendChild(memeDiv);

    // Clear the form inputs
    document.getElementById("topText").value = "";
    document.getElementById("bottomText").value = "";
    document.getElementById("imageUrl").value = "";
});


