function Searchmovie() {
    const search = document.getElementById('searchText').value;
    const rpsearchText = search.replace(/ /g, "");
    var db = firebase.firestore();
    $("#Research").empty();
    db.collection("movie").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const title = doc.data().Title;
            const rptitlemovie = title.replace(/ /g, "");
            var card = `
<div class="card mb-3" style="max-width: 540px;">
<div class="row no-gutters" id="s${doc.data().N}">
    <div class="col">
    <div>
      <img src="${doc.data().Poster}" class="card-img">
    </div>
    </div>
    <div class="col">
      <div class="card-body">
        <h5 class="card-title">${doc.data().Title}</h5>
      </div>
    </div>
  </div>
</div>
                `;
            if (rptitlemovie.toLowerCase().indexOf(rpsearchText.toLowerCase()) != -1) {
                $("#Research").append(card);
            }
        });
    })
}