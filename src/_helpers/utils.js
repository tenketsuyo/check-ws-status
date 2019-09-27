import {core} from '../_helpers';

export const utils = {

    months: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'],
    months2: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
    weekDay: ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
    whiteC: '#FFFFFF',
    blueC: '#0000ff',
    blackC: '#000000',
    greenC: '#047c04',
    errC: '#ff0000',
    warningC: '#e6b800',
    nullStrValue: '-2147483648',
    millisInDay: 86400000,
    defaultDateFormat: 'dd.MM.yyyy, HH:mm:ss',
    defaultDateFormatNoSeconds: 'dd.MM.yyyy, HH:mm',
    defaultDateFormatNoSecondsYY: 'dd.MM.yy, HH:mm',
    dateFormatHoursMinutes: 'HH:mm',
    dateFormatNoTime: 'dd.MM.yyyy',

    wrapSearchText: function (text) {
        if (!core.isEmpty(text)) {
            return '%' + text + '%';
        } else {
            return text;
        }
    },


    appendStr: function (str1, str2, defval) {
        if (typeof  defval === 'undefined') {
            defval = 'не определено';
        }
        var result = str1;
        if (typeof str2 === 'undefined') {
            str2 = defval;
        }
        result = str1 + str2;

        return result;
    },

    appendStrNoDefaultBreak: function (str1, str2) {
        if (typeof  str2 === 'undefined') {
            return;
        }
        var result = str1;
        result = str1 + str2;
        result = result + '<br />';

        return result;
    },

    appendStrBreak: function (str1, str2) {
        if (typeof  str2 === 'undefined') {
            return;
        }
        var result = str1;
        if (!core.isEmpty(result)) {
            result = result + '<br />';
        }
        result = result + str2;

        return result;
    },

    bald: function (text) {
        if ((text + '') === utils.nullStrValue) {
            return null;
        }
        if (!core.isEmpty(text)) {
            return '<b>' + text + '</b>';
        } else {
            return text;
        }
    },

    styledString: function (text, style) {
        if ((text + '') === utils.nullStrValue) {
            return null;
        }
        if (!core.isEmpty(text)) {
            return '<span style="' + style + '">' + text + '</span>';
        } else {
            return text;
        }
    },


    getBeautifulDateTime: function (dt, needDay) {
        var beatifulDateStr = '';

        if (dt) {
            var day;
            if (dt.getDay() === 0) {
                day = 7;
            } else {
                day = dt.getDay();
            }
            if (needDay) {
                beatifulDateStr = utils.weekDay[day - 1] + ', ';
            }
            beatifulDateStr = beatifulDateStr + dt.getDate() + ' ' +
                utils.months2[dt.getMonth()] + ' ' +
                (dt.getFullYear() < 10 ? '0' : '') + dt.getFullYear() + ', ' +
                (dt.getHours() < 10 ? '0' : '') + dt.getHours() + ':' +
                (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes() + ':' +
                (dt.getSeconds() < 10 ? '0' : '') + dt.getSeconds();
        }
        return beatifulDateStr;
    },


    getBeautifulDateTimeMillisShort: function (millis) {
        if (millis) {
            var dt = new Date(millis);
            return utils.getBeautifulDateTimeShort(dt);
        }
        else return '';
    },


    getShortMonth: function (dt) {
        var shortMonth = '';

        if (dt) {
            if (dt.getMonth() + 1 < 10) {
                shortMonth = shortMonth + '0';
            }
            shortMonth = shortMonth + (dt.getMonth() + 1);
        }
        return shortMonth;
    },


    getBeautifulDateTimeShort: function (dt, format) {
        var beatifulDateStr = '';

        if (!format) {
            format = utils.defaultDateFormat;
        }

        if (dt) {
            if (format === utils.defaultDateFormat) {
                var day;
                if (dt.getDay() === 0) {
                    day = 7;
                } else {
                    day = dt.getDay();
                }
                beatifulDateStr = beatifulDateStr + dt.getDate() + '.' +
                    utils.getShortMonth(dt) + '.' +
                    (dt.getFullYear() < 10 ? '0' : '') + dt.getFullYear() + ', ' +
                    (dt.getHours() < 10 ? '0' : '') + dt.getHours() + ':' +
                    (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes() + ':' +
                    (dt.getSeconds() < 10 ? '0' : '') + dt.getSeconds();
            } else if (format === utils.defaultDateFormatNoSeconds) {
                var day;
                if (dt.getDay() === 0) {
                    day = 7;
                } else {
                    day = dt.getDay();
                }
                beatifulDateStr = beatifulDateStr + dt.getDate() + '.' +
                    utils.getShortMonth(dt) + '.' +
                    (dt.getFullYear() < 10 ? '0' : '') + dt.getFullYear() + ', ' +
                    (dt.getHours() < 10 ? '0' : '') + dt.getHours() + ':' +
                    (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes();
            }
        }
        return beatifulDateStr;
    },


    getFormattedDateTime: function (dt, format) {
        var beatifulDateStr = '';
        if (!core.existNotNull(dt)
            || dt === '') {
            return '';
        }
        if (!(dt instanceof Date)) {
            dt = new Date(dt);
        }

        if (!format) {
            format = utils.defaultDateFormat;
        }

        if (format === utils.defaultDateFormat) {
            var day;
            if (dt.getDay() === 0) {
                day = 7;
            } else {
                day = dt.getDay();
            }
            beatifulDateStr = beatifulDateStr + dt.getDate() + '.' +
                utils.getShortMonth(dt) + '.' +
                (dt.getFullYear() < 10 ? '0' : '') + dt.getFullYear() + ', ' +
                (dt.getHours() < 10 ? '0' : '') + dt.getHours() + ':' +
                (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes() + ':' +
                (dt.getSeconds() < 10 ? '0' : '') + dt.getSeconds();
        } else if (format === utils.defaultDateFormatNoSeconds) {
            var day;
            if (dt.getDay() === 0) {
                day = 7;
            } else {
                day = dt.getDay();
            }
            beatifulDateStr = beatifulDateStr + dt.getDate() + '.' +
                utils.getShortMonth(dt) + '.' +
                (dt.getFullYear() < 10 ? '0' : '') + dt.getFullYear() + ', ' +
                (dt.getHours() < 10 ? '0' : '') + dt.getHours() + ':' +
                (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes();
        } else if (format === utils.dateFormatHoursMinutes) {
            beatifulDateStr =
                (dt.getHours() < 10 ? '0' : '') + dt.getHours() + ':' +
                (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes();
        }
        else if (format === utils.defaultDateFormatNoSecondsYY) {
            var day;
            if (dt.getDay() === 0) {
                day = 7;
            } else {
                day = dt.getDay();
            }
            beatifulDateStr = beatifulDateStr + dt.getDate() + '.' +
                utils.getShortMonth(dt) + '.' +
                (dt.getFullYear().toString().substr(-2) < 10 ? '0' : '') + dt.getFullYear().toString().substr(-2) + ', ' +
                (dt.getHours() < 10 ? '0' : '') + dt.getHours() + ':' +
                (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes();
        } else if (format === utils.dateFormatNoTime) {
            var day;
            if (dt.getDay() === 0) {
                day = 7;
            } else {
                day = dt.getDay();
            }
            beatifulDateStr = beatifulDateStr + dt.getDate() + '.' +
                utils.getShortMonth(dt) + '.' +
                (dt.getFullYear() < 10 ? '0' : '') + dt.getFullYear();
        }
        return beatifulDateStr;
    },


    getBeautifulDateTimeMillis: function (millis) {
        if (millis) {
            var dt = new Date(millis);
            return utils.getBeautifulDateTime(dt, true);
        }
        else return '';
    },


    getBeatifulDaysTime: function (millis) {
        if (millis) {
            var cd = 24 * 60 * 60 * 1000,
                ch = 60 * 60 * 1000,
                d = Math.floor(millis / cd),
                h = Math.floor((millis - d * cd) / ch),
                m = Math.round((millis - d * cd - h * ch) / 60000),
                pad = function (n) {
                    return n < 10 ? '0' + n : n;
                };
            if (m === 60) {
                h++;
                m = 0;
            }
            if (h === 24) {
                d++;
                h = 0;
            }
            return [d, pad(h), pad(m)].join(':');
        }
        else return '';
    },


    getBeatifulDaysDays: function (days) {
        var millis = days * utils.millisInDay;
        return utils.getBeatifulDaysTime(millis);
    },


    getBeautifulDateTimeMillisNoDay: function (millis) {
        if (millis) {
            var dt = new Date(millis);
            return utils.getBeautifulDateTime(dt, false);
        }
        else return '';
    },


    dateEquals: function (dt1, dt2) {
        if (!dt1 && !dt2) {
            return true;
        }
        if (
            (dt1 && !dt2)
            || (!dt1 && dt2)
        ) {
            return false;
        }
        return dt1.getTime() === dt2.getTime();
    },


    differByScod: function (list1, list2) {
        var difList = [];

        list2.forEach(function (item2) {
            var presentInList1 = false;
            if (item2.scod) {
                list1.forEach(function (item1) {
                    if (item1.scod == item2.scod) {
                        presentInList1 = true;
                        return false;
                    }
                });
            }
            if (!presentInList1) {
                difList.push(item2);
            }
        });

        return difList;
    },


    hexToRgb: function (hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    },


    getNewDateNoTime: function () {
        var dt = new Date();

        dt.setHours(0);
        dt.setMinutes(0);
        dt.setSeconds(0);
        dt.setMilliseconds(0);

        return dt;
    },


    getValuesFromObj: function (obj) {
        var values = [];
        for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                var val = obj[key];
                values.push(val);
            }
        }
        return values;
    },


    addLeadingZero: function (text) {
        if (!(typeof text == 'undefined') && ((text + '').length === 1)) {
            text = '0' + text;
        }
        return text;
    },


    getTextConcatDelim: function (arr, delim) {
        if (typeof arr == 'undefined'
            || arr === null) {
            return null;
        }
        var text = "";

        for (var i = 0; i < arr.length; i++) {
            if (typeof arr[i] == 'undefined'
                || arr[i] === null) {
                continue;
            }
            if (!core.isBlank(text)) {
                text = text + delim;
            }
            text = text + arr[i];
        }

        return text;
    },


    getParsedIntRow: function (row, index) {
        if (typeof row == 'undefined'
            || row === null
            || row.length <= index) {
            return core.NULL_N;
        }
        return parseInt(row[index]);
    },

    getParsedStringRow: function (row, index) {
        if (typeof row == 'undefined'
            || row === null
            || row.length <= index) {
            return null;
        }
        return row[index];
    },

    getDtAddDay2Date: function (date, add) {
        var newDate = new Date(date.getTime());
        newDate.setDate(newDate.getDate() + add);
        return newDate;
    },

};