/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/03/11/浅尝React/image-10.png","ab07f0f8d399326e306595f18d59a50a"],["/2024/03/11/浅尝React/image-11.png","78bf2b4e66bad818b1f323bb6144f61a"],["/2024/03/11/浅尝React/image-12.png","6088d0011f4541c5320615bcc9c9e97f"],["/2024/03/11/浅尝React/image-13.png","49720db787aba54c906e841dc0c96cfb"],["/2024/03/11/浅尝React/image-14.png","019de5873c7972827d803bfd3d735edb"],["/2024/03/11/浅尝React/image-15.png","0ae0b61015f239ca1fb01d4df16a73fe"],["/2024/03/11/浅尝React/image-16.png","5b5ba64014c184b23b36fa70f2f57391"],["/2024/03/11/浅尝React/image-17.png","c1151f4f05457635d33ae07a705a3c98"],["/2024/03/11/浅尝React/image-19.png","7756a602b46cd075a06fd792984d6185"],["/2024/03/11/浅尝React/image-2.png","5c0b223062ba2bad402bd415132ed65e"],["/2024/03/11/浅尝React/image-3.png","ba16190bc4e3d64cce39a043a193e64f"],["/2024/03/11/浅尝React/image-4.png","c59a02ed0b0bcc9f5607a79fbab2c288"],["/2024/03/11/浅尝React/image-5.png","441d6a7af50e56f07f9dc527f4b04bed"],["/2024/03/11/浅尝React/image-6.png","5ac7f5b20e649fa964e309219190fc0d"],["/2024/03/11/浅尝React/image-7.png","62619317e76fcfae7380b8581fb62126"],["/2024/03/11/浅尝React/image-8.png","ce60e6ec294ef1321a8ba32be92bcbc5"],["/2024/03/11/浅尝React/image-9.png","2eff9e04b8170f6f1d71fa2b2153c742"],["/2024/03/11/浅尝React/image.png","63948556809b3c4237d881b7874088cb"],["/2024/03/11/浅尝React/index.html","93bb53a68c1718e21cfd067cb4343af6"],["/2024/03/23/useEffect/index.html","bc722e9df4986bebb13304b3be8a95a8"],["/2024/03/24/useRef/image.png","5c2a1ca4114bea9cca7fae1e0e86df1c"],["/2024/03/24/useRef/index.html","5dbd0e6cb65371bfef1865ed5ac9af4f"],["/2024/03/24/useState/index.html","97f043e3e428a6fd592e48d9de48d7c3"],["/2024/03/26/useMemo和useCallback/index.html","1f0254fff970c2ebef4a4c474a629464"],["/2024/03/26/设计模式浅谈/index.html","c5db920986976469d2c0a888059a665c"],["/about/index.html","50b0f88f2e5b5dc4be280332bf93b2fc"],["/archives/2024/03/index.html","42ce7bb6bc666ca5f3ba7f80e9b1b628"],["/archives/2024/index.html","7f39c00c9334059a6febaf55630dcb92"],["/archives/index.html","cb534f0c37041be1bd4572f0efa2950a"],["/categories/index.html","e3b022cafca35ed883a4959492de46e9"],["/css/base/normalize.css","1e9c0f3b13da66012ea079bc1509fef2"],["/css/components/archive.css","6fb3a91cd27fb58d67c0c4b7e9b1ab77"],["/css/components/article.css","7f1dd83e473bb3378f072085c26613f1"],["/css/components/categories.css","92198f13dd72fb5bbe3d713b7907f4f5"],["/css/components/footer.css","8d6d69b83fd371ed8d8af8959938dcc6"],["/css/components/header.css","130dc48264cc1d0d04ecb6940b867f80"],["/css/components/icon.css","278490e940c6ca7331b1ff376c4624bf"],["/css/components/layout.css","9dcf8f97815a97e9a07e32634b8acda5"],["/css/components/pagination.css","16fd6e997fcbaa46c353f85b1a1a3a51"],["/css/components/responsive.css","c01fadac966c41719fbe5bded40854cd"],["/css/components/syntax.css","431732b4bba8ed34dc75ed0297471e9a"],["/css/components/tags.css","a321ec214c30b114519a04f4781fcdc3"],["/css/style.css","383cca7fb36e5df65fc6bbbdb5e393f1"],["/images/icon-heart.svg","8c26ba607a7768cffd34afe72980fde0"],["/index.html","74f9fec17d5a48ef3589bf850d4f2768"],["/sw-register.js","3ca3ade64fe8d2a9204f914c1dec642b"],["/tags/React-Hooks/index.html","04fa99ee4940dd4efec2586b9a7b43fb"],["/tags/React/index.html","75b989627c20f1081361da9f56554969"],["/tags/设计模式/index.html","add3aca92c197ac8ee15ea7606732c8f"]];
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
