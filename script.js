function checkWebsite() {

    let url = document.getElementById("url").value;
    let result = document.getElementById("result");

    if (url === "") {
        result.innerHTML = "⚠️ Please enter a website URL.";
        return;
    }

    result.innerHTML = "🔍 Checking " + url + "...";
}
