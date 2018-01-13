const format = require('date-fns/format')
const zhCN = require('date-fns/locale/zh_cn')
const Timeago = require('timeago.js')

const dateFilter = function (value, pattern = 'YYYY-MM-DD HH:mm:ss') {
  if (!value) return ''
  if (value instanceof Date === false) value = new Date(value)
  return format(value, pattern, {locale: zhCN})
}

const timeagoFilter = function (value) {
  if (!value) return ''
  return new Timeago().format(value, 'zh_CN')
}

const nl2brFilter = function (value) {
  return value.replace(/\n/g, '<br>')
}

module.exports = {
  install (Vue) {
    Vue.filter('date', dateFilter)
    Vue.filter('nl2br', nl2brFilter)
    Vue.filter('timeago', timeagoFilter)
  }
}
