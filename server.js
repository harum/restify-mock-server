var restify = require('restify');

const mockup_res = {
  name: 'Putu Harum Bawa',
  age: 24,
};

const user_portofolio = {
  "status_code": 200,
  "data": [
    {
      "id": 130671,
      "product_code": "IDN000074903",
      "product_name": "Mandiri Investa Dana Syariah",
      "im_code": "CC002",
      "im_name": "Mandiri Manajemen Investasi, PT",
      "initial_average_nav": "3,375.38",
      "initial_investment": "500,000.00",
      "nett_unit": "148.1315",
      "last_nav": "3,360.7400",
      "current_investment_value": "497,831.36",
    },
    {
      "id": 131021,
      "product_code": "IDN000282506",
      "product_name": "Reksa Dana Syariah Mandiri Bukareksa Pasar Uang",
      "im_code": "CC002",
      "im_name": "Mandiri Manajemen Investasi, PT",
      "initial_average_nav": "1,053.62",
      "initial_investment": "500,000.00",
      "nett_unit": "474.5537",
      "last_nav": "1,054.5424",
      "current_investment_value": "500,437.02",
    },
    {
      "id": 131980,
      "product_code": "IDN000019205",
      "product_name": "BNP Paribas Pesona",
      "im_code": "MEES2",
      "im_name": "BNP Paribas Investment Partners, PT",
      "initial_average_nav": "26,485.78",
      "initial_investment": "1,000,000.00",
      "nett_unit": "37.7561",
      "last_nav": "25,901.5400",
      "current_investment_value": "977,941.37",
    }
  ]
}

var server = restify.createServer();

server.get('/user/portfolio', function(req, res, next) {
  res.send(user_portofolio);
  next();
});

server.post('/order/submitOrder', function(req, res, next) {
  res.send({
    status_code: 200,
    order_no: 1000000
  });
  next();
})

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
