var button = document.getElementById("request"); 
button.addEventListener("click", function() {
    xhr.open("GET", "http://localhost:591", true); 
    xhr.onreadystatechange = function() {
        if (this.readyState == this.DONE) {
            if (this.status != 200) {
                console.warn("Error" + this.status);
            } else {
                console.log(this.response)
            }
        }
    } 
    
})