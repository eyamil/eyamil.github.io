/* Onload stuff. */
window.addEventListener('load', loader);
    function loader() {
        var menu = document.createElement('div');
        document.body.appendChild(menu);
        menu.id = 'menu';
        var Mspacing = document.createElement('div');
        menu.appendChild(Mspacing);
        Mspacing.className = 'menuspacing';
        var postsJSON = document.createElement('script');
        document.head.appendChild(postsJSON);
        postsJSON.src = 'posts.json';
    }
