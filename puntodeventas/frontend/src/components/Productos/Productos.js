import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProductos, deleteProducto } from '../../actions/productos';

export class Ventas extends Component {
    static propTypes = {
        productos: PropTypes.array.isRequired,
        getProductos: PropTypes.func.isRequired,
        deleteProducto: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getProductos();
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
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.productos.map(producto => (
                            <tr key={producto.id}>
                                <td>{producto.id}</td>
                                <td>{producto.nombre}</td>
                                <td>Q. {producto.precio}</td>
                                <td>{producto.existencia}</td>
                                <td><img src={producto.imagen} width="100"></img></td>
                                <td><button onClick={this.props.deleteProducto.bind(this,producto.id)} className="btn btn-danger btn-sm">Eliminar</button></td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    productos: state.productos.productos
})

export default connect(mapStateToProps, { getProductos, deleteProducto })
(Ventas);
