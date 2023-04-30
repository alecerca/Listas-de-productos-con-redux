import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from "../types";

//muestra alerta
export function mostrarAlerta(alerta) {
    return(dispatch) => {
        dispatch(mostrarAlertaError(alerta));
    }
}

const mostrarAlertaError = alerta => ({
    type: MOSTRAR_ALERTA,
    payload: alerta
});

//ocultar la alerta
export function ocultarAlertaAction (){
    return (dispatch) => {
        dispatch(ocultarAlerta());
    }
}

const ocultarAlerta = () => ({
    type: OCULTAR_ALERTA
});