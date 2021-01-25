import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';


export class Header extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    }

    render() {
        const { isAuthenticated, user} = this.props.auth;

        const authLinks = (

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <span className="navbar-text mr-3">
                    <strong>
                        { user ? `Bienvenido ${user.username}` : ""}
                    </strong>
                </span>
                <li className="nav-item">
                                <Link to="/comprar" className="nav-link">Realizar compra</Link>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link btn btn-dark btn-sm text-light" onClick={this.props.logout}>
                                    Cerrar sesion
                                </button>
                            </li>
                        </ul>
        );

        const guestLinks = (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/register" className="nav-link">Registrarse</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">Log-in</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/comprar" className="nav-link">Realizar compra</Link>
                            </li>
                        </ul>
        );
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="#">Punto de Ventas</a>
                        { isAuthenticated ? authLinks : guestLinks}
                    </div>
                    
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logout })(Header);
