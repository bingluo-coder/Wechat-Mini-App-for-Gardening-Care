Page({
  data: {
    employees: []
  },
  onLoad: function() {
    // Fetch and set employee data
    this.setData({
      employees: [
        { name: 'Employee 1', totalServices: 20 },
        { name: 'Employee 2', totalServices: 15 }
      ]
    });
  }
})