const h1 = document.querySelector("div.hello:first-child h1");


function handleTitleClick() {
    const clickedClass="clicked";

    if (h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass)
        }
}

///////// up and down functions do same thing /////////////////


function handleTitleClick() {
        h1.classList.toggle("clicked")
    }
