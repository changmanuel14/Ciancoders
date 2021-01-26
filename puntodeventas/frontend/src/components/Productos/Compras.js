import React, { Component, Fragment } from 'react'
import { connect, Link } from 'react-redux';
import PropTypes from 'prop-types';
import { getProductos1 } from '../../actions/productos';
import { Redirect } from 'react-router-dom';

export class Compras extends Component {
    state = {
        created: false
    };
    
    static propTypes = {
        productos: PropTypes.array.isRequired,
    }

    componentDidMount() {
        this.props.getProductos1();
        console.log(localStorage.getItem('user'));
        console.log(localStorage.getItem('userid'));
    }

    onsubmit = () => {
        var ids = [];
        var cantidades = [];
        var preciotot = [];
        var existencias = [];
        var cant = 0;

        this.props.productos.forEach(producto => {
            var aux = "cant" + producto.id; 
            cant = document.getElementById(aux).value;
            console.log(cant);
            if(cant != 0) {
                ids.push(producto.id);
                cantidades.push(cant);
                preciotot.push(cant*producto.precio);
                existencias.push(producto.existencia);
            }
          });

          localStorage.setItem("ids", JSON.stringify(ids));
          localStorage.setItem("cantidades", JSON.stringify(cantidades));
          localStorage.setItem("preciotot", JSON.stringify(preciotot));
          localStorage.setItem("existencias", JSON.stringify(existencias));
          this.setState({created: true});
    }
    
    render() {
        if(this.state.created) {
            return <Redirect to="/detalles" />
        }
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
                            <th>Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.productos.map(producto => {
                            if(producto.owner != localStorage.getItem('userid'))
                            return <tr key={producto.id}>
                                <td>{producto.id}</td>
                                <td>{producto.nombre}</td>
                                <td>Q. {producto.precio}</td>
                                <td>{producto.existencia}</td>
                                <td><img src={producto.imagen} width="100"></img></td>
                                <td>{producto.owner }</td>
                                <td><input type="number" min="0" max={producto.existencia} id={"cant"+producto.id} ></input></td>
                            </tr>
                        }) }
                    </tbody>
                    
                </table>
                <button className="btn btn-success" onClick={this.onsubmit}>
                    Aceptar
                </button>
                
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    productos: state.productos.productos
})

export default connect(mapStateToProps, { getProductos1 })
(Compras);
