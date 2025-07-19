
catBTN[0].addEventListener("click", async () => {

    index = 0;
    let response = await fetch("/Short.json");
    let data = await response.json();
    storyTitle.innerHTML = data[index].title;
    storyContents.innerHTML = data[index].storyContents;
    let dataLength = data.length;
    navsBtn[0].addEventListener("click", () => {
        index--;
        if(index <= dataLength) {
            navsBtn[2].removeAttribute("disabled")
        }
        index = index
        storyTitle.innerHTML = data[index].title;
        storyContents.innerHTML = data[index].storyContents;
        if (index < 1) {
            index = index - index;
            console.log(index)
            storyTitle.innerHTML = data[index].title;
            storyContents.innerHTML = data[index].storyContents;
            navsBtn[0].setAttribute("disabled", "true")
        }
        
    });
    
    navsBtn[2].addEventListener("click", () => {
        
        console.log(index)
        index += 1;
        if (index >= 0) {
            navsBtn[0].removeAttribute("disabled")
        }
        storyTitle.innerHTML = data[index].title;
        storyContents.innerHTML = data[index].storyContents;
        if (index === dataLength - 1) {
            navsBtn[2].setAttribute("disabled", "true")
        }
        
        
    })
})