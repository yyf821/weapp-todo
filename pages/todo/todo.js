// pages/todo/todo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: '',
    todos: [{
      id: 123,
      task: 'foo',
      finished: true,
    }, {
      id: 456,
      task: 'bar',
      finished: false,
    }]
  },
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
  },
  propsDelete: function (todoId) {
    let todos = this.data.todos
    let index = todos.findIndex(e => e.id === todoId.detail)
    //splice() 方法会改变原始数组
    todos.splice(index, 1)
    this.setData({
      todos:todos,
    })
  },
  propsFinish: function(todoId) {
    let todos = this.data.todos
    let index = todos.findIndex(e => e.id === todoId.detail);
    let finished = todos[index].finished;
    todos[index].finished = !finished;
    this.setData({
      todos:todos,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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