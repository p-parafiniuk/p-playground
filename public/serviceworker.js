console.log("Service worker loaded");

globalThis.addEventListener('fetch', (event) => {
    console.log("Fetch event intercepted:", event);
    // console.log("Fetch event intercepted:", event.request.url);
    event.respondWith(new Response("Service worker intercepted this request"));
});

// alert("Service worker loaded");

console.log("Service worker loaded::after");
// its already registered so nothing happens

