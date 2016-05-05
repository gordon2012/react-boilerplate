var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var MainContainer = require('../containers/MainContainer.jsx');
var HomeContainer = require('../containers/HomeContainer.jsx');
var PreviewerContainer = require('../containers/PreviewerContainer.jsx');
var ModalContainer = require('../containers/ModalContainer.jsx');

var routes = <Router history={hashHistory}>
		<Route path='/' component={MainContainer}>
			<IndexRoute component={HomeContainer} />
				<Route path="previewer" component={PreviewerContainer} />
				<Route path="modal" component={ModalContainer} />
		</Route>
	</Router>

module.exports = routes;
