const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(function(req, res, next) {
        
        next();
    });
}