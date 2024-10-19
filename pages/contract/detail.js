Page({
  data: {
    contract: null
  },
  onLoad: function(options) {
    // In a real app, you would fetch the contract details from a server
    // For this example, we'll use mock data
    this.setData({
      contract: {
        id: options.id,
        customerName: 'Customer 1',
        startDate: '2023-06-01',
        endDate: '2024-05-31',
        serviceType: 'Full Garden Care',
        status: 'Active',
        terms: 'Weekly garden maintenance, monthly deep cleaning, seasonal planting.',
        price: '¥5000 per month'
      }
    });
  },
  editContract: function() {
    wx.showToast({
      title: 'Edit functionality to be implemented',
      icon: 'none'
    });
  },
  terminateContract: function() {
    wx.showModal({
      title: 'Terminate Contract',
      content: 'Are you sure you want to terminate this contract?',
      success: (res) => {
        if (res.confirm) {
          wx.showToast({
            title: 'Contract terminated',
            icon: 'success'
          });
          // In a real app, you would update the contract status on the server
        }
      }
    });
  }
})