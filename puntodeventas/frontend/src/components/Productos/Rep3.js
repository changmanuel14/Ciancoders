import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProductos, getCuerpo } from '../../actions/productos';

export class Rep3 extends Component {
    state = {
        suma: 0,
        contador: 0
    }

    static propTypes = {
        productos: PropTypes.array.isRequired,
        getProductos: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getProductos();
        this.props.productos.forEach(producto => {
            this.state.suma = this.state.suma + producto.precio;
            this.state.contador++;
        });

        console.log(this.state.montos);
    }
    
    
    
    render() {
        var cont = 0;
        return (
            <Fragment>
                <h2>Productos</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Existencia</th>
                            <th>Imagen</th>
                            <th>Precio</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.productos.map(producto => (
                            <tr key={producto.id}>
                                <td>{(cont++)+1}</td>
                                <td>{producto.id}</td>
                                <td>{producto.nombre}</td>
                                <td>{producto.existencia}</td>
                                <td><img src={producto.imagen} width="100"></img></td>
                                <td>Q. {producto.precio}</td>
                                
                            </tr>
                            
                        )) }
                        <tr>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td>Promedio de precios:</td>
                            <td>Q. {this.state.suma / this.state.contador}</td>
                        </tr>
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    productos: state.productos.productos
})

export default connect(mapStateToProps, { getProductos, getCuerpo })
(Rep3);