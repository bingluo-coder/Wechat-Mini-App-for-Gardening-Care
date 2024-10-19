Page({
  data: {
    customers: []
  },
  onLoad: function() {
    // Fetch and set customer data
    this.setData({
      customers: [
        { name: 'Customer 1', serviceDate: '2023-06-01', serviceType: 'Full Garden Care' },
        { name: 'Customer 2', serviceDate: '2023-06-03', serviceType: 'Lawn Mowing' }
      ]
    });
  }
})