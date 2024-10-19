Page({
  data: {
    schedule: null
  },
  onLoad: function(options) {
    this.setData({
      schedule: {
        id: options.scheduleId,
        employeeId: options.employeeId,
        date: options.date,
        employee: options.employee,
        task: options.task,
        status: options.status,
        photos: options.photos ? options.photos.split(',') : []
      }
    });
  },
  saveReport: function() {
    // In a real app, you would save this report to your server
    wx.showToast({
      title: 'Report saved',
      icon: 'success',
      success: () => {
        setTimeout(() => {
          wx.navigateBack();
        }, 1500);
      }
    });
  }
})