'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"manifest.json": "3c00bfb5fa6c03e5efff656e896ed43c",
"main.dart.js": "61b13ddb64e2d9aeb03f6fd41ad6fd09",
"version.json": "009c9e65172e010890f7f65fde438006",
"assets/assets/images/gsb-rv-visiteur-serveur.png": "aa279e9a72f05f8041d4259f1ffbc640",
"assets/assets/images/logo.svg": "df08988fdc848d0a0722655527f00dcd",
"assets/assets/images/learnflow-api.png": "106bf340d0676bdcccdc17c8c29e4d6f",
"assets/assets/images/gsb-frais.png": "6cd08121c9fa313d0e1ec93ef8075e4a",
"assets/assets/images/spinner-light.apng": "0aa2c9bee051117e80ffaafb604e9258",
"assets/assets/images/learnflow-backoffice.png": "2aafdd0e7748d2cd630f2fefc1724361",
"assets/assets/images/logo.png": "ec4e40868695ea191ece5a171600c7bf",
"assets/assets/images/portfolio.png": "77a58b35cdeafc34a8f06fa5c8a14598",
"assets/assets/images/gsb-rv-dr.png": "9cae33c5226005d87431d9389233a2fb",
"assets/assets/images/spinner-dark.apng": "d7f6e0cca2ae052bdb7973799975027a",
"assets/assets/images/mawaqit%2520logo.png": "c3e46047c8494451e5e233d36d8a329b",
"assets/assets/images/home-view-light-en.jpg": "84e91328b352364f7212f931f7be7a22",
"assets/assets/images/1rm_logo_white.png": "35cd74172bb4343ce25b67cbbbc8e088",
"assets/assets/fonts/FontAwesome.ttf": "de6bf66865cf2734984feeeb9c638a3a",
"assets/assets/fonts/OctIcons.ttf": "71c7d381e58ae844420306f7a3bbbe5a",
"assets/assets/fonts/BoxIcons.ttf": "92ba7cbb384d35ae4858f9b59d8fc373",
"assets/assets/fonts/Nunito-Regular.ttf": "0c890be2af0d241a2387ad2c4c16af2c",
"assets/assets/fonts/Nunito-Bold.ttf": "91019ffb3b1df640e444b34e5a73dfc3",
"assets/assets/icons/other/express-js.svg": "1c0e6598cd54bc9ffd8bdecb10f44579",
"assets/assets/icons/other/dart.svg": "4a0a9df85742ff469633877bd6e7bdaf",
"assets/assets/icons/other/bootstrap.svg": "73b76d86a93d5386bfa2cc3364d32e56",
"assets/assets/icons/other/firebase.svg": "a4cdca210685e2b66e70f9863d03a2de",
"assets/assets/icons/software-development/Google%2520Play.svg": "ab8d80a0cdf768e8d6335a75e8da8d3e",
"assets/assets/icons/software-development/html-5.svg": "3ddf9449edce26e2d2d6c5137cbece7f",
"assets/assets/icons/software-development/docker.svg": "f3138330e03a6625e41dc78e20c096dd",
"assets/assets/icons/software-development/mongodb.svg": "bc514c84ded5abfcefd05e1f89c70033",
"assets/assets/icons/software-development/postgresql.svg": "fba21228676cd99444651c12a1371c5c",
"assets/assets/icons/software-development/typescript.svg": "2b714d9e71c4df9f537371456581aa8b",
"assets/assets/icons/software-development/java.svg": "3cbed2cd68a08c58972ae7bfc0296061",
"assets/assets/icons/software-development/flask.svg": "44fcfcf73e810db529833d2a47b32e81",
"assets/assets/icons/software-development/mariadb.svg": "eb44ec19eb33d4146eba2d878478aca3",
"assets/assets/icons/software-development/nodejs.svg": "44acb407fa21eee9ef24809d95678a09",
"assets/assets/icons/software-development/PowerShell.svg": "b61820fdf269a349f43683396903d0d6",
"assets/assets/icons/software-development/python.svg": "5a2e6e251257f03ebc51e5918cfcb4ae",
"assets/assets/icons/software-development/javascript.svg": "62b193700e3f66c40b98c5d990062369",
"assets/assets/icons/software-development/firebasehosting.svg": "fe4bda4fb4f768a679a06ec56f0f716c",
"assets/assets/icons/software-development/c%2523.svg": "bdaccca278378c33d51a37613e6acd09",
"assets/assets/icons/software-development/cpp.svg": "fde19d4a04b1905e1fec7bfa705100f7",
"assets/assets/icons/software-development/css3.svg": "558e249dab7d9199273e6666aeb04501",
"assets/assets/icons/software-development/Github.svg": "8dc66f6f6f62dcd1661b79ac93910a05",
"assets/assets/icons/software-development/flutter.svg": "030f81e13f1a723e090651610a5d8c11",
"assets/assets/icons/software-development/Angular.svg": "638392d3bfe892ed2a133f3d1cabb925",
"assets/assets/icons/software-development/React.svg": "8e26f22094a11f6a689d8302dc30782c",
"assets/assets/icons/software-development/AspDotNET.svg": "afe88915b28caa9b114736d3ef5603fe",
"assets/assets/icons/software-development/github-pages.svg": "4810f1a897f368328f0387d36ec0ac8d",
"assets/assets/icons/flags/france.svg": "5e0abb6d24264435255a8f94c369ac1d",
"assets/assets/icons/flags/united-states-of-america.svg": "cfe34e9f0aee58b9de91362c139a90bd",
"assets/assets/translations/en.json": "d29a869032caffe1b3d59e2cf5641dba",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "a81f8fe32e4298b249fb9aed3db89eb2",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/FontManifest.json": "0361baae30adca8ebc149077152a854a",
"assets/NOTICES": "e893e994896b65f7d29468d17b25df62",
"assets/AssetManifest.json": "d0ad4f9a78cea8aa42ebaf6013da928f",
"assets/AssetManifest.bin": "e64b949d7cdadb2378e9cd2b82d47d51",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"icons/Icon-192.png": "2707bbfaa290337dd4e2320cc49b7a58",
"icons/Icon-maskable-512.png": "3f51793bd9d85e1f165390a2a9e28256",
"icons/Icon-512.png": "3f51793bd9d85e1f165390a2a9e28256",
"icons/Icon-maskable-192.png": "2707bbfaa290337dd4e2320cc49b7a58",
"index.html": "23d81fc75d81df5e6105cb9b522d5c89",
"/": "23d81fc75d81df5e6105cb9b522d5c89",
"main.dart.mjs": "eafd806080e659a4555bf9557c7aba43",
"favicon.png": "e1df774ef8747a91653e1b9d295d3d23",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"splash/img/light-2x.png": "f262b9c6adac4504ac4240388b261d1d",
"splash/img/light-3x.png": "dc1f96cf873f419a86add1618d72b0fa",
"splash/img/light-1x.png": "8961658c72fd5e13ba89a3d87b95f5ea",
"splash/img/dark-3x.png": "42db1d8672c72994536a350e2b15be5d",
"splash/img/light-4x.png": "211a30d09cccdcc2cc6a0d1fd48f0844",
"splash/img/dark-2x.png": "d4298fa1d61c750418bf13f6417375cb",
"splash/img/dark-4x.png": "7a08e8e8c5e8efbd817575f489ec69e3",
"splash/img/dark-1x.png": "c6fd8dd64c2826d0c49c91d360f2f270",
"main.dart.wasm": "4dff42f3ae5995739588b42e4da4a994",
"flutter_bootstrap.js": "6a1a6fb29fe5cbf384d566178707e76b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
