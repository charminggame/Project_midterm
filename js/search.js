function Searchmovie() {
    const search = document.getElementById('search').value;
    const newsearchText = search.replace(/ /g, "");
    console.log(newsearchText);
}