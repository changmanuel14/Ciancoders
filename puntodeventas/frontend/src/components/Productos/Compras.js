import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProductos1 } from '../../actions/productos';

export class Compras extends Component {
    static propTypes = {
        productos: PropTypes.array.isRequired,
    }

    componentDidMount() {
        this.props.getProductos1();
        console.log(localStorage.getItem('user'));
        console.log(localStorage.getItem('userid'));
    }
    
    render() {
        return (
            <Fragment>
                <h2>Productos</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Existencia</th>
                            <th>Imagen</th>
                            <th>Owner</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.productos.map(producto => {
                            if(producto.id !== localStorage.getItem('userid'))
                            return <tr key={producto.id}>
                                <td>{producto.id}</td>
                                <td>{producto.nombre}</td>
                                <td>Q. {producto.precio}</td>
                                <td>{producto.existencia}</td>
                                <td><img src={producto.imagen} width="100"></img></td>
                                <td>{producto.owner}</td>
                            </tr>
                        }) }
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    productos: state.productos.productos
})

export default connect(mapStateToProps, { getProductos1 })
(Compras);
