// pages/destination/destination.js
Page({
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
})