import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

//redux
import { useDispatch } from 'react-redux';
import { borrarProductoAction, obtenerProductoEditar } from '../action/productoActions';

const Producto = ({producto}) => {
    const { nombre, precio, id } = producto;

    const dispatch = useDispatch();
    const history = useNavigate();

    //confirmar si desea eliminar
    const confirmarEliminarProducto = id => {

        //preguntar al usuario
        Swal.fire({
            title: '¿Estas seguro?',
            text: "¡No podras revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminalo',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if(result.value){
                //pasarlo al action
                dispatch(borrarProductoAction(id));
            }
        });
    }

    const redireccionarEdicion = producto => {
        dispatch(obtenerProductoEditar(producto));
        history(`/productos/editar/${producto.id}`)
    }

    return (  
        <tr>
            <td>{nombre}</td>
            <td><span className='font-weight-bold'>$ {precio}</span></td>
            <td className='acciones'>
                <button 
                    type='button'
                    onClick={() => redireccionarEdicion(producto)}
                    className='btn btn-primary mr-2'
                >
                    Editar
                </button>
                <button
                    type='button'
                    className='btn btn-danger'
                    onClick={() => confirmarEliminarProducto(id)}
                >Eliminar</button>
            </td>
        </tr>
    );
}
 
export default Producto;