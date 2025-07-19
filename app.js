let body = document.querySelector("body")
let bookContainer = document.querySelector(".book-container")
let pages = document.querySelectorAll(".pages");
let cover = pages[0];
let storyNavs = document.querySelector(".story-navs");
let catBTN = storyNavs.querySelectorAll("button");
let preloader = document.querySelector(".preloader");
let mainStories = document.querySelector(".main-stories");
let index = 0;
let storyTitle = document.querySelector(".story-title");
let storyContents = document.querySelector(".story-contents");
let storyFooter = document.querySelector(".story-footer");
let navsBtn = storyFooter.querySelectorAll("button")
cover.addEventListener("click", () => {
    cover.classList.toggle("open")
});
catBTN.forEach(btn => {
    btn.addEventListener("click", () => {
        preloader.style.display = "flex";
        setTimeout(() => {
            
            preloader.style.display = "none";
            mainStories.style.display = "flex";
            bookContainer.style.display = "none"
        }, 5000);
    })
    setTimeout(() => {
        if(body.requestFullscreen){
            body.requestFullscreen();
          let sc =  body.querySelector(".story-contents")
            sc.style.height = "100%"
            sc.style.overflow = "scroll"
        }
    }, 6000)
    
})