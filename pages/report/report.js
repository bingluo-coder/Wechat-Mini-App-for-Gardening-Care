Page({
  data: {
    reportType: 'customer',
    month: '',
    employee: '',
    employees: ['Employee 1', 'Employee 2', 'Employee 3'],
    reportData: null
  },
  onLoad: function() {
    // Set default month to current month
    const now = new Date();
    const month = now.getFullYear() + '-' + (now.getMonth() + 1).toString().padStart(2, '0');
    this.setData({ month: month });
  },
  switchReportType: function(e) {
    this.setData({ 
      reportType: e.detail.value,
      reportData: null
    });
  },
  selectMonth: function(e) {
    this.setData({ 
      month: e.detail.value,
      reportData: null
    });
  },
  selectEmployee: function(e) {
    this.setData({ 
      employee: this.data.employees[e.detail.value],
      reportData: null
    });
  },
  generateReport: function() {
    // In a real app, you would fetch this data from your server based on the selected month
    if (this.data.reportType === 'customer') {
      this.setData({
        reportData: {
          totalCustomers: 50,
          totalServices: 150,
          revenue: 75000,
          topServices: [
            { name: 'Lawn Mowing', count: 60 },
            { name: 'Garden Maintenance', count: 45 },
            { name: 'Tree Trimming', count: 30 }
          ]
        }
      });
    } else if (this.data.employee) {
      this.setData({
        reportData: {
          employeeName: this.data.employee,
          totalServices: 30,
          averageRating: 4.8,
          topCustomers: [
            { name: 'Customer A', services: 5 },
            { name: 'Customer B', services: 4 },
            { name: 'Customer C', services: 3 }
          ]
        }
      });
    } else {
      wx.showToast({
        title: 'Please select an employee',
        icon: 'none'
      });
    }
  }
})