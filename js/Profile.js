$(function () {
    var db = firebase.firestore();
    db.collection("Profile").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var Pemail = `${doc.data().Email}`
            var pf = `
            <img class="img" src="${doc.data().ImgPro}" width="100" height="100">
                            <div>
                                <B>${doc.data().Name}</B>
                            </div>
            `;
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    var email = user.email;
                    if (email === Pemail) {
                        $("#H").append(pf);
                    }
                }
            });
            
        }
        )
    })
})
