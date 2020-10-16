document.addEventListener('init', function(event) {
    var page = event.target;

    if (page.id === 'page1') {
        page.querySelector('#a1').onclick = function() {
            document.querySelector('#myNavigator').pushPage('views/Adventure1.html', { data: { title: 'Page 2' } });
        };

        page.querySelector('#c1').onclick = function() {
            document.querySelector('#myNavigator').pushPage('views/Comedy1.html', { data: { title: 'Page 2' } });
        };

        page.querySelector('#f1').onclick = function() {
            document.querySelector('#myNavigator').pushPage('views/Family1.html', { data: { title: 'Page 2' } });
        };
    } else if (page.id === 'page2') {
        page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    }
});