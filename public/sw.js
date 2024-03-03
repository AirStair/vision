self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('v1')
            .then(cache => cache.addAll([
                '/',
                'tf.min.js',
                'index.js',
                'index.css',
                '/icons/24x24.png',
                '/icons/48x48.png',
                '/icons/192x192.png',
                '/icons/512x512.png'
            ]))
    )
})
