var hitokoto = 'https://v1.hitokoto.cn'
var hitText = document.getElementById('hitokoto')
var xhr = new XMLHttpRequest()
xhr.open('get', 'https://v1.hitokoto.cn')
xhr.onreadystatechange = function () {
  var data = JSON.parse(xhr.responseText)
  hitText.innerHTML = '「&nbsp;&nbsp;' + data.hitokoto + '」' + '<br><br>——' + data.from
}
xhr.send()
