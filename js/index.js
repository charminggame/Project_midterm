$(function () {

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            displayName = user.displayName;
            email = user.email;
            photoUrl = user.photoURL;
            console.log(email);

            $("#username").text(email);
            $("#displayname").text(displayName);
            $("#photo").attr("src", photoUrl);

        } else {
            window.location.href = 'signin.html';
        }
    });

    $("#signout").click(function () {
        firebase.auth().signOut()
            .then(function () {
                // Sign-out successful.
            }).catch(function (error) {
                // An error happened.
            });
    });
})

function signout() {
    firebase.auth().signOut()
        .then(function () {
            // Sign-out successful.
        }).catch(function (error) {
            // An error happened.
        });
}

document.addEventListener('init', function (event) {
    var page = event.target;

    if (page.id === 'page1') {
        page.querySelector('#a1').onclick = function () {
            test()
            document.querySelector('#myNavigator').pushPage('views/Adventure1.html');
        };

        page.querySelector('#a6').onclick = function () {
            test()
            document.querySelector('#myNavigator').pushPage('views/Comedy1.html');
        };

        page.querySelector('#a11').onclick = function () {
            test()
            document.querySelector('#myNavigator').pushPage('views/Family1.html');
        };
    }
    else if (page.id === 'page2') {
        page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    }
    else if (page.id === 'profile') {
        page.querySelector('#signout').onclick = function () {
            signout()
        }
    }   
    else if (page.id === 'favorite') {
        favorite()
    }
    // else if (page.id === 'search') {
    //     if (typeof page.querySelector('#s1') === "object") {

    //     } else {
    //         page.querySelector('#s1').onclick = function () {
    //             test()
    //             document.querySelector('#search').pushPage('views/Adventure1.html');
    //         };

    //         page.querySelector('#s6').onclick = function () {
    //             test()
    //             document.querySelector('#search').pushPage('views/Comedy1.html');
    //         };

    //         page.querySelector('#s11').onclick = function () {
    //             test()
    //             document.querySelector('#search').pushPage('views/Family1.html');
    //         };
    //     }
    // }
});


window.fn = {};

window.fn.toggleMenu = function () {
    document.getElementById('Navispl').right.toggle();
};

window.fn.loadView = function (index) {
    document.getElementById('appTabbar').setActiveTab(index);
    document.getElementById('menu').close();
};

window.fn.loadLink = function (url) {
    window.open(url, '_blank');
};

window.fn.pushPage = function (page, anim) {
    if (anim) {
        document.getElementById('Navispl').pushPage(page.id, { data: { title: page.title }, animation: anim });
    } else {
        document.getElementById('Navispl').pushPage(page.id, { data: { title: page.title } });
    }
};

$(function () {
    var db = firebase.firestore();
    db.collection("Profile").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var Pemail = `${doc.data().Email}`
            var pf = ` <div class="profile">
            <img class="img" src="${doc.data().ImgPro}" width="70" height="70">
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

function test2(NMovie) {
    var db = firebase.firestore();
    var Up = db.collection("Profile").doc("charminggame@hotmail.com");
    db.collection("Profile").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var Pemail = `${doc.data().Email}`
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    var email = user.email;
                    if (email === Pemail) {
                        for(let i = 0; i < 16 ; i++){
                        if (String(NMovie).indexOf(String(`${doc.data().Favorite[i]}`)) != -1) {
                            Up.update({
                                Favorite: firebase.firestore.FieldValue.arrayUnion(NMovie)
                            })
                        } else if (String(NMovie).indexOf(String(`${doc.data().Favorite[i]}`)) != 1){
                            Up.update({
                                Favorite: firebase.firestore.FieldValue.arrayRemove(NMovie)
                            })
                        }
                    }
                    }
                }
            })
        }
        )
    })
}