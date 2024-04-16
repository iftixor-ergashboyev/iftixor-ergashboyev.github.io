'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0de4be31c0fa8991a939da9e56f62fe7",
"assets/AssetManifest.bin.json": "26ced0de98c9bcf4fc95751286591dff",
"assets/AssetManifest.json": "fcf0c3b7f6fcbd414694a3313c29d550",
"assets/assets/images/about.png": "df3d00e1795f5babb101e1e0e2834d9a",
"assets/assets/images/about_me.png": "f3f2a071f02f29364e0b253b925d7852",
"assets/assets/images/builder.png": "ad1df96f6b6f09c92b79fb07d6e60883",
"assets/assets/images/dart.png": "a675cb93b75d5f1656c920dceecdcb38",
"assets/assets/images/dev.png": "bb63cc29e2578346b1dfb67f81f64524",
"assets/assets/images/emoji.png": "30884bfcd2c0d169ab52bfce0e949c23",
"assets/assets/images/facebook.png": "a6a52ba8f18e96b213939a36591cf460",
"assets/assets/images/flutter.png": "a9ce1fe6ac06e4c69a6a6193df88b91b",
"assets/assets/images/github.png": "5cd9f30e245cbdcc11274951e439ad65",
"assets/assets/images/instagram.png": "7398fff14e299bdab2dfac8ee5364730",
"assets/assets/images/my_photo.png": "e0032019fd7be3b1778c5be21bff9164",
"assets/assets/images/past.png": "1cb933e0037d84c06b17ea3c7a97eea0",
"assets/assets/images/pc.png": "bca5868b49c209b141a2565dcd1ec573",
"assets/assets/images/study.png": "4554d0b0b59d5d330f15c02318e34033",
"assets/assets/images/telegram.png": "20f095bad42c39cecac0c489534820fe",
"assets/assets/images/you_tube.png": "3c96792b47074f6f5a533e7ab4251396",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "b4b084fffc809c7e57442196ab8ae6ba",
"assets/NOTICES": "18ee1907cb03225be19c2edcc21e1c2f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "ad5c44112e5085058d0e588a4030c73d",
"assets/packages/icon_icons/assets/social_media/add_icon-icons.com_74429.png": "8eee1fa9827e753c4309fbbb2e3f2e6f",
"assets/packages/icon_icons/assets/social_media/ajouter-un-document.png": "beec7f50b16cfe23c936d396979ad2aa",
"assets/packages/icon_icons/assets/social_media/ajouter.png": "3e901597308cba363453d893ee749940",
"assets/packages/icon_icons/assets/social_media/alarmClock.png": "b384d541e21b6725d90746b544cc7095",
"assets/packages/icon_icons/assets/social_media/angle-cercle-vers-le-bas.png": "bab4ddc1a940fa6efad046d4f3b7aec9",
"assets/packages/icon_icons/assets/social_media/appel-telephonique.png": "6536cb562ec76e2eddd00f1d88f5ce3c",
"assets/packages/icon_icons/assets/social_media/bag.png": "9e762182febbb0983c317ac8799fc230",
"assets/packages/icon_icons/assets/social_media/basketball.png": "eb7e545d237eb001fcbfaaeddbf9fd68",
"assets/packages/icon_icons/assets/social_media/bookBlue.png": "3448f69be90f299991cc184ac9851030",
"assets/packages/icon_icons/assets/social_media/books.png": "abc9a80b1cdc099f39d3b0ce75c3febc",
"assets/packages/icon_icons/assets/social_media/burrito.png": "074cf0dd9e6aeb893e5374dfd2f92043",
"assets/packages/icon_icons/assets/social_media/cake.png": "dfc330d50adaa06402a2e3653385ab89",
"assets/packages/icon_icons/assets/social_media/calendrier.png": "ba3bd022fc75d48b8258fdafa6429477",
"assets/packages/icon_icons/assets/social_media/chargement-de-camion.png": "f1ad311ad7b08f40180b27e1a0c516f2",
"assets/packages/icon_icons/assets/social_media/chercher.png": "41a3709e5f7a3405a6a5c8e951202045",
"assets/packages/icon_icons/assets/social_media/chips.png": "ea4aeb722c7bd94367a882cb613b29b8",
"assets/packages/icon_icons/assets/social_media/classroom.png": "0e4a32a0b38caa7c7ef6b75b5850da7c",
"assets/packages/icon_icons/assets/social_media/close.png": "933659523fb494b6081cdd16902e7ce1",
"assets/packages/icon_icons/assets/social_media/coeur.png": "a84ccc86bd0c6c6c9b4081e8c8ff4e28",
"assets/packages/icon_icons/assets/social_media/coffee.png": "6bc61e02ae695b68df6a07a06474085a",
"assets/packages/icon_icons/assets/social_media/coloredPencil.png": "391acc2077ef285d0a48ecdc3ecd09a1",
"assets/packages/icon_icons/assets/social_media/cookie.png": "e316bd3be8654511035e01c86e0f1204",
"assets/packages/icon_icons/assets/social_media/degree.png": "aa353a35abd246361470861fb1a7078a",
"assets/packages/icon_icons/assets/social_media/document.png": "67ae81c2dbb557fa776056b29d255439",
"assets/packages/icon_icons/assets/social_media/donut.png": "df4b11ecb7842aaa3f4309848337061d",
"assets/packages/icon_icons/assets/social_media/drawing.png": "0d0fe988dc0cf97989c8c8d7b32f5913",
"assets/packages/icon_icons/assets/social_media/emojiAngry.png": "e41e5ae685cfae3b451300ed8d91be47",
"assets/packages/icon_icons/assets/social_media/emojiClap.png": "0911bffc37ec28ec64f1d6b5ffb06fa0",
"assets/packages/icon_icons/assets/social_media/emojiCool.png": "f84e1cc64b5d42e1d075a9a5c8837f6b",
"assets/packages/icon_icons/assets/social_media/emojiEyesLove.png": "a7cc77567353f82b9000dfa0d6e9a7c0",
"assets/packages/icon_icons/assets/social_media/emojiLaughing.png": "2e182d0ab3c73b3ebdb43f44caea44a7",
"assets/packages/icon_icons/assets/social_media/emojiSleeping.png": "3bbf699b81421eb9e020b26a6eaa1376",
"assets/packages/icon_icons/assets/social_media/empojiPartying.png": "27eabf87a9636a279d07515341ada428",
"assets/packages/icon_icons/assets/social_media/enveloppe.png": "9f687eb0dbfb2216f56f866d7c863e08",
"assets/packages/icon_icons/assets/social_media/excel.png": "33e7d9fbc9c96517c91bf57bb3cd9ec3",
"assets/packages/icon_icons/assets/social_media/facebook.png": "2baca0735b3a6caebab89dedd3694c98",
"assets/packages/icon_icons/assets/social_media/face_nerd_emo_emoticon_emoji_icon_209625.png": "e700da155dea559029654a451ffe6a23",
"assets/packages/icon_icons/assets/social_media/femaleAvatar.png": "1b22d5eccac16233d8cf646c108c0bc2",
"assets/packages/icon_icons/assets/social_media/figma.png": "11bda884d5a2d5f5e90fa7ca0f8740d0",
"assets/packages/icon_icons/assets/social_media/fleche-vers-le-carre.png": "17106f6688698ee3e5261b0ffe796e38",
"assets/packages/icon_icons/assets/social_media/football.png": "406190d45e3522c4a899dddd6e47b0f6",
"assets/packages/icon_icons/assets/social_media/globe.png": "f9aff58f95e889fbceca14c9bdf05c33",
"assets/packages/icon_icons/assets/social_media/iceCream.png": "94cd346a7dea00e89c6e61c6c868614f",
"assets/packages/icon_icons/assets/social_media/idea.png": "0af85e9ebf1d94d2dc7d45759d7856eb",
"assets/packages/icon_icons/assets/social_media/image.png": "229ebfd86c42d80abdd2e945e66501fc",
"assets/packages/icon_icons/assets/social_media/impression(1).png": "5d586c56666e20a3f2cfbbd06579eeb8",
"assets/packages/icon_icons/assets/social_media/impression.png": "733b03dce3e6d02bdcc7bd82f6559332",
"assets/packages/icon_icons/assets/social_media/instagram.png": "e9b15b731eafbfc16355b811c81af450",
"assets/packages/icon_icons/assets/social_media/jouer.png": "5124a12003d6efcd806dccd35a110fe6",
"assets/packages/icon_icons/assets/social_media/line.png": "c238e914d9dd4f6411e8df02e6159cfa",
"assets/packages/icon_icons/assets/social_media/linkedin.png": "328d8521ce26b902fc81a93516c08330",
"assets/packages/icon_icons/assets/social_media/lollipop.png": "f4031de749d02eb5bb9cbc330b46851f",
"assets/packages/icon_icons/assets/social_media/love.png": "9847fd80ec9eea8d4d3e12159233bac6",
"assets/packages/icon_icons/assets/social_media/maison.png": "1e9308e312724d08193f30ee37a0582d",
"assets/packages/icon_icons/assets/social_media/mallette.png": "a3a5b7d591b37ea8736a51bb0647cc21",
"assets/packages/icon_icons/assets/social_media/marker.png": "4f944e76e863624fbdca97becfad3826",
"assets/packages/icon_icons/assets/social_media/marqueur(1).png": "9f660ef59f584b0b3bdc12e59a566cbc",
"assets/packages/icon_icons/assets/social_media/marqueur.png": "b0ba90acd4445af4e24e87ddc026982d",
"assets/packages/icon_icons/assets/social_media/moon.png": "7a50f46f2346138952f9410a2716fb7a",
"assets/packages/icon_icons/assets/social_media/mug-chaud-alt.png": "70cab012f675cf1ac3490d83664a85d6",
"assets/packages/icon_icons/assets/social_media/musique-alt.png": "6971d4b168587748d65b2324ffd22bc3",
"assets/packages/icon_icons/assets/social_media/oeil.png": "202974a3ca7d078c422e11ed60c4ad12",
"assets/packages/icon_icons/assets/social_media/office.png": "0ba163471f768c557082dde1da2b9e37",
"assets/packages/icon_icons/assets/social_media/open.png": "2a032af6ea206d072dbd6d2808b80998",
"assets/packages/icon_icons/assets/social_media/outlook.png": "25f2e81445fc5c98a3cecfbb13523655",
"assets/packages/icon_icons/assets/social_media/panier(1).png": "0b8a1fe9d1ba02cd03e7d6c4077c9fe7",
"assets/packages/icon_icons/assets/social_media/panier-ajouter.png": "6c4a42299d4264c156e4ca3825db469c",
"assets/packages/icon_icons/assets/social_media/panier.png": "2e6c0164bcd95157c8f8064e55945137",
"assets/packages/icon_icons/assets/social_media/party.png": "b45a1f5a8c49e0a6a784b65a1507f050",
"assets/packages/icon_icons/assets/social_media/pencil.png": "47fcf7249e1a685ff9345ae3064002ac",
"assets/packages/icon_icons/assets/social_media/pizza.png": "c270047e9deeb24b6a91dd99832367b4",
"assets/packages/icon_icons/assets/social_media/poubelle.png": "7b26b995aaeae2cb27e827590346f95b",
"assets/packages/icon_icons/assets/social_media/powerpoint.png": "f228cca7e17151421baa1cd1b49654e4",
"assets/packages/icon_icons/assets/social_media/printYellow.png": "c0dd8fa2f628dfcc18ea8d3f9f81ca2b",
"assets/packages/icon_icons/assets/social_media/raindrop.png": "1d96fc052cb93e5d66410f2eaa05e7f2",
"assets/packages/icon_icons/assets/social_media/reglages.png": "c79f8dee3d202f8911e7e8fafe5f8263",
"assets/packages/icon_icons/assets/social_media/robot.png": "b9f62d1ce1f6424cdb6c84441af0cbda",
"assets/packages/icon_icons/assets/social_media/school.png": "a2ecc085b4c5b9c2bb68599af2f4e3cb",
"assets/packages/icon_icons/assets/social_media/search.png": "af507287b7244f476c5e79ed1e305951",
"assets/packages/icon_icons/assets/social_media/signet.png": "7fbf6b77b580f5802702451959fbb71c",
"assets/packages/icon_icons/assets/social_media/slack.png": "b9634118631fc3fe7635a43321c0be44",
"assets/packages/icon_icons/assets/social_media/spotify.png": "4fc39dab289233f859bba4e754fa101c",
"assets/packages/icon_icons/assets/social_media/star.png": "0e2ad370e38e5fe13e068af5854d12cb",
"assets/packages/icon_icons/assets/social_media/summer.png": "006ae093369037b450e0d20e64cb03cd",
"assets/packages/icon_icons/assets/social_media/sushi.png": "38a061de9bca66424c3216bd33673595",
"assets/packages/icon_icons/assets/social_media/tacos.png": "dffa7226771da471408d7424e6981856",
"assets/packages/icon_icons/assets/social_media/teams.png": "34ba0f521fb7944207e768501f79bdfb",
"assets/packages/icon_icons/assets/social_media/telegram.png": "c5b5c4263ccacf44d467462c9d2c04fe",
"assets/packages/icon_icons/assets/social_media/tool.png": "8232935d85546d03eda6955172033737",
"assets/packages/icon_icons/assets/social_media/trophy.png": "51325b7895c7c9260be052695f2dfc69",
"assets/packages/icon_icons/assets/social_media/twitter.png": "207b03fc7db7bb96364f96d53cdd36a9",
"assets/packages/icon_icons/assets/social_media/utilisateur.png": "335bceb80dbb3ed0677e1056e286fc03",
"assets/packages/icon_icons/assets/social_media/viber.png": "eab238178ccc6a39b8886d57ca8a2ebe",
"assets/packages/icon_icons/assets/social_media/wallet.png": "a5f291dbc64b04570e55243e195ab017",
"assets/packages/icon_icons/assets/social_media/whatsapp.png": "099332d134c9702c7dbd26db31d0530b",
"assets/packages/icon_icons/assets/social_media/word.png": "50df1ed7be2e4020bbc009c9c0c517ca",
"assets/packages/icon_icons/assets/social_media/youtube.png": "c1b380706822205e84258a0d33a971de",
"assets/packages/icon_icons/assets/social_media/zoom.png": "12ecfd9deeb177cbceaa95274b0f1da9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "244083c12b850f223c98a384a5881086",
"/": "244083c12b850f223c98a384a5881086",
"main.dart.js": "55d509a3c176f72977899ac3898a1b70",
"manifest.json": "48f3627917214352803099d3b37f5f72",
"version.json": "50b682faf8094170be98ae8569e03ca2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
