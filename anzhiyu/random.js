var posts=["2024/11/17/这是用来测试的哦/","2024/11/17/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };