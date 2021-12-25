// ==UserScript==
// @name         My Booru Revamped
// @namespace    xenon
// @version      1.5.1
// @description  This adds a couple of changes to the layout and behaviour of the site
// @match        *://gelbooru.com/*
// @match        *://yande.re/*
// @match        *://danbooru.donmai.us/*
// @match        *://safebooru.org/*
// @match        *://konachan.com/*
// @match        *://konachan.net/*
// @match        *://rule34.paheal.net/*
// @match        *://rule34.xxx/*
// @require      http://code.jquery.com/jquery-3.5.1.min.js
// @icon         data:image/png;base64,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
// @copyright    2021, original author westerhold78, modifier xenon
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// ==/UserScript==

var jQuery = window.jQuery;
var style = [];
var newTabForDetailPage = true;
var zoomScale = 3.5;
var zoomDelay = 0.4
var imageTypes = ['.jpg', '.png', '.jpeg', '.gif'];
var thumbnailPreviewClass = 'post-preview';
var hostname = window.location.hostname;
let rule34pahealSelector = '#image-list .shm-thumb-link img';
function imageExists(url) {
    return new Promise((resolve, reject) => {
        var image = new Image();
        image.onload = () => { resolve(url); }
        image.onerror = () => { reject(url); }
        image.src = url;
    });
}

function replaceExtension(extensionIndex, url) {
    if (extensionIndex > -1) {
        url = url.substring(0, url.lastIndexOf('.')) + imageTypes[extensionIndex];
    }
    return url;
}

function loadImage(image, url, imageWidth = 0, { extensionIndex = -1, replaceArr = {} } = {}) {
    url = replaceExtension(extensionIndex, url);
    imageExists(url)
        .then((_url) => {
            setImage(image, _url, imageWidth);
        })
        .catch((_url) => {
            if (extensionIndex > -1) {
                var condition = extensionIndex < imageTypes.length - 1;
                extensionIndex = (condition) ? ++extensionIndex : 0;
                _url = replaceExtension(extensionIndex, _url);
                if (condition) {
                    loadImage(image, _url, imageWidth, { extensionIndex: extensionIndex, replaceArr: replaceArr });
                }
                else {
                    for (const [pattern, value] of Object.entries(replaceArr)) {
                        if (!_url.includes(value) || value == '') {
                            _url = _url
                                .replace(pattern, value);
                        }
                    }
                    loadImage(image, _url, imageWidth, { extensionIndex: extensionIndex, replaceArr: replaceArr });
                }
            }
        });
}

function setImage(image, _url, imageWidth) {
    image.src = _url;
    image.width = imageWidth;
    image.classList.add('loaded');
}

function loadPicture(picture, url, tab) {
    var source = undefined;
    var image = undefined;
    var imageWidth = undefined;
    
    // 对 danbooru 特判，它的网页结构改得比较频繁
    if (url.includes('donmai')) {
        url.replace('http:', 'https:')
        source = picture.children[0];
        image = picture.children[1];
        imageWidth = image.width;
    } else {
        source = picture.children[1];
        image = picture.children[2];
        imageWidth = image.innerWidth;
    }

    imageExists(url)
        .then((url) => {
            source.srcset = url;
            image.width = imageWidth;
            picture.classList.add('loaded');
        })
        .catch((url) => {
            if (tab != 'all_tried') {
                if (!url.startsWith('https://cdn') && !url.includes('data/sample')) {
                    url = url
                        .replace('/data/', '/data/sample/sample-');
                    console.log('try_sample', url)
                    loadPicture(picture, url, 'sample_tried');
                }
                if (tab == 'sample_tried') {
                    var name = url.split('sample-')[1];
                    name = name.split('.')[0];
                    url = 'https://cdn.donmai.us/original/' + name[0] + name[1] + '/' + name[2] + name[3] + '/' + name + '.png'
                    console.log('try_original_png')
                    console.log(url);
                    loadPicture(picture, url, 'original_tried_png');
                }
                if (tab == 'original_tried_png') {
                    url = url.replace('.png', '.jpg');
                    console.log('try_original_jpg')
                    console.log(url);
                    loadPicture(picture, url, 'all_tried');
                }
            }
        });
}

function urlParam(name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results === null) {
        return null;
    }
    else {
        return results[1] || 0;
    }
};





// If you need to use another JavaScript library alongside jQuery, return control of $ back to the other library with a call to $.noConflict(). Old references of $ are saved during jQuery initialization; noConflict() simply restores them.
jQuery.noConflict();
(function ($) {
    $(function () {
        // Code that uses jQuery's $ can follow here.
        'use strict';

        if (urlParam('s') == 'view') {
            var image = $('#image');
            var top = image.offset().top;
            var url = $(image).attr('src');
            if (url.includes('samples/')) {
                url = url.replace('samples', 'images')
                    .replace('sample_', '');
                loadImage(image, url);
            }
            window.scrollTo({ top: top, behavior: 'smooth' });
        }

        function mouseoverMain(image, imgCurrentTarget) {
            if (!$(image).hasClass("loaded")) {
                var imageInnerWidth = $(image).innerWidth();
                // remove tooltip
                $(image).attr('title', '');

                //replace url
                var patternFileExtension = /(\.[0-9a-z]+$)/i;
                var patternDomain = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?(.*\.)?(gelbooru\.com|yande\.re|donmai\.us|konachan\.com|konachan\.net)\/?(?:thumbnails)?(.*)/;
                var url = $(image).attr('src');
                switch (hostname) {
                    case 'yande.re': case 'konachan.com': case 'konachan.net':
                        url = url
                            .replace(patternDomain, 'https://$2$3/$4')
                            .replace('assets.', 'files.')
                            .replace(/data\/preview\/(.*)\/(.*)\//, 'sample/')
                            .replace(patternFileExtension, '/$1');
                        loadImage(image, url, imageInnerWidth, { extensionIndex: -1, replaceArr: { 'sample': 'image' } });
                        break;
                    case 'rule34.xxx': case 'safebooru.org':
                        url = url
                            .replace('thumbnails', 'samples')
                            .replace('thumbnail_', 'sample_');
                        loadImage(image, url, imageInnerWidth, { extensionIndex: 0, replaceArr: { 'samples': 'images', 'sample_': '' } });
                        break;
                    case 'rule34.paheal.net':
                        url = url
                            .replace('_thumbs', '_images');
                        loadImage(image, url, imageInnerWidth);
                        break;
                    case 'gelbooru.com':
                        url = url
                            .replace(patternDomain, 'https://$2gelbooru.com/samples/$4')
                            .replace('thumbnail_', 'sample_');
                        loadImage(image, url, imageInnerWidth, { extensionIndex: 0, replaceArr: { 'samples': 'images', 'sample_': '' } });
                        break;
                    case 'danbooru.donmai.us':
                        var picture = imgCurrentTarget.parentNode;
                        if (!picture.classList.contains('loaded')) {
                            // 这一部分的 url 替换规则会随 danbooru 的页面变更而修改
                            url = picture.children[1].src
                                .replace(patternDomain, 'https://danbooru.donmai.us/data/$4')
                                .replace(/360x360|720x720/, 'sample')
                                .replace(/sample\/(.*)\/(.*)\/(.*)/, 'sample/$1/$2/sample-$3');
                            loadPicture(picture, url, false);
                        }
                        break;
                }
            }
        }

        //Replace thumbnails
        $(`.${thumbnailPreviewClass} img, #post-list-posts img, #post-list .content img, #posts-container article picture, ${rule34pahealSelector}`).mouseover(function (event) {
            var image = event.target;
            mouseoverMain(image, event.currentTarget);
        });


        // Open detail page in new tab
        if (newTabForDetailPage) {
            $(`.${thumbnailPreviewClass} a, #post-list-posts li .thumb, #post-list .content .thumb a, #posts-container article a`).on('click', function (e) {
                e.preventDefault();
                var url = $(this).attr('href');
                window.open(url, '_blank');
            });
        }

        // Open image on details page in new tab
        $('#image .has-cropped-true').click(function () {
            if ($(this)[0].src.includes('donmai')) {
                window.open($(this)[0].parentNode.parentNode.href, '_blank');
            } else {
                window.open($(this)[0].src, '_self');
            }
        });
        $('#image').click(function () {
            window.open($(this)[0].src, '_self');
        });

        // 2021.9.4, [add] 打开页面后自动替换高清预览图
        // 但是比较吃资源，而且好像没必要，暂时不开启
        //window.onload = function(){
        //$(`.${thumbnailPreviewClass} img, #post-list-posts img, #post-list .content img, #posts-container article picture, ${rule34pahealSelector}`).each(function(index, element){
        //        console.log(1, element)
        //        var image = $(element).children(".has-cropped-true")[0];
        //        mouseoverMain(image, element);
        //    })
        //}
    });
})(jQuery);




style.push(
    `.${thumbnailPreviewClass} img:hover, #post-list .content .thumb img:hover, #posts img:hover, ${rule34pahealSelector}:hover { transform: scale(${zoomScale}); -moz-transform: scale(${zoomScale}); -webkit-transform: scale(${zoomScale}); transition-delay: ${zoomDelay}s; transition-property: transform;  position:relative; z-index: 999;}`,
    `#post-list-posts .inner, article.post-preview { position: inherit; overflow: visible !important;}`,
    `img#image { object-fit: contain; cursor: pointer; width: unset !important; max-width: 100%; max-height: 90vh;}`
);

GM_addStyle(style.join("\n"));