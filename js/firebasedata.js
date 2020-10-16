$(function () {
    var db = firebase.firestore();
    db.collection("movie")
        .get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var c = `${doc.data().N}`
                var card = ` <img src="${doc.data().Poster}" width="100" height="150" alt="dora">
                <div class="media__content">
                    <b>${doc.data().Title}</b>
                </div>
            
            
                <div class="comment">
                    <p>${doc.data().Detail}</p>
                </div>`;
                if(c === 1||c===6||c === 11)
                $("#D"+c).append(card);
            });
        })
});

$(function () {
    var db = firebase.firestore();
    db.collection("movie")
        .get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var c = `${doc.data().N}`
                var card = ` <img src="${doc.data().Poster}" width="380" height="480" id="a1">
                <div class="nmovie"><B>${doc.data().Title}</B> </div>`;
                $("#a"+c).append(card);
            });
        })
})