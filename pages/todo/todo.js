// pages/todo/todo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: '',
    todos: [],
  },

  // 添加todo
  onSubmit: function (e) {
    if (this.data.text.length === 0) {
      wx.showToast({
        title: '输入不能为空',
        icon: 'none',
      })
      return
    }
    let task = this.data.text
    let todos = this.data.todos
    let todo = {
      id: Date.now(),
      task,
      finished: false,
    }
    todos.push(todo)
    this.setData({
      todos,
      text: '',
    })
    this.save()
  },

  // 删除todo
  propsDelete: function (todoId) {
    let todos = this.data.todos
    let index = todos.findIndex(e => e.id === todoId.detail)
    //splice() 方法会改变原始数组
    todos.splice(index, 1)
    this.setData({
      todos: todos,
    })
    this.save()
  },

  // 标记完成
  propsFinish: function (todoId) {
    let todos = this.data.todos
    let index = todos.findIndex(e => e.id === todoId.detail);
    let finished = todos[index].finished;
    todos[index].finished = !finished;
    this.setData({
      todos: todos,
    })
    this.save()
  },

  // 保存数据
  save: function () {
    wx.setStorage({
      key: "my-todo-list",
      data: this.data.todos
    })
  },

  // 从缓存中读取
  load: function () {
    var that = this;
    wx.getStorage({
      key: 'my-todo-list',
      success(res) {
        that.setData({
          todos: res.data
        })
      },
      fail(res) {
        wx.showToast({
          title: '暂无数据',
          icon: 'none',
        })
      }
    })
  },

  // 清除缓存
  clear: function () {
    this.setData({
      todos: []
    })
    wx.clearStorage()
  },

  onClear: function () {
    var that = this;
    wx.showModal({
      title: '删除',
      content: '确认删除所有待办？',
      success(res) {
        if (res.confirm) {
          that.clear()
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.load()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})