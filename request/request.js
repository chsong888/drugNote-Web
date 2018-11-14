var api = require('./api.js');
var utils = require('../utils/util.js');


/**
 * 网路请求
 */
function request(url, data, successCb, errorCb, completeCb) {
  wx.request({
    url: url,
    method: 'GET',
    data: data,
    success: function (res) {
      if (res.statusCode == 200)
        utils.isFunction(successCb) && successCb(res.data);
      else
        console.log('请求异常', res);
    },
    error: function () {
      utils.isFunction(errorCb) && errorCb();
    },
    complete: function () {
      utils.isFunction(completeCb) && completeCb();
    }
  });
}

/**
 * 搜索药品
 */
function requestSearchDrug(data, successCb, errorCb, completeCb) {
  request(api.API_DRUG_SEARCH, data, successCb, errorCb, completeCb);
}


/**
 * 获取药品详细信息
 */
function requestDrugDetail(id, data, successCb, errorCb, completeCb) {
  request(api.API_DRUG_DETAIL.replace(':id', id), data, successCb, errorCb, completeCb);
}


module.exports = {
  requestSearchDrug: requestSearchDrug,
  requestDrugDetail: requestDrugDetail
}
