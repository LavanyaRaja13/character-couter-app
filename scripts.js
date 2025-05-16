document.querySelector("img.main-header-brightness").addEventListener("click", function() {
    document.querySelector(".main").classList.toggle("background-updated");
 });
console.log("hello");
 document.querySelector(".main-content-inputbox").addEventListener("keyup", function(){
    document.querySelector(".charCount").textContent = this.value.length;
    document.querySelector(".wordCount").textContent = this.value.split(/\s+/).length-1;
    document.querySelector(".sentenceCount").textContent = this.value.split(/\./).length-1;
});