import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/MessageField';

ReactDOM.render(
    <MuiThemeProvider>
    <App />,
    </MuiThemeProvider>,
    document.getElementById('root'),
);