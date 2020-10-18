$(function () {
    var db = firebase.firestore();
    db.collection("Profile").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var Pemail = `${doc.data().Email}`
            var pf = `
            <img class="img" src="${doc.data().ImgPro}" width="100" height="100">
            <br>
                            <div>
                                <B>${doc.data().Name}</B>
                            </div>
            `;
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    var email = user.email;
                    if (email === Pemail) {
                        $("#H").append(pf);
                    }else if (email.toLowerCase().indexOf("gmail") != -1) {
                        var pfg = `
                            <img class="img" src="`+user.photoUR+`" width="100" height="100">
                            <br>
                            <div>
                                <B>`+user.displayName+`</B>
                            </div>
            `;
            $("#H").append(pfg);
                    }
                }
            });
            
        }
        )
    })
})
