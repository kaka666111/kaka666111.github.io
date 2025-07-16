var posts=["2024/12/05/DDL是最大的生产力/","2025/07/16/ctf练习录/","2024/12/13/hello-world/","2024/11/17/这是用来测试的哦/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };