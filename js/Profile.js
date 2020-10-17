$(function () {
    var db = firebase.firestore();
    db.collection("Profile").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var Pemail = `${doc.data().Email}`
            var pf = ` <div class="profile">
            <img class="imgg" src="${doc.data().ImgPro}" width="70" height="70">
            <div>
                <B>${doc.data().Name}</B>
            </div>
            </div>
            `;
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    var email = user.email;
                    if (email === Pemail) {
                        $("#D").append(pf);
                    }
                }
            });
            
        }
        )
    })
})
