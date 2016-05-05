var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var MainContainer = require('../containers/MainContainer.jsx');
var HomeContainer = require('../containers/HomeContainer.jsx');
var PreviewerContainer = require('../containers/PreviewerContainer.jsx');
var ModalPage = require('../containers/ModalPage.jsx');

var routes = <Router history={hashHistory}>
		<Route path='/' component={MainContainer}>
			<IndexRoute component={HomeContainer} />
				<Route path="previewer" component={PreviewerContainer} />
				<Route path="modal" component={ModalPage} />
		</Route>
	</Router>

module.exports = routes;
