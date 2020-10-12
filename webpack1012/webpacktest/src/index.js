import $ from 'jquery'
import './css/1.css'
import './css/1.scss'
import './css/1.less'
import $ from babel
$(function () {
  $('li:odd').css('backgroundColor', 'lightblue')
  $('li:even').css('backgroundColor', 'red')
})

class A{
  static a = "bbbb"
}
console.log(a);