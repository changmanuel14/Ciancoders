import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addProducto } from '../../actions/productos';


export class Form extends Component {
    state = {
        nombre: '',
        existencia: 0,
        precio: 0,
        imagen: '',
        vendedor: 1,
    }

    static propTypes = {
        addProducto: PropTypes.func.isRequired
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault(); 
        const { nombre, precio, existencia, imagen, vendedor } = this.state;
        const producto = {nombre, precio, existencia, imagen, vendedor};
        this.props.addProducto(producto);
    };
    render() {
        const { nombre, precio, existencia, imagen, vendedor } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
        <h2>Agregar Producto</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Nombre</label>
            <input
              className="form-control"
              type="text"
              name="nombre"
              onChange={this.onChange}
              value={nombre}
            />
          </div>
          <div className="form-group">
            <label>Precio</label>
            <input
              className="form-control"
              type="number"
              name="precio"
              step="any"
              onChange={this.onChange}
              value={precio}
            />
          </div>
          <div className="form-group">
            <label>Existencia</label>
            <input
              className="form-control"
              type="number"
              name="existencia"
              onChange={this.onChange}
              value={existencia}
            />
          </div>
          <div className="form-group">
            <label>Imagen</label>
            <input
              className="form-control"
              type="text"
              name="imagen"
              onChange={this.onChange}
              value={imagen}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Aceptar
            </button>
          </div>
        </form>
      </div>
        )
    }
}

export default connect(null, { addProducto })(Form);
