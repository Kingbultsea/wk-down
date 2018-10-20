export default class wjhTool {
    constructor(){

    }

    promiseForBoolean(obj = {}){
        let interval, promise, save = {}
        Object.assign(save, obj)
        const func = (resolve)=>{
            if(obj.boolean === !save.boolean){
                clearInterval(interval)
                resolve()
            }
        }
        promise = new Promise((resolve,reject)=>{
            interval = setInterval(func.bind(null,resolve), 1000)
        })
        return promise
    }

    getAPIData(url, obj = {}, callback, arguments = {}){
        const api = new new XMLHttpRequest()
        let paramsString  = ''

        api.open('GET', url)

        api.onreadystatechange = function(){
            if(this.readyState === 4 && this.status === 200){
                if(callback) callback()
            }
        }

        api.setRequestHeader('Content-Type', 'application/json')

        for(let {val, key} of arguments){
            paramsString += key + '=' + val + '&'
        }

        paramsString.replace(/&$/, '')


        api.send()

    }

    randomNum(minNum,maxNum){
        switch(arguments.length){
            case 1:
                return parseInt(Math.random()*minNum+1,10);
                break;
            case 2:
                return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
                break;
            default:
                return 0;
                break;
        }
    }



}