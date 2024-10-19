Page({
  data: {
    schedules: []
  },
  onLoad: function() {
    // Fetch and set schedules
    this.setData({
      schedules: [
        {
          id: 1,
          date: '2023-06-01',
          task: 'Garden Maintenance',
          status: 'In Progress',
          employees: [
            { id: 1, name: 'Employee 1', status: 'Completed', photos: ['photo1.jpg', 'photo2.jpg'] },
            { id: 2, name: 'Employee 2', status: 'In Progress', photos: [] }
          ]
        },
        {
          id: 2,
          date: '2023-06-02',
          task: 'Lawn Mowing',
          status: 'Completed',
          employees: [
            { id: 3, name: 'Employee 3', status: 'Completed', photos: ['photo3.jpg'] },
            { id: 4, name: 'Employee 4', status: 'Completed', photos: ['photo4.jpg', 'photo5.jpg'] }
          ]
        }
      ]
    });
  },
  uploadPhotos: function(e) {
    const { scheduleId, employeeId } = e.currentTarget.dataset;
    wx.chooseImage({
      count: 9,
      success: (res) => {
        const tempFilePaths = res.tempFilePaths;
        // Update the local state
        const updatedSchedules = this.data.schedules.map(schedule => {
          if (schedule.id === scheduleId) {
            const updatedEmployees = schedule.employees.map(employee => {
              if (employee.id === employeeId) {
                return { ...employee, photos: [...employee.photos, ...tempFilePaths] };
              }
              return employee;
            });
            return { ...schedule, employees: updatedEmployees };
          }
          return schedule;
        });
        this.setData({ schedules: updatedSchedules });
        wx.showToast({
          title: 'Photos uploaded',
          icon: 'success'
        });
      }
    });
  },
  generateReport: function(e) {
    const { scheduleId, employeeId } = e.currentTarget.dataset;
    const schedule = this.data.schedules.find(s => s.id === scheduleId);
    const employee = schedule.employees.find(emp => emp.id === employeeId);
    wx.navigateTo({
      url: `/pages/schedule/report?scheduleId=${scheduleId}&employeeId=${employeeId}&date=${schedule.date}&employee=${employee.name}&task=${schedule.task}&status=${employee.status}&photos=${employee.photos.join(',')}`
    });
  },
  viewAllReports: function(e) {
    const scheduleId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/schedule/all-reports?scheduleId=${scheduleId}`
    });
  }
})