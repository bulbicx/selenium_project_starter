(() => {
    let searchButton = document.querySelector('#search');
    let searchInput = document.querySelector("#searchInput");
    let post1 = document.querySelector("#post1");
    let post2 = document.querySelector("#post2");
    let post3 = document.querySelector("#post3");
    let postTitle1 = document.querySelector("#postTitle1").textContent;
    let postTitle2 = document.querySelector("#postTitle2").textContent;
    let postTitle3 = document.querySelector("#postTitle3").textContent;
    let container = document.querySelector(".container");

    let searchResults = (e) => {
        e.preventDefault();
        setPostToHidden();
        let searchValue = searchInput.value.toLowerCase();

        if (postTitle1.toLowerCase().includes(searchValue)) {
            post1.style.display = 'block';
            container.style.backgroundColor = '#D6DBDF';
        }
        
        if (postTitle2.toLowerCase().includes(searchValue)) {
            post2.style.display = 'block';
            container.style.backgroundColor = '#D6DBDF';
        }

        if (postTitle3.toLowerCase().includes(searchValue)) {
            post3.style.display = 'block';
            container.style.backgroundColor = '#D6DBDF';
        }
    }

    //this method will set posts to hidden and background will be set to hidden
    function setPostToHidden() {
        post1.style.display = 'none';
        post2.style.display = 'none';
        post3.style.display = 'none';
        container.style.backgroundColor = 'white';
    }

    searchButton.addEventListener('click', searchResults);
})();


