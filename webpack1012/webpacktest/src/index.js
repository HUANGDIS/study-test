import $ from 'jquery'
import './css/1.css'
import './css/1.scss'
import './css/1.less'
$(function () {
  $('li:odd').css('backgroundColor', 'lightblue')
  $('li:even').css('backgroundColor', 'red')
})

class A{
  static a = "bbbb"
}
console.log(A.a);