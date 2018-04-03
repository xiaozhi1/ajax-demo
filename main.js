myButton.addEventListener('click',(e)=>{
    let request = new XMLHttpRequest()                  //产生这个对象
    request.open('get','http://jack.com:8002/xxx')   //配置这个对象request
    request.send()                                      //发送这个对象
    request.onreadystatechange = ()=>{                  //监听这个对象的readystate的变化
        if(request.readyState === 4){
            console.log('请求响应都完毕了')
            console.log(request.status)
            if(request.status >= 200 && request.status <300){
                console.log('说明请求完成')
                console.log(typeof request.responseText)
                console.log(request.responseText)
                let string = request.responseText
                //把符合JSON语法的字符串
                //转换成JS对应的值
                let object = window.JSON.parse(string)
                //window.JSON是浏览器提供的 
                console.log(typeof object)
                console.log(object)
                console.log(object.note.from)
            }else if(request.status >= 400){
                console.log('说明请求失败')
            }
        }
    }
})
