document.addEventListener
("DOMContentLoaded",(e) => {
    // console.log("loaded")
    fetch("https://rich-pink-crane-sock.cyclic.app/meals")
    .then(res => res.json())
    .then(data => console.log(data))
    data.forEach((recipe) => {
        
    }
    )
})