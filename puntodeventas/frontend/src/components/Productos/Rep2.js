import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProductos, getCuerpo } from '../../actions/productos';

export class Rep2 extends Component {
    state = {
        montos: [],
        suma: 0
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
                if(cuerpos[i].producto == producto.id) {
                    monto = monto + cuerpos[i].precio;
            }
            producto = {...producto, vendido: monto}
        }
            this.state.montos.push(monto);
            this.state.suma = this.state.suma + monto;
        });

        console.log(this.state.suma);
    }
    
    
    
    render() {
        var contador = 0;
        return (
            <Fragment>
                <h2>Ventas globales del vendedor</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID vendedor</th>
                            <th>Username</th>
                            <th>Monto vendido</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{localStorage.getItem('userid')}</td>
                            <td>{localStorage.getItem('user')}</td>
                            <td>Q. {this.state.suma}</td>
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
(Rep2);