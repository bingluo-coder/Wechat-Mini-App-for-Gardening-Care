Page({
  data: {
    schedule: null,
    employees: []
  },
  onLoad: function(options) {
    const scheduleId = options.scheduleId;
    // In a real app, you would fetch this data from your server
    this.setData({
      schedule: {
        id: scheduleId,
        date: '2023-06-01',
        task: 'Garden Maintenance'
      },
      employees: [
        { id: 1, name: 'Employee 1', status: 'Completed', photos: ['photo1.jpg', 'photo2.jpg'] },
        { id: 2, name: 'Employee 2', status: 'In Progress', photos: [] }
      ]
    });
  },
  viewEmployeeReport: function(e) {
    const employeeId = e.currentTarget.dataset.id;
    const employee = this.data.employees.find(emp => emp.id === employeeId);
    wx.navigateTo({
      url: `/pages/schedule/report?scheduleId=${this.data.schedule.id}&employeeId=${employeeId}&date=${this.data.schedule.date}&employee=${employee.name}&task=${this.data.schedule.task}&status=${employee.status}&photos=${employee.photos.join(',')}`
    });
  }
})