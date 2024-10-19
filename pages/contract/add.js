Page({
  data: {
    customerName: '',
    serviceType: '',
    startDate: '',
    endDate: '',
    terms: '',
    price: ''
  },
  inputCustomerName: function(e) {
    this.setData({ customerName: e.detail.value });
  },
  inputServiceType: function(e) {
    this.setData({ serviceType: e.detail.value });
  },
  inputStartDate: function(e) {
    this.setData({ startDate: e.detail.value });
  },
  inputEndDate: function(e) {
    this.setData({ endDate: e.detail.value });
  },
  inputTerms: function(e) {
    this.setData({ terms: e.detail.value });
  },
  inputPrice: function(e) {
    this.setData({ price: e.detail.value });
  },
  submitContract: function() {
    // In a real app, you would send this data to your server
    console.log('New contract:', this.data);
    wx.showToast({
      title: 'Contract added',
      icon: 'success',
      success: () => {
        setTimeout(() => {
          wx.navigateBack();
        }, 1500);
      }
    });
  }
})