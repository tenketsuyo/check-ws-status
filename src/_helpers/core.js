export const core = {
    NULL_N: '-2147483648',

    getUrlParams: function () {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    },

    getUrlParam: function (name) {
        return core.getUrlParams()[name];
    },


    isEmpty: function (str) {
        return (typeof str === 'undefined' || str === null || 0 === str.length);
    },


    isBlank: function (str) {
        return (typeof str === 'undefined' || str === null || 0 === str.trim().length);
    },


    isNullNumber: function (n) {
        return (n + '') === NULL_N;
    },


    percentage: function (n1, n2) {
        return Math.floor((n1 / n2) * 100);
    },


    appendHtml: function (appendElementName, html) {
        $('#' + appendElementName).append(html);
    },


    scrollToEl: function (scrollElementName) {
        setTimeout(function () {
            document.getElementById(scrollElementName).scrollIntoView();
        }, 500);
    },

    appendHtmlAndScroll: function (appendElementName, html, scrollElementName) {
        core.appendHtml(appendElementName, html);
        core.scrollTo(scrollElementName);
    },

    getAhtml: function (text, referenceId, refClass, href, onclick) {
        if (!href) {
            href = '#';
        }
        if (!referenceId) {
            referenceId = '';
        }
        if (!refClass) {
            refClass = '';
        }
        if (!onclick) {
            onclick = '';
        }
        return "<a href='" + href + "' id='" + referenceId + "' class='" + refClass + "' onclick='" + onclick + "'>" + text + "</a>";
    },

    isNumeric: function (num) {
        return !isNaN(num)
    },

    getUndefined: function () {
        return window.js_is_bad;
    },

    clearAndRefillArray: function (arr, val) {
        if (arr.length > 0) {
            arr.splice(0, arr.length);
        }
        for (var i = 0; i < val.length; i++) {
            arr.push(val[i]);
        }
    },

    setItemAtIndexArray: function (arr, val, index) {
        if (arr.length - 1 < index) {
            for (var i = arr.length - 1; i < index; i++) {
                arr[i] = null;
            }
        }
        arr[index] = val;
    },

    exist: function (data) {
        return (typeof data !== 'undefined');
    },

    ex: function (data) {
        return core.exist(data);
    },

    existNotNull: function (data) {
        return (typeof data !== 'undefined' && data !== null);
    },

    exNull: function (data) {
        return core.existNotNull(data);
    },

    def: function (val, defaultValue) {
        if (!core.exist(defaultValue)) {
            defaultValue = null;
        }

        if (core.exist(val)) {
            return val;
        } else {
            return defaultValue;
        }
    },
};