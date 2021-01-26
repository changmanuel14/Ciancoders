import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { addEncabezado, addCuerpo, editExistencia} from '../../actions/productos';

export class Detallecompra extends Component {
    state = {
        nombre: '',
        direccion: '',
        nit: '',
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        const {nombre, direccion, nit} = this.state;
        var ids = JSON.parse(localStorage.getItem("ids"));
        var cantidades = JSON.parse(localStorage.getItem("cantidades"));
        var preciotot = JSON.parse(localStorage.getItem("preciotot"));
        var existencias = JSON.parse(localStorage.getItem("existencias"));

        var precioT = 0;
        preciotot.forEach(precio => {
            precioT = precioT + precio
          });

        const data = {
            nombre, 
            direccion, 
            nit,
            precioT
          }

        this.props.addEncabezado(data);
        var idEnc = localStorage.getItem('idEncabezado');
        console.log("encabezado: "+idEnc);
        var largo = ids.length;

        for(var i = 0; i < largo; i++){
            var encabezado = idEnc;
            var producto = ids[i];
            var cantidad = cantidades[i];
            var precio = preciotot[i];
            var newExistencias = existencias[i] - cantidades[i];
            const data1 = {
                encabezado, 
                producto, 
                cantidad,
                precio
              };
              console.log(data1);
              this.props.addCuerpo(data1);
              this.props.editExistencia(producto, newExistencias);
        }
      };
    
    render() {
        const { nombre, direccion, nit} = this.state;
        return (
            <div className="col-md-6 m-auto">
                <div className="card card-body mt-5">
                    <h2 className="text-center">Datos de facturacion</h2>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Nombre</label>
                            <input type="text" className="form-control" name="nombre" onChange={this.onChange} value={nombre} />
                        </div>
                        <div className="form-group">
                            <label>Direccion</label>
                            <input type="text" className="form-control" name="direccion" onChange={this.onChange} value={direccion} />
                        </div>
                        <div className="form-group">
                            <label>Nit</label>
                            <input type="text" className="form-control" name="nit" onChange={this.onChange} value={nit} />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">
                                Aceptar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = state => ({
    productos: state.productos.productos
})

export default connect(mapStateToProps, { addEncabezado, addCuerpo, editExistencia })
(Detallecompra);
