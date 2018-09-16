import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon' // svg组件

require('http://at.alicdn.com/t/font_713001_q4vx54chuu.js')

// 注册全局组件
Vue.component('svg-icon', SvgIcon)

// 创建上下文
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)
