# GitHubMockServerSample

## 功能
此项目配合[MyMockData](https://github.com/zj-john/MyMockData)一起使用。

我们做了什么：
* 把GitHub项目作为我们的mock server的数据源，例如[MyMockData](https://github.com/zj-john/MyMockData)
* 在项目中，通过service-worker.js，把数据源中的json数据，转化为json数据所描述的http响应，达到mock server的效果
* 可以通过json数据更改响应码、响应时间、响应头、校验post数据等功能

json举例：
```json
{
  "RequestMethod":["GET"],
  "ResponseHeaders":{},
  "StatusCode": "200",
  "Response": {
    "success": true,
    "message": "",
    "data": "This is a get mock data"
  },
  "ResponseTime": 1000
}
```

## 结构说明
```
│  .gitignore
│  README.md
│  service-worker.js
│
└─demo
    │  app.js
    │  index.html
    │  index.js
    │  package.json
    │  service-worker.js
    │  styles.css
    │
    └─certificate
            ca.cer
            csr.pem
            private.pem
```

整个目录结构分为2部分，

### service-worker.js  

我们用于解析mock data的文件，mock data的组成参考[MyMockData](https://github.com/zj-john/MyMockData)项目。

在你的项目根文件(假设为index.html)中加入如下代码：
```html
<script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js', { scope: '/' }).then(function(reg) {
      if(reg.installing) {
        console.log('Service worker installing');
      } else if(reg.waiting) {
        console.log('Service worker installed');
      } else if(reg.active) {
        console.log('Service worker active');
      }
    }).catch(function(error) {
      console.log('Registration failed with ' + error);
    });
  }
</script>
```
更精简的版本：
```html
<script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js');
  }
</script>
```

把service-worker.js 拷贝到项目根目录下即可。


### demo
demo文件夹下是一个可以运行的，基于node，使用https的web站点。此示例中可以看到mock server的完整用法。
