export default class wjhTool {
  static promiseForBoolean (obj = {}) {
    let interval; let promise; let save = {}
    Object.assign(save, obj)
    const func = (resolve) => {
      if (obj.boolean === !save.boolean) {
        clearInterval(interval)
        resolve()
      }
    }
    promise = new Promise((resolve, reject) => {
      interval = setInterval(func.bind(null, resolve), 1000)
    })
    return promise
  }

  static getAPIData (url, obj = {}, callback, arg = {}) {
    const api = new new XMLHttpRequest()
    let paramsString = ''

    api.open('GET', url)

    api.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        if (callback) callback()
      }
    }

    api.setRequestHeader('Content-Type', 'application/json')

    for (let { val, key } of arg) {
      paramsString += key + '=' + val + '&'
    }

    paramsString.replace(/&$/, '')

    api.send()
  }

  static randomNum (minNum, maxNum) {
    switch (arguments.length) {
      case 1:
        return parseInt(Math.random() * minNum + 1, 10)
      case 2:
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
      default:
        return 0
    }
  }

  static musicCount (value) {
    var secondTime = parseInt(value)// 秒
    var minuteTime = 0// 分
    var hourTime = 0// 小时
    if (secondTime > 60) { // 如果秒数大于60，将秒数转换成整数
      // 获取分钟，除以60取整数，得到整数分钟
      minuteTime = parseInt(secondTime / 60)
      // 获取秒数，秒数取佘，得到整数秒数
      secondTime = parseInt(secondTime % 60)
      // 如果分钟大于60，将分钟转换成小时
      if (minuteTime > 60) {
        // 获取小时，获取分钟除以60，得到整数小时
        hourTime = parseInt(minuteTime / 60)
        // 获取小时后取佘的分，获取分钟除以60取佘的分
        minuteTime = parseInt(minuteTime % 60)
      }
    }
    let mark = ''
    if (parseInt(secondTime) < 10) {
      mark = '0'
    }
    var result = mark + parseInt(secondTime) + ' '

    let mark2 = '0'

    result = mark2 + parseInt(minuteTime) + ' : ' + result

    if (hourTime > 0) {
      result = '' + parseInt(hourTime) + '小时' + result
    }
    return result
  }

  static dateFormat (date, format) { // yy:mm:ss //这样都行 yyyy年mmmm分sss秒
    if (!format || typeof format !== 'string') {
      console.error('format is undefiend or type is Error')
      return ''
    }

    date = date instanceof Date ? date : (typeof date === 'number' || typeof date === 'string') ? new Date(date) : new Date()

    // 解析
    let formatReg = {
      'y+': date.getFullYear(),
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    }
    for (let reg in formatReg) {
      if (new RegExp(reg).test(format)) {
        let match = RegExp.lastMatch // 上一次的匹配到的字符串
        format = format.replace(match, formatReg[reg].toString()) // formatReg[reg]< 10 ? '0'+formatReg[reg]:  这段代码不知道有什么作用 暂时删除
      }
    }
    return format
  }
}
