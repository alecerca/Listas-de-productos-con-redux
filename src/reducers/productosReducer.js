import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_ERROR,
    AGREGAR_PRODUCTO_EXITO,
    COMENZAR_DESCARGA_PRODUCTO,
    DESCARGA_PRODUCTO_ERROR,
    DESCARGA_PRODUCTO_EXITO,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINAR_ERROR,
    PRODUCTO_ELIMINAR_EXITO,
    PRODUCTO_EDITADO_ERROR,
    PRODUCTO_EDITADO_EXITO,
    OBTENER_PRODUCTO_EDITAR
} from "../types";


//cada reducer tiene su propio state
const initialState = {
    productos: [],
    error: null,
    loading: false,
    productoeliminar: null,
    productoeditar: null
}

//eslint-disable-next-line
export default function(state = initialState, action){
    switch(action.type){

        case AGREGAR_PRODUCTO:
            return{
                ...state,
                loading: true
            }

        case AGREGAR_PRODUCTO_EXITO:
            return{
                ...state,
                loading: false,
                productos: [...state.productos, action.payload]
            }

        case PRODUCTO_EDITADO_ERROR:
        case AGREGAR_PRODUCTO_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }

        case COMENZAR_DESCARGA_PRODUCTO:
            return{
                ...state,
                loading: action.payload
            }

        case DESCARGA_PRODUCTO_EXITO:
            return{
                ...state,
                loading: false,
                error: null,
                productos: action.payload
            }

        case DESCARGA_PRODUCTO_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }

        case OBTENER_PRODUCTO_ELIMINAR:
            return{
                ...state,
                productoeliminar: action.payload
            }

        case PRODUCTO_ELIMINAR_EXITO: 
            return{
                ...state,
                productos: state.productos.filter( producto => producto.id !== state.productoeliminar),
                productoeliminar: null
            }
        case PRODUCTO_ELIMINAR_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }

        case OBTENER_PRODUCTO_EDITAR:
            return{
                ...state,
                productoeditar: action.payload
            }

        case PRODUCTO_EDITADO_EXITO:
            return{
                ...state,
                productoeditar: null,
                productos: state.productos.map(producto => 
                    producto.id === action.payload.id ? producto = action.payload : producto    
                )
            }
        default:
            return state;
    }
}