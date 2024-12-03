(function() {
    var done = false;
    var head = document.head || document.getElementsByTagName('HEAD')[0];
    var elem = document.createElement('SCRIPT');
    var href = window.self!==window.top?document.referrer:location.href;
    var data = JSON.parse(document.querySelector('#iwmads').getAttribute('data-ad').replace(/\'/gi,'"'));

    elem.type = 'text/javascript';
    elem.async = true;
    elem.src = '//cdn.interworksmedia.co.kr/js/tm/ip/latest/iwmads.js';
    elem.onload = elem.onreadystatechange = function(e) {
        if (!done && (!elem.readyState || /loaded|complete/.test(elem.readyState))) {
            done = true;
            elem.onload = elem.onreadystatechange = null;
            elem.parentNode.removeChild(elem);

            iwmads({
                sid: data.id,
                pURL: href,
                site: data.site,
                page: data.page
            });
        }
    };
    head.appendChild(elem);
})();