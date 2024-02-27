//返回整数
function Int(num: number) {
    return Math.floor(num)
}
//指定范围随机数
function randomInt(start: number, end: number): number {
    return Int(Math.random() * end + start)

}
let context = {

    CBlank: {
        f(str: string) {
            return str.replace(/^\s*/, '')
        },
        b(str: string) {
            return str.replace(/\s*$/, '')
        },
        default(str: string) {
            return str.trim()
        }
    }



}
function CBlank(str: string, mode?: "f" | "b" | "default"): string {

    mode = mode || "default"
    return context.CBlank[mode](str)

}




const formatNumber = (n: number) => {
    const s = n.toString()
    return s[1] ? s : '0' + s
}


class DateTools {
    date: Date
    dateStr: string
    dayCN: string
    constructor(date: Date) {
        this.date = date
        this.dateStr = this.formatTime(date)
        this.dayCN = ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期天"][date.getDay()]
    }

    formatTime(date: Date) {
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDate()
        const hour = date.getHours()
        const minute = date.getMinutes()
        const second = date.getSeconds()

        return (
            [year, month, day].map(formatNumber).join('-') +
            ' ' + [hour, minute, second].map(formatNumber).join(':')
        )
    }
    isLate(targetStr: string | Date) {

        targetStr = targetStr.toLocaleString()




    }
}
export default {
    DateTools,
    randomInt,
    CBlank,
}