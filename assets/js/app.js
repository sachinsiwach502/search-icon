let searchBar = document.querySelector("#search_bar");
let allContent = document.querySelector(".content");
let searchBtn = document.querySelector(".searchBtn");


function enter(event) {
    if (event.key === "Enter") {
        let value = searchBar.value;
        let match = allContent.innerHTML.match(value);
        if (value === "" || !match) {
            window.alert("serach text is not present")
        } else {
            let searched_text = new RegExp('\\b' + value + '\\b', 'gi');
            let text_high = document.querySelectorAll(".high_text");
            text_high.forEach(element => {
                element.outerHTML = element.innerHTML;
            }
            );
            allContent.innerHTML = allContent.innerHTML.replace(searched_text, "<span class='high_text'>$&</span>")
        }
    }
}



