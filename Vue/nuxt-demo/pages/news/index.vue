<template>
  <div>
    <h2>News Index page</h2>
    <p>NewsID:{{$route.params.newsId}}</p>
    <ul>
      <li>
        <nuxt-link :to="{name:'index'}">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{name:'news-id',params:{id:123, title:'我是标题1'}}">News-1</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{name:'news-id',params:{id:456,title:'我是标题2'}}">News-2</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{name:'news-id',params:{id:'aaa',title:'爆炸新闻'}}">News-3</nuxt-link>
      </li>
    </ul>
  </div>
</template>