/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/12/18/Vue2抽象语法树/ast1.png","a2db6552e8e8d1219538bb3c241ecdaa"],["/2023/12/18/Vue2抽象语法树/ast2.png","4f125f11778ca9ff812bab84660265da"],["/2023/12/18/Vue2抽象语法树/ast3.png","c78fe8c21a4a7b1d61d40391564fdead"],["/2023/12/18/Vue2抽象语法树/ast4.png","6b11b8f7d1deb38195d37341ec3a0c5c"],["/2023/12/18/Vue2抽象语法树/ast5.png","663ccc4d7674d62454b84342cc53f8ed"],["/2023/12/18/Vue2抽象语法树/ast6.png","195cd53825b372acb2df6a6822d06404"],["/2023/12/18/Vue2抽象语法树/ast7.png","bbe7b4b9f403ae0bb532a2e87156cef6"],["/2023/12/18/Vue2抽象语法树/ast8.png","09614f602aeb2e242122905d0d8890c1"],["/2023/12/18/Vue2抽象语法树/ast9.png","03d3d75589b77cf088b7325e998a0c7f"],["/2023/12/18/Vue2抽象语法树/attrs.png","8e3a2ac2ba02d778bb98d49b0689a992"],["/2023/12/18/Vue2抽象语法树/index.html","1ed7e60c5c03615ce00c1b331d3c973c"],["/2023/12/18/Vue2抽象语法树/parse.png","214553b898d44fe3792ce13231cab014"],["/2023/12/18/Vue2抽象语法树/parse2.png","a542c56b8a960c8f043ad0d3bb53e86a"],["/2023/12/18/Vue2抽象语法树/原理1.png","06c3dba61a7238c44a3ea694830c07fc"],["/2023/12/18/Vue2抽象语法树/原理2.png","ad6b0c8b267f06f7be727fd20c8edf6c"],["/2023/12/18/Vue2抽象语法树/原理3.png","cf907c5dbe4b656ee68f094b514233d3"],["/2023/12/18/Vue2抽象语法树/原理4.png","91ccb31ada93e31b20adb07ab3578562"],["/2023/12/18/Vue2抽象语法树/原理5.png","604d15cb56e1297b62f29d45a70a816d"],["/2023/12/18/Vue2指令与生命周期/attr.png","59053578165706a0b1acb35dd08c7b9d"],["/2023/12/18/Vue2指令与生命周期/attrs.png","4878c929c613d92afc61a21e01bed3df"],["/2023/12/18/Vue2指令与生命周期/compileText.png","b387779fe816ea742a36bed0d01569b4"],["/2023/12/18/Vue2指令与生命周期/dir.png","2e778776adcc7ed8ba7adbfac908560e"],["/2023/12/18/Vue2指令与生命周期/fragment.png","5c84ba75f600c95ac02c1676a026089b"],["/2023/12/18/Vue2指令与生命周期/index.html","f50ee8e82042eca6c4911732974a9d3f"],["/2023/12/18/Vue2指令与生命周期/input1.png","08a250c2d468a4a0588da1ef43021fe0"],["/2023/12/18/Vue2指令与生命周期/watch.gif","85565c63628ef6e90a17d1c4d7330ef9"],["/2023/12/18/Vue2指令与生命周期/watch.png","534b9b95fc08e89721ea1a9d9ad73ee5"],["/2023/12/18/Vue2指令与生命周期/ym.png","c38026103fbd7feec762542d06f23ece"],["/2023/12/18/Vue2数据响应式原理/array.png","c432eb1884396a9ed9f3edd8c67ad985"],["/2023/12/18/Vue2数据响应式原理/array2.png","d32e921ac648655c560ef1343b0d75f3"],["/2023/12/18/Vue2数据响应式原理/index.html","8ce09bfbaa67a86bfa3a7309e2ee1e1b"],["/2023/12/18/Vue2数据响应式原理/obj.png","da42496b3ed906135e40f267b3ddd98b"],["/2023/12/18/Vue2数据响应式原理/obj2.png","0afdfa49b3b38845275e53171fe36593"],["/2023/12/18/Vue2数据响应式原理/obj3.png","c7f6d5a00f88947d5d480d412dc4d410"],["/2023/12/18/Vue2数据响应式原理/obj4.png","f6d41458193fe70b60475cf874ce70f5"],["/2023/12/18/Vue2数据响应式原理/obj5.png","c6ea33a75c59c18c3c95a83092446915"],["/2023/12/18/Vue2数据响应式原理/obj6.png","53736d1cb2a5d1dce8f1c59e3a835950"],["/2023/12/18/Vue2数据响应式原理/observe.png","571bd77ecd8d6b253a3819ac5f5e1293"],["/2023/12/18/Vue2数据响应式原理/observe2.png","033ad16e0a62bd823a80418668bb3911"],["/2023/12/18/Vue2数据响应式原理/依赖收集.png","9262f780f3d4185891b0b53f1d805f38"],["/2023/12/18/Vue2数据响应式原理/数组.png","3823edc6e3574506f6fcc4b0076ce8a2"],["/2023/12/18/Vue2模板引擎/final.png","56d389a27a0aa572aa15aed5d0e4a624"],["/2023/12/18/Vue2模板引擎/index.html","878bcb307b5a72aa96e650df558695e7"],["/2023/12/18/Vue2模板引擎/join.png","401aeae92a563b44cb5c06b53845145d"],["/2023/12/18/Vue2模板引擎/lookup.png","29d1a4542b02f46650b550b000349ce0"],["/2023/12/18/Vue2模板引擎/mustache.png","050dde7ed429c694865a0b39da7c984c"],["/2023/12/18/Vue2模板引擎/mustache2.png","c893874bf78213ef9b19dc6a5ba23de2"],["/2023/12/18/Vue2模板引擎/mustache3.png","3552bacdb7071cb0cb4c2427ddf2d7e8"],["/2023/12/18/Vue2模板引擎/mustache4.png","cf5a37b867b1e71bb16a70273605b919"],["/2023/12/18/Vue2模板引擎/mustache5.png","6b3318050614dd596616ec12ccc66172"],["/2023/12/18/Vue2模板引擎/mustache6.png","0d5b4375ca3266d4901accec57c4c104"],["/2023/12/18/Vue2模板引擎/parseArray.png","92d23491b5919302f64dc5b514fcaa5e"],["/2023/12/18/Vue2模板引擎/renderTemplate1.png","734dcbe70b612954a015155e267eb6f2"],["/2023/12/18/Vue2模板引擎/scanner.png","981afd5ea547f40538f7308e0fe6f1a0"],["/2023/12/18/Vue2模板引擎/templateToTokens1.png","85d9ab31348dfa9576786bf72331064d"],["/2023/12/18/Vue2模板引擎/templateToTokens2.png","f5f8e8a2d92d2df3398e40aacf2eb186"],["/2023/12/18/Vue2模板引擎/嵌套1.png","aba93e48f01c98a3b2b34ded2ef3fa50"],["/2023/12/18/Vue2模板引擎/嵌套2.png","cdd3c72857462eb1260f7d19cbd2b2da"],["/2023/12/18/Vue2模板引擎/嵌套3.png","7583ee7bdc758684e9e8ecc0b32fd4cb"],["/2023/12/18/Vue2模板引擎/嵌套4.png","068f12cfdcf5ff7021b2e9d653e568ec"],["/2023/12/18/Vue2模板引擎/点语法.png","2cb5e978db50ed53f87180b8f9c55a05"],["/2023/12/18/Vue2模板引擎/点语法3.png","508b466795d158922506e22e5a949488"],["/2023/12/18/Vue2虚拟DOM和diff算法/diff.gif","a6ad2970d92f9345cf78b8316a2c1929"],["/2023/12/18/Vue2虚拟DOM和diff算法/diff.png","5bee0a73f87c86271354a7e162dee171"],["/2023/12/18/Vue2虚拟DOM和diff算法/diff2.gif","348fce8e3b5f1594b70ce2e9e31e6622"],["/2023/12/18/Vue2虚拟DOM和diff算法/diff2.png","2bb7208d7e5302589791956950cd7ad3"],["/2023/12/18/Vue2虚拟DOM和diff算法/diff3.gif","bf7dffae5e3e2732d49616959081a488"],["/2023/12/18/Vue2虚拟DOM和diff算法/diff3.png","4bb76ca6043e892c0d3825a727b0d665"],["/2023/12/18/Vue2虚拟DOM和diff算法/diff4.gif","8262f86aaad471e6907a9eef171aadfd"],["/2023/12/18/Vue2虚拟DOM和diff算法/diff4.png","cdcd33c221fe0c207582715fd99c148d"],["/2023/12/18/Vue2虚拟DOM和diff算法/diff5.gif","4cdfbbdbe02e9754d78646dd9aa99f09"],["/2023/12/18/Vue2虚拟DOM和diff算法/diff5.png","219380e642ed3d6701dcb57db06256a2"],["/2023/12/18/Vue2虚拟DOM和diff算法/diff6.gif","26a9eee06f42b1c7452cf8bbdee2d275"],["/2023/12/18/Vue2虚拟DOM和diff算法/diff7.gif","7706093c05cb52f4a776d65dd5b7e7c9"],["/2023/12/18/Vue2虚拟DOM和diff算法/diff8.gif","d893191d58f95027251adc3cfe938192"],["/2023/12/18/Vue2虚拟DOM和diff算法/h.png","3b97d7c4a28f7ff9805b41ad182fd8e6"],["/2023/12/18/Vue2虚拟DOM和diff算法/index.html","45b9a5778dd3bfb1d4041f1afd744749"],["/2023/12/18/Vue2虚拟DOM和diff算法/删除.gif","fe83ecbbc8fe3b7dbc3dd2475e26f7a9"],["/2023/12/18/Vue2虚拟DOM和diff算法/情况3.gif","f50d3c3d2e9add2cb284fc40f9760d32"],["/2023/12/18/Vue2虚拟DOM和diff算法/情况4.gif","3ac0e6c1353596d999360c7b47f21fbd"],["/2023/12/18/Vue2虚拟DOM和diff算法/新增.gif","5459c99a560cf434dd2877e14109326e"],["/2023/12/18/Vue2虚拟DOM和diff算法/虚拟dom.png","1b781096074efed11e35d3541f6f9974"],["/2023/12/18/Vue2虚拟DOM和diff算法/虚拟dom2.png","099976aab4099031cddef0b2dfa5f424"],["/2023/12/18/Vue2虚拟DOM和diff算法/虚拟dom3.png","4c253f7d7b2eaadcf8e820d83bfe80ae"],["/2023/12/18/Vue2虚拟DOM和diff算法/虚拟dom4.png","116d1f40f035b0bb58dee4ae5d10f1b6"],["/2024/03/23/useEffect/index.html","bc722e9df4986bebb13304b3be8a95a8"],["/2024/03/24/useRef/image.png","5c2a1ca4114bea9cca7fae1e0e86df1c"],["/2024/03/24/useRef/index.html","5dbd0e6cb65371bfef1865ed5ac9af4f"],["/2024/03/24/useState/index.html","97f043e3e428a6fd592e48d9de48d7c3"],["/2024/03/26/useMemo和useCallback/index.html","1f0254fff970c2ebef4a4c474a629464"],["/2024/03/26/设计模式浅谈/index.html","364259d12ed0bf22934dcc5f13798776"],["/2024/03/29/react-use源码阅读/image-1.png","2e2499cefeb758df333c96bf88a21455"],["/2024/03/29/react-use源码阅读/index.html","ef79861ee0064cadc9dbbec7193cdd68"],["/2024/03/29/useContext/index.html","fbf30c6f2baac468d92be3f8fa8f41a1"],["/2024/04/09/classnames源码阅读/index.html","43f25097e9f069ff333db4139b72a730"],["/2024/04/12/读JS红宝书/index.html","b8db334498608e0985511a0d1a8aa3f1"],["/2024/05/06/React-query/index.html","fc9333e16f69abd0878a162163c7e2ff"],["/2024/06/04/Prompt/image-1.png","aabf8f806d7610fa56bf7fe446736190"],["/2024/06/04/Prompt/image-10.png","c2f3701932c8a7133039b3bf8aa8e763"],["/2024/06/04/Prompt/image-11.png","486d89047caf5b071b11dea87370e2fd"],["/2024/06/04/Prompt/image-2.png","c6dc068933a449774d258047893f6664"],["/2024/06/04/Prompt/image-3.png","6195f6490aa3408f5665298bdd45b8bc"],["/2024/06/04/Prompt/image-4.png","ae952b1c0a4d1da45a8c72ff5d442680"],["/2024/06/04/Prompt/image-5.png","028d2fc039a383cbe3688d4e0f41cd12"],["/2024/06/04/Prompt/image-6.png","93cd496c5f3212e30bc4c99fc4b27468"],["/2024/06/04/Prompt/image-7.png","2edf57a79240eaa74e771848eca2abeb"],["/2024/06/04/Prompt/image-8.png","cf1f5cbc0784aa455edab016bae4d868"],["/2024/06/04/Prompt/image-9.png","781c1504b97280314c50f3fb76ddcf48"],["/2024/06/04/Prompt/image.png","501d050de9667998addb569266f4d890"],["/2024/06/04/Prompt/index.html","63ea344e51183867aa92bea6352fdd7e"],["/about/index.html","230cbf445742596d14dfad04916a861e"],["/archives/2023/12/index.html","bfe28454cba708693aaf1210455f854c"],["/archives/2023/index.html","b87ac2f1c14c8a32a8dcf49d085543aa"],["/archives/2024/03/index.html","dd8a7ca404cf70ef0ba73c2de18ae2b7"],["/archives/2024/04/index.html","56ed1aed285f3d91ce1b574071955af3"],["/archives/2024/05/index.html","b476fcdcbc89fc4f3e66e21bca7dcb42"],["/archives/2024/06/index.html","c5c60d63d67a93fc9cd356ad76d1f965"],["/archives/2024/index.html","f36838b73864b78b0e75ee3a48d86c58"],["/archives/2024/page/2/index.html","fe205443f7d81a5803358f1907affdf2"],["/archives/index.html","fe3a48724c8d1459914769bf3778d856"],["/archives/page/2/index.html","74a4e45f8bdb72199f59f75ffb6f62e7"],["/categories/index.html","e3b022cafca35ed883a4959492de46e9"],["/css/base/normalize.css","1e9c0f3b13da66012ea079bc1509fef2"],["/css/components/archive.css","6fb3a91cd27fb58d67c0c4b7e9b1ab77"],["/css/components/article.css","7f1dd83e473bb3378f072085c26613f1"],["/css/components/categories.css","92198f13dd72fb5bbe3d713b7907f4f5"],["/css/components/footer.css","8d6d69b83fd371ed8d8af8959938dcc6"],["/css/components/header.css","130dc48264cc1d0d04ecb6940b867f80"],["/css/components/icon.css","278490e940c6ca7331b1ff376c4624bf"],["/css/components/layout.css","9dcf8f97815a97e9a07e32634b8acda5"],["/css/components/pagination.css","16fd6e997fcbaa46c353f85b1a1a3a51"],["/css/components/responsive.css","c01fadac966c41719fbe5bded40854cd"],["/css/components/syntax.css","431732b4bba8ed34dc75ed0297471e9a"],["/css/components/tags.css","a321ec214c30b114519a04f4781fcdc3"],["/css/style.css","383cca7fb36e5df65fc6bbbdb5e393f1"],["/images/icon-heart.svg","8c26ba607a7768cffd34afe72980fde0"],["/index.html","adfd67d7bda33440aaf249456a66b546"],["/page/2/index.html","7c65c4da06f92f88156c66c238059aba"],["/sw-register.js","c1b94f1f173bdc10f7868ee5611d5075"],["/tags/JavaScript/index.html","6c74c8e84ff1518d5fd94c67713a3921"],["/tags/React-Hooks/index.html","8a333d472a1cad1f7dfdb3cc17108909"],["/tags/React/index.html","7e69ed211ab4f3845e46837b690c2993"],["/tags/Vue/index.html","23b6a715db3d9520627c6e0f41e334d5"],["/tags/Vue2/index.html","db442ee478c18d15c5b92ef983aa337f"],["/tags/prompt-大模型/index.html","567f52cdf285ffb904cd8d3536a1f2b2"],["/tags/工具库-CSS/index.html","96ee1281e4b6d31215c1d2150d0907f1"],["/tags/设计模式/index.html","add3aca92c197ac8ee15ea7606732c8f"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
