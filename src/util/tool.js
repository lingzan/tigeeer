const tool = {
    dateFormat (date, format) {
        let _date = date ? date.replace(/-/, '/') : ''
        _date = _date ? new Date(_date) : new Date()
        if (_date === 'Invalid Date') {
            _date = 'Invalid Date'
        } else {
            let year = _date.getFullYear()
            year = year > 9 ? year : '0' + year
            let month = _date.getMonth() + 1
            month = month > 9 ? month : '0' + month
            let day = _date.getDate()
            day = day > 9 ? day : '0' + day
            let hours = _date.getHours()
            hours = hours > 9 ? hours : '0' + hours
            let minutes = _date.getMinutes()
            minutes = minutes > 9 ? minutes : '0' + minutes
            let seconds = _date.getSeconds()
            seconds = seconds > 9 ? seconds : '0' + seconds

            if (arguments.length > 1) {
                let _format = format.toLocaleLowerCase()
                return _format.replace(/y+/, year).replace(/m+/, month).replace(/d+/, day).replace(/h+/, hours).replace(/i+/, minutes).replace(/s+/, seconds)
            } else {
                _date = new Date().getTime() - _date.getTime()
                _date = Math.floor(_date / 1000)

                const dayAmount = _date / (3600 * 24)
                const hoursAmount = _date / (3600)
                const minutesAmount = _date / (60)
                if (dayAmount > 1) {
                    _date = Math.floor(dayAmount) + '天前'
                } else if (hoursAmount > 1) {
                    _date = Math.floor(hoursAmount) + '小时前'
                } else if (minutesAmount > 1) {
                    _date = Math.floor(minutesAmount) + '分钟前'
                }
                return _date
            }
        }
    },
    waterFallFlow () {
        return {
            template: function (data) {
                var html = []
                this.gap = 10
                this.MAX_WIDTH = document.getElementById('waterfall').clientWidth
                this.INIT_HEIGHT = this.MAX_WIDTH < 679 ? 100 : this.MAX_WIDTH < 1024 ? 200 : this.MAX_WIDTH < 1280 ? 250 : 250
                this.rowWidth = 0
                this.row = []
                this.rows = []
                if (typeof data === 'object' && data.constructor === Array) {
                    for (var i = 0; i < data.length; i++) {
                        var item = data[i]
                        var ratio = item.w / item.h
                        item.cw = Math.floor(this.INIT_HEIGHT * ratio)
                        item.ch = this.INIT_HEIGHT
                        if (this.rowWidth + this.gap + item.cw < this.MAX_WIDTH) {
                            this.rowWidth = this.rowWidth + this.gap + item.cw
                            this.row.push(item)
                        } else {
                            var distance = this.MAX_WIDTH - this.rowWidth
                            var distanceRatio = distance / this.rowWidth
                            var plusWidth = 0
                            for (var j = 0; j < this.row.length; j++) {
                                var row = this.row[j]
                                var currentRatio = row.cw / row.ch
                                row.ch = row.ch + Math.floor(row.ch * distanceRatio)
                                row.cw = Math.round(row.ch * currentRatio)
                                if (j === this.row.length - 1) {
                                    row.cw = this.MAX_WIDTH - plusWidth - 11
                                }
                                plusWidth = plusWidth + row.cw + this.gap
                                this.rows.push(row)
                            }
                            this.rowWidth = item.cw + this.gap
                            this.row = [item]
                        }
                    }
                }
                for (var k = 0; k < this.rows.length; k++) {
                    var rows = this.rows[k]
                    var path = require('../assets/flow/' + rows.name)

                    html.push('<div class="waterfall-item" style="width: ' + rows.cw + 'px;height:' + (rows.ch > 300 ? 300 : rows.ch) + 'px;float:left;margin:' + this.gap / 2 + 'px;overflow:hidden;min-height:0;font-size:0;position:relative"><a><div   style="width: ' + rows.cw + 'px;height:' + rows.ch + 'px;position:absolute;top:50%;left:50%;margin-top:' + (-rows.ch / 2) + 'px;margin-left:' + (-rows.cw / 2) + 'px;background-image:url(' + path + ');background-size:cover;"></div></a><div class="notice"><span>Man holding a sword</span></div></div>')
                }
                return html.join('')
            },
            render: function (data) {
                var html = this.template(data)
                document.getElementById('waterfall').innerHTML = html
            }
        }
    },
    scrollTop () {
    }
}

export default tool
