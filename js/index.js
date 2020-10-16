$(function () {

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            displayName = user.displayName;
            email = user.email;
            photoUrl = user.photoURL;
            console.log(displayName, email, photoUrl);

            $("#username").text(email);
            $("#displayname").text(displayName);
            $("#photo").attr("src",photoUrl);

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

document.addEventListener('init', function(event) {
    var page = event.target;
    
    if (page.id === 'page1') {
        page.querySelector('#a1').onclick = function() {
            test()
            document.querySelector('#myNavigator').pushPage('views/Adventure1.html');
        };
        
        page.querySelector('#a6').onclick = function() {
            test()
            document.querySelector('#myNavigator').pushPage('views/Comedy1.html');
        };

        page.querySelector('#a11').onclick = function() {
            test()
            document.querySelector('#myNavigator').pushPage('views/Family1.html');
        };
    }
    else if (page.id === 'page2') {
        page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    }
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