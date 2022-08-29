<template>
  <ul>
   <!--  <li>消息编号：{{$route.query.id}}</li>
    <li>消息标题：{{$route.query.title}}</li> -->
    <li>消息编号：{{$route.params.id}}</li>
    <li>消息标题：{{$route.params.title}}</li>
  </ul>
</template>

<script>
export default {
    name: 'DetailName',
    // 接收props传的值
    props: ['id', 'title']
}
</script>

<style>

</style>