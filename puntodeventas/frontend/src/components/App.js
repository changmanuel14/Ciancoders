import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Header from './layout/Header';
import Dashboard from './Productos/Dashboard';
import Rep1 from './Productos/Rep1';
import Compras from './Productos/Compras';
import Detallecompra from './Productos/Detallecompra';
import Login from './accounts/Login';
import Register from './accounts/Register';
import PrivateRoute from './common/PrivateRoute';
import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';

class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser());
    }
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Fragment>
                        <Header />
                        <div className="container">
                            <Switch>
                                <PrivateRoute exact path="/" component={Dashboard} />
                                <Route exact path="/register" component={Register} />
                                <Route exact path="/login" component={Login} />
                                <Route exact path="/comprar" component={Compras} />
                                <Route exact path="/detalles" component={Detallecompra} />
                                <PrivateRoute exact path="/rep1" component={Rep1} />
                                <PrivateRoute exact path="/rep2" component={Dashboard} />
                                <PrivateRoute exact path="/rep3" component={Dashboard} />
                            </Switch>
                        </div>
                    </Fragment>
                </Router>
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));