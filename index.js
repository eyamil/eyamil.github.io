/* Onload stuff. */
var data;
window.addEventListener('load', loader);
    function loader() {
        var menu = document.createElement('div');
        document.body.appendChild(menu);
        menu.id = 'menu';
        var Mspacing = document.createElement('div');
        menu.appendChild(Mspacing);
        Mspacing.className = 'menuspacing';
        
        request = new XMLHttpRequest();
        request.open('GET', 'http://eyamil.github.io/posts.json', true);
        
        request.onload = function() {
            if (request.status >= 200 && request.status < 400){
                // Success!
                data = JSON.parse(request.responseText);
                for (var n = 0; n < Object.keys(data.Pages).length; n++) {
                    var link = document.createElement('span');
                    Mspacing.appendChild(link);
                    link.className = 'menulink';
                    link.innerText = Object.keys(data.Pages)[n];
                };
            } else {
                throw();
        }
        console.log(data);
    };
    
    request.onerror = function() {
        // There was a connection error of some sort
    };
    
    request.send();
    }
