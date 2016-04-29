var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('config/routes.jsx');

require('./style.scss');

ReactDOM.render(routes, document.getElementById('app'));
