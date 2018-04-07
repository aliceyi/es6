 import $ from 'jquery'

 class Interface {
     /**
      * 获取遗漏数据
      * @param {string} issue [当前都期数] 
      */
     getOmit(issue) {
        let self = this;
        return new Promise((resolve, reject) => {
            $.ajax({
                url: '/get/omit',
                data: {
                    issue: issue
                },
                dataType: 'json',
                success: function(res) {
                    self.setOmit(res.data)
                    resolve.call(self, res)
                },
                error: function(err) {
                    reject.call(err)
                }
            })
        })
     }
     /**
      * 获取开奖时间
      * @param {string} issue 
      */
     getOpenCode(issue) {
        let self = this
        return new Promise((resolve, reject) => {
            $.ajax({
                url: '/get/opencode',
                data: {
                    issue:issue
                },
                dataType: 'json',
                success: function(res){
                    self.setOpenCode(res)
                    resolve.call(self,res)
                },
                error: function(err) {
                    reject.call(err)
                }
            })
        })
     }
     /**
      * 获取当前状态
      * @param {*} res 
      */
     getState(issue){
        let self = this
        return new Promise((resolve, reject) => {
            $.ajax({
                url: '/get/state',
                data: {
                    issue:issue
                },
                dataType: 'json',
                success: function(res){
                    resolve.call(self,res)
                },
                error: function(err) {
                    reject.call(err)
                }
            })
        })
     }
 }

 export default Interface