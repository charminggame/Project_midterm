function test() {
    var db = firebase.firestore();
    db.collection("movie").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var c = `${doc.data().N}`
                var card = ` <img src="${doc.data().Poster}" width="100%">
                    <B>${doc.data().Title}</B>
                    <p>
                        ${doc.data().Detail}
                    </p>`;
                    $("#D" + c).append(card);
                
            });
        })
}


$(function () {
    var db = firebase.firestore();
    db.collection("movie").get().then((querySnapshot) => {
           
        querySnapshot.forEach((doc) => {
                var c = `${doc.data().N}`
                var card = ` <img src="${doc.data().Poster}" width="380" height="480" id="a1">
                <div class="nmovie"><B>${doc.data().Title}</B> </div>`;
                $("#a" + c).append(card);
            });
        })
})