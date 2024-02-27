"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//返回整数
function Int(num) {
    return Math.floor(num);
}
//指定范围随机数
function randomInt(start, end) {
    return Int(Math.random() * end + start);
}
var context = {
    CBlank: {
        f: function (str) {
            return str.replace(/^\s*/, '');
        },
        b: function (str) {
            return str.replace(/\s*$/, '');
        },
        default: function (str) {
            return str.trim();
        }
    }
};
function CBlank(str, mode) {
    mode = mode || "default";
    return context.CBlank[mode](str);
}
var formatNumber = function (n) {
    var s = n.toString();
    return s[1] ? s : '0' + s;
};
var DateTools = /** @class */ (function () {
    function DateTools(date) {
        this.date = date;
        this.dateStr = this.formatTime(date);
        this.dayCN = ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期天"][date.getDay()];
    }
    DateTools.prototype.formatTime = function (date) {
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        return ([year, month, day].map(formatNumber).join('-') +
            ' ' + [hour, minute, second].map(formatNumber).join(':'));
    };
    DateTools.prototype.isLate = function (targetStr) {
        targetStr = targetStr.toLocaleString();
    };
    return DateTools;
}());
exports.default = {
    DateTools: DateTools,
    randomInt: randomInt,
    CBlank: CBlank,
};
