"use strict";var precacheConfig=[["/index.html","44e8559c907c201aeefaf25de756920d"],["/static/css/main.b5e0c2bc.css","e25e8f3356bc96b9a4546c8a68494848"],["/static/js/main.049f7667.js","444bad6000c21173824f220f3e8d7b54"],["/static/media/aceeditor.6b90aa33.png","6b90aa33171a923892823dbacfbd3d65"],["/static/media/angular.8d9f4c0a.jpg","8d9f4c0a0387041103c6471ec1f9f3e7"],["/static/media/atom.3cae691f.png","3cae691fa8d9710902bf30773de142f4"],["/static/media/aws.ee8014a5.png","ee8014a56aa5676ef65ccc7a99f16a78"],["/static/media/bootstrap.73844123.png","7384412324c769e447d3c4f86e9ff068"],["/static/media/chai.9e5e82dc.png","9e5e82dc7bf92d2d3fee3e5a6465cb4c"],["/static/media/css.3d1f67c1.png","3d1f67c146ac59daa32822f3d831be3e"],["/static/media/eclipse.f17909e7.png","f17909e7492f0d631c35f47c332eb6be"],["/static/media/eloquent.e9591044.jpg","e959104461a8163e64d77c6c2fdc10cc"],["/static/media/expressjs.b314e8bd.png","b314e8bd9ab14c4305346be72c0b9256"],["/static/media/fastlogo.762bcb96.png","762bcb96c4634233833078b931301f58"],["/static/media/friendly.4bead115.png","4bead115767285e9d2ada68af944a1e2"],["/static/media/github.5d979246.png","5d97924619cdb187adbcbe6e8e40233f"],["/static/media/github.8d073ac5.png","8d073ac5b1e5c5e25317f26ce2c7bcba"],["/static/media/grunt.5148f30c.png","5148f30cc4f457944aaa384b8532a479"],["/static/media/gulp.742a8b79.png","742a8b7911263d69f80291cf9b377175"],["/static/media/html.454a400c.png","454a400ca987d4271e54045982ea3876"],["/static/media/java.23967111.png","23967111dfca5f42e0049f9624a6878f"],["/static/media/javaee.2ada686c.png","2ada686cf6353f864253dcc335d00a6c"],["/static/media/jest.65e55ff5.png","65e55ff5070d693b8f974fa7928084bd"],["/static/media/jquery.c583de2d.png","c583de2d08c95f9123d0a75e5fcaeabd"],["/static/media/karma.5d9da521.png","5d9da521a49e92a86d79e07793ea87a4"],["/static/media/linkedin.a330e248.png","a330e248626552a23af35e5c46526234"],["/static/media/logo.be072032.png","be0720327d325d7f1e38ab7168a84fb6"],["/static/media/mocha.38ef4749.png","38ef4749390986748845df108f0138fe"],["/static/media/mongodb.3851cc04.png","3851cc047b9284b97c521cc1a7d8a512"],["/static/media/mysql.269ff813.png","269ff81336bdcd2a263973ddb50ae98f"],["/static/media/nodejs.5b47d4f8.png","5b47d4f8d197911857e8e77cb4dd1569"],["/static/media/oracle.e50bc397.png","e50bc3970892c40dda7b1c904128ea04"],["/static/media/perfect_sign.f901b597.png","f901b59718e67e50628ad4613c92c6a5"],["/static/media/profile.a7c71246.png","a7c71246779775331fffa3f220501057"],["/static/media/react.e331bba3.png","e331bba3f9548f7417072f699b471d33"],["/static/media/react.f3d95f8f.jpg","f3d95f8f83c8cb61b710442d80e60243"],["/static/media/redis.b4f962b5.png","b4f962b5489444e384094d37d24fe22c"],["/static/media/sailsjs.e14f40e8.png","e14f40e81579cef150f662849f2b7def"],["/static/media/sass.74c36290.png","74c362907475d0d7f0d59d0fb662135c"],["/static/media/scrum.dfaaa4a2.png","dfaaa4a2623ccbc24684f3ca19645076"],["/static/media/sign.5d6aa700.png","5d6aa70015ec6f87ce69dac8653831f6"],["/static/media/slack.734b09a1.png","734b09a17faf0a72e78a2c523da0079b"],["/static/media/socket.9c1d6d2a.png","9c1d6d2a98c29343078283433f2c2969"],["/static/media/spring.3cfa86bc.png","3cfa86bc436f822b90920a890779ef11"],["/static/media/team.e28add7c.png","e28add7ce172ba3455877d1e4305e36c"],["/static/media/travis.20feeadb.png","20feeadb48fc2492ba741d89cb5a5c8a"],["/static/media/trello.b28884b7.png","b28884b7f06eafbb86f67cb6d83bc7a5"],["/static/media/twitter.87dfb9b3.png","87dfb9b35a216fdbe30306076d53a70e"],["/static/media/vscode.0261db2f.png","0261db2fe867bd10fa2491abb95bbae0"],["/static/media/vuejs.af372e9d.png","af372e9d3c9a25f6a520fd287fc09f71"],["/static/media/webpack.53980775.png","5398077532c81103e8c48b9d38886e25"],["/static/media/webstorm.ab599481.png","ab59948138576cd465ae306263a8ef31"],["/static/media/work.783e2fbf.png","783e2fbf1066644647e00a538c448abb"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});