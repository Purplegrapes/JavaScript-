// import '../data-structure/tree-node'
var xhr = new XMLHttpRequest()
xhr.onreadystatechange = function () {
    // 这里的函数异步执行
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            alert(xhr.responseText)
        }
    }
}
xhr.open("GET", "/api/info", false)
xhr.send(null)