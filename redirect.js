(() => {
    'use strict';
    if (window.location.hostname !== 'abrahamosinuga.github.io') return;
    const target = new URL('https://abeo.dev/');
    const path = window.location.pathname.replace(/\.html$/i, '');
    target.pathname = /^\/(?:index)?\/?$/i.test(path) ? '/' : path;
    target.search = window.location.search;
    target.hash = window.location.hash;
    window.location.replace(target.href);
})();
