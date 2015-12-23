// React app
<% if (hasReact === true) { %>
import React from 'react';
import { render } from 'react-dom';
import { App } from '../components';

render(App, document.getElementById('<%= projectNameKebabCase %>-app'));
<% } %> 

// React app with routing
<% if (hasReact === true && hasRouter === true) { %>
import { render } from 'react-dom';
import { Router } from 'react-router';
import history from './router/history';
import { routes } from './router/routes';

render(
	<Router history={history} routes={routes} />,
), document.getElementById('<%= projectNameKebabCase %>-app'));
<% } %> 

// React app with Redux and routing
<% if (hasReact === true && hasRouter === true && hasRedux === true) { %>
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import configureStore from './store/configureStore';

const store = configureStore();

render((
	<Provider store={store}>
		<ReduxRouter />
	</Provider>,
), document.getElementById('<%= projectNameKebabCase %>-app'));
<% } %>


// React app with Redux, but no routing
<% if (hasReact === true && hasRedux === true) { %>
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App'
import configureStore from './store/configureStore';

const store = configureStore();

render((
 	<Provider store={store}>
 		<App />
  	</Provider>,
), document.getElementById('<%= projectNameKebabCase %>-app'));
<% } %>
