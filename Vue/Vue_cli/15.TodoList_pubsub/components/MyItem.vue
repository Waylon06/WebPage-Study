<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      />
      <!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
      <!-- <input type="checkbox" v-model="todo.done"/> -->
      <span v-show="!todo.isEidt">{{ todo.title }}</span>
      <input
        type="text"
        :value="todo.title"
        v-show="todo.isEidt"
        @blur="handleBlur(todo, $event)"
        ref="inputTitle"
      />
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button
      v-show="!todo.isEidt"
      class="btn btn-eidt"
      @click="handleEidt(todo)"
    >
      编辑
    </button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "MyItem",
  //声明接收todo
  props: ["todo"],
  methods: {
    //勾选or取消勾选
    handleCheck(id) {
      //通知App组件将对应的todo对象的done值取反
      // this.checkTodo(id)
      this.$bus.$emit("checkTodo", id);
    },
    //删除
    handleDelete(id) {
      if (confirm("确定删除吗？")) {
        //通知App组件将对应的todo对象删除
        // this.deleteTodo(id)
        // this.$bus.$emit('deleteTodo',id)
        pubsub.pubilsh("deleteTodo", id);
      }
    },
    handleEidt(todo) {
      // 判断todo身上是否已经具有isEidt属性
      if (todo.hasOwnProperty.call(todo, "isEidt")) {
        todo.isEidt = true;
      } else {
        // todo身上没有isEidt属性
        this.$set(todo, "isEidt", true);
      }
    },
    // 失去焦点（真正执行修改逻辑）
    handleBlur(todo, e) {
      todo.isEidt = false;
      if (!e.target.value.trim()) return alert("输入不能为空");
      this.$bus.$emit("updateTodo", todo.id, e.target.value);
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>