import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addProducto, editProducto, getProductos } from '../../actions/productos';


export class Form extends Component {
    state = {
        id: 0,
        nombre: '',
        existencia: 0,
        precio: 0,
        imagen: '',
    };

    static propTypes = {
        productos: PropTypes.array.isRequired,  
        addProducto: PropTypes.func.isRequired,
        editProducto: PropTypes.func.isRequired
    };

    componentDidMount() {
      this.props.getProductos();
    };
    
    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onChangeData = e => {
      this.setState({ [e.target.name]: e.target.value });
      this.props.productos.forEach(producto => {
        if(producto.id == e.target.value){
          this.setState({nombre: producto.nombre});
          this.setState({precio: producto.precio});
          this.setState({existencia: producto.existencia});
          this.setState({imagen: producto.imagen});
        }
      });
    }
    

    onSubmitAdd = e => {
        let idusuario = localStorage.getItem('userid');
        e.preventDefault(); 
        const { nombre, precio, existencia, imagen } = this.state;
        const producto = {nombre, precio, existencia, imagen};
        this.props.addProducto(producto);
    };

    onSubmitEdit = e => {
      e.preventDefault(); 
      const { id, nombre, precio, existencia, imagen} = this.state;
      const producto = {nombre, precio, existencia, imagen};
      this.props.editProducto(id, producto);
  };
    render() {
        const { id, nombre, precio, existencia, imagen } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
        <h2>Agregar/Editar Producto</h2>
        <form>
        <div className="form-group">
            <label>ID</label>
            <input
              className="form-control"
              type="number"
              name="id"
              onChange={this.onChangeData}
              value={id}
            />
          </div>
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
            <button type="submit" className="btn btn-primary"  onClick={this.onSubmitAdd}>
              Nuevo
            </button>
            <button type="submit" className="btn btn-primary"  onClick={this.onSubmitEdit}>
              Editar
            </button>
          </div>
        </form>
      </div>
        )
    }
}

const mapStateToProps = state => ({
  productos: state.productos.productos
})

export default connect(mapStateToProps, { addProducto, editProducto, getProductos })(Form);
