// pages/index/index.js
Page({
  usingComponents: {},
  data: {
    activeClass: 0,
    curIndex: 0
  },
  tabHandler: function (e) {
    var index = e.currentTarget.id;
    this.setData({
      activeClass: index,
      curIndex: index
    })
  },
  toDes: function (e) {
    wx.switchTab({
      url: '/pages/destination/destination',
    })
  },
  toShow1: function (e) {
    wx.navigateTo({
      url: '/pages/shows1/shows1',
    })
  },
  toShow2: function (e) {
    wx.navigateTo({
      url: '/pages/shows2/shows2',
    })
  },
  toLxrd1: function (e) {
    wx.navigateTo({
      url: '/pages/lxrd1/lxrd1',
    })
  },
  toLyzx1: function (e) {
    wx.navigateTo({
      url: '/pages/lyzx1/lyzx1',
    })
  },
  onShareAppMessage() {

  },
})