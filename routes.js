module.exports = function(app) {
	
	app.get('/', function(req, res, next) {
		res.render('shots');
	});
	
	app.get('/details', function(req, res, next) {
		res.render('details');
	});
	
	app.get('/auth', function(req, res, next) {
		res.render('auth');
	});
	
	app.get('/401', function(req, res, next) {
		res.render('error/401');
	});
	
	app.get('/error', function(req, res, next) {
		res.render('error/error');
	});
	
	app.use(function(req, res, next) {
		res.status('404').render('error/404');
	});
	
}