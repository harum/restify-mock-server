var restify = require('restify');

const user_portofolio = {
  "status_code": 200,
  "data": [
    {
      "id": 101749,
      "product_code": "IDN000265709",
      "product_name": "CIMB-PRINCIPAL Bukareksa Pasar Uang",
      "im_code": "ZG002",
      "im_name": "CIMB Principal Asset Management, PT",
      "initial_average_nav": "1,059.04",
      "initial_investment": "100,000.00",
      "nett_unit": "94.4254",
      "last_nav": "1,064.1000",
      "current_investment_value": "100,478.04",
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
  ]
}

const server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.get('/user/portfolio', function(req, res, next) {
  res.send(user_portofolio);
  next();
});

server.post('/order/submitOrder', function(req, res, next) {
  res.send({
    status_code: 200,
    order_no: req.body.bl_id
  });
  next();
})

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
