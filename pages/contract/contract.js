Page({
  data: {
    contracts: []
  },
  onLoad: function() {
    // Fetch and set contract data
    this.setData({
      contracts: [
        { id: 1, customerName: 'Customer 1', startDate: '2023-06-01', endDate: '2024-05-31', serviceType: 'Full Garden Care', status: 'Active' },
        { id: 2, customerName: 'Customer 2', startDate: '2023-07-01', endDate: '2024-06-30', serviceType: 'Lawn Mowing', status: 'Pending' }
      ]
    });
  },
  viewContract: function(e) {
    const contractId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/contract/detail?id=${contractId}`
    });
  },
  addContract: function() {
    wx.navigateTo({
      url: '/pages/contract/add'
    });
  }
})