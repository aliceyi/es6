class Timer{
    countdown(end, update, handel){
        const now = new Date().getTime();
        const self = this;
        if(now - end > 0) {
            handel.call(self)
        }else {
            let last_time = end - now
            let px_d = 1000 * 60 * 60 * 24
            let px_h = 1000 * 60 * 60
            let px_m = 1000 * 60
            let px_s = 1000 
            let day = Math.floor (last_time / px_d)
            let hour = Math.floor((last_time - px_d * day) / px_h)
            let min = Math.floor ((last_time -  px_d * day - px_h * hour) / px_m)
            let s = Math.floor((last_time -  px_d * day - px_h * hour - px_m * min) / px_s)
            let arry = []
            if( day > 0 ){
                arry.push(`<em>${day} 天</em>`)
            }  
            if( arry.length > 0 || hour > 0) {
                arry.push(`<em>${hour} 时</em>`)
            }
            if( arry.length > 0 || min > 0) {
                arry.push(`<em>${min} 分</em>`)
            }
            if( arry.length > 0 || s > 0) {
                arry.push(`<em>${s} 秒</em>`)
            }
            self.last_time = arry.join('')
            update.call(self,arry.join(''))
            setTimeout(() => {
                self.countdown(end, update, handel)
            } , 1000)
        }
    }
}
export default Timer