// components/TodoItem/TodoItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    todo: {
      type: Object,
      value: {},
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    text: '',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    actionDelete: function () {
      let id = this.data.todo.id
      this.triggerEvent('onDelete', id)
    },
    actionDone: function () {
      let id = this.data.todo.id
      this.triggerEvent('onFinish', id)
    }
  }
})