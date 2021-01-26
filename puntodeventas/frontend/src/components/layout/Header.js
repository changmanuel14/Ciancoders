import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
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
                        { user ? `Bienvenido de nuevo ${user.username}` : ""}
                    </strong>
                </span>
                <li className="nav-item">
                    <Link to="/comprar" className="nav-link">Realizar compra</Link>
                </li>
                <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Reportes
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to="/rep1" class="dropdown-item">Ventas por Producto</Link></li>
            <li><Link to="/rep2" class="dropdown-item">Ventas globales</Link></li>
            <li><Link to="/rep3" class="dropdown-item">Promedio de precios</Link></li>
          </ul>
        </li>
                <li className="nav-item">
                    <button className="nav-link btn btn-dark btn-sm text-danger" onClick={
                        this.props.logout}>
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
