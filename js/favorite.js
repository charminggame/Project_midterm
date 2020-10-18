function favorite() {
    var db = firebase.firestore();
    db.collection("Profile").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var Pemail = `${doc.data().Email}`
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    var email = user.email;
                    if (email === Pemail) {
                        db.collection("Movie").get().then((querySnapshot) => {
                            querySnapshot.forEach((doc) => {
                                console.log(1);
                            })
                        }
                        )
                    }
                }
            })
        })
    })
}
