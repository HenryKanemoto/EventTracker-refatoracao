import { selector } from "recoil";
import { filtroDeEventos, listaDeEventosState } from "./atom";
import { IEvento } from "../interfaces/IEvento";

export const eventosFiltradosState = selector({
    key: 'eventosFiltradosState',
    get: ({get}) => {
        const todosEventos = get(listaDeEventosState);
        const filtro = get(filtroDeEventos);
        const eventos =  todosEventos.filter(evento => {
            if(!filtro.data){
              return true
            }
            const ehMesmoDia = filtro.data.toISOString().slice(0, 10) === evento.inicio.toISOString().slice(0, 10);
            return ehMesmoDia;
          })
        return eventos;
    }
})

export const eventosAPI = selector({
    key: 'eventosAsync',
    get: async () => {
        const respostaHttp = await fetch('http://localhost:8000/eventos');
        const eventosJson: IEvento[] = await respostaHttp.json();
        return eventosJson.map(evento => (
            {
                ...evento,
                inicio: new Date(evento.inicio),
                fim: new Date(evento.fim)
            }
        ))
    }
})