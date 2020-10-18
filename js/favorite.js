function favorite() {
    var id = [];
    var db = firebase.firestore();
    db.collection("Profile").get().then((querySnepshot) => {
        querySnepshot.forEach((doc) => {
            var Pemail = `${doc.data().Email}`
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    var email = user.email;
                    if (email === Pemail) {
                        for (let i = 0; i < 16; i++) {
                            id[Number(i)] = `${doc.data().Favorite[i]}`
                        }
                    }
                }
            })
        })
    })
        .then((connect) => {
            db.collection("movie").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    for(let i = 0; i < 16; i++) {
                        if(id[i] === 'undefined'){
                            
                        }else if(Number(id[i]) === Number(`${doc.data().N}`)){
                            var Detail = `                
                        <ons-row class='box_F'>
                            <ons-col class="gg">
                                <img src="${doc.data().Poster}" width="130" height="190">
                                <ons-row class="margin">
                                    <ons-col>
                                        <h4> <b>${doc.data().Title}</h4><small>Action | 1h 57min | 17/7/15</small>
                                        <br>
                                        <ons-icon icon="star" icon="star" icon="star" style="color: #FFA500"></ons-icon> 7.1/10
                                    </ons-col>
            
                                    <ons-col>
                                        
                                        <ons-icon icon="heart" size="30px" style="color: red" onclick="Addremove(${doc.data().N})">
                                        </ons-icon>
                                    </ons-col>
                                </ons-row>
                            </ons-col>
                        </ons-row>
                        <br>`
                            $("#datafavorite").append(Detail);
                        }
                    }
                });
            })
        });
}
