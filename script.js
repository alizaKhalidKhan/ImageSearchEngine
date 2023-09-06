const accessKey = "-ZLVFrr6yZ5sF1Uy7iNi7mCgN32KjRAl_8BY7Q-E-FA";

const search = document.getElementById("Search-Form");
const searchbox = document.getElementById("Search-box");
const searchResult = document.getElementById("search-result");
const btn = document.getElementById("show-more-btn");


let keyword = "";
let page = 1;


async function searchImages(){
    keyword = searchbox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;



    const response = await fetch(url);
    const data = await response.json();

    if (page==1){
        searchResult.innerHTML="";
    };
    const results = data.results;
    results.map((result)=>{
        const image = document.createElement("img");
        image.src=result.urls.small;

        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target="_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);

    });

    btn.style.display="block";
}


search.addEventListener("submit" , (e) =>{
    e.preventDefault();
    page=1;
    searchImages();
});

btn.addEventListener("click" , ()=>{
    page++;
    searchImages();

});