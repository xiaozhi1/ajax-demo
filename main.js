window.jQuery = function(nodeOrSelector){
    let nodes = {}
    nodes.addClass = function(){}
    nodes.html = function(){}
    return nodes
}

window.jQuery.ajax = function({url,method,body,headers}){
    return new Promise(function(resolve,reject){
        let request = new XMLHttpRequest()                  
        request.open(method,url)   
        for(let key in headers){
            let value = headers[key]
            request.setRequestHeader(key,value)
        }
        request.onreadystatechange = ()=>{
            if(request.readyState === 4){
                if(request.status >= 200 && request.status <300){
                    resolve.call(undefined,request.responseText)
                    console.log('request.responseText',request.responseText)
                    console.log('responseText',responseText)
                }else if(request.status >= 400){
                    reject.call(undefined,request)
                }
            }
        }
        request.send(body)
    })
}

myButton.addEventListener('click',(e)=>{
    window.jQuery.ajax({
        url:'/xxx',
        method:'get',     
        headers:{
            'content-type':'application/x-www-form-urlencoded',
            'frank':'18'
        }
    }).then(
        (text)=>{console.log(text )}, //text就是一个名字，叫什么无所谓
        (request)=>{console.log(request)}
    )
})
