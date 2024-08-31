accessKey= "W4OpHltlgjXtrKXOFcV56BU8iuAAM-hT38iZonT7L2c"

const searchForm = document.getElementById("search");
const searchBox = document.getElementById("searchbox");
const searchResult = document.getElementById("search-result");
const showBtn = document.getElementById("show");



async function searchImage(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}
    &client_id=${accessKey}&per_page=12`;

 const responce = await fetch(url);
 const data = await responce.json();
 if (page === 1){
    searchResult.innerHTML = "";
 }
const results = data.results;
results.map((result) => {
    const image = document.createElement("img");
    image.src= result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";

    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);



})

show.style.display = "block";
 //console.log(data);
}

 searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImage();
 } )

 show.addEventListener("click", () => {
    page++;
    searchImage();
 })
