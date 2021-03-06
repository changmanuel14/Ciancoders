import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProductos, getCuerpo } from '../../actions/productos';

export class Rep1 extends Component {
    state = {
        montos: []
    }

    static propTypes = {
        productos: PropTypes.array.isRequired,
        getProductos: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getProductos();
        this.props.getCuerpo();
        var cuerpos = JSON.parse(localStorage.getItem("cuerpos")).data;
        var largo = cuerpos.length
        this.props.productos.forEach(producto => {
            var monto = 0;
            for(var i = 0 ; i < largo; i++) {
                //console.log(cuerpos[i].producto);
                if(cuerpos[i].producto == producto.id) {
                    monto = monto + cuerpos[i].precio;
            }
            producto = {...producto, vendido: monto}
        }
            this.state.montos.push(monto);
        });

        console.log(this.state.montos);
    }
    
    
    
    render() {
        var contador = 0;
        return (
            <Fragment>
                <h2>Productos</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Existencia</th>
                            <th>Imagen</th>
                            <th>Monto vendido</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.productos.map(producto => (
                            <tr key={producto.id}>
                                <td>{(contador++)+1}</td>
                                <td>{producto.id}</td>
                                <td>{producto.nombre}</td>
                                <td>Q. {producto.precio}</td>
                                <td>{producto.existencia}</td>
                                <td><img src={producto.imagen} width="100"></img></td>
                                <td>Q. {this.state.montos[contador-1]}</td>
                                
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

export default connect(mapStateToProps, { getProductos, getCuerpo })
(Rep1);