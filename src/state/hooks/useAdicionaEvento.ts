import { useSetRecoilState } from "recoil"
import { listaDeEventosState } from "../atom"
import { IEvento } from "../../interfaces/IEvento";
import { obterId } from "../../utils";

export  const useAdicionaEvento = () => {

    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);
    return (evento: IEvento) => {       
        const hoje = new Date();
        if(evento.inicio < hoje){
            throw new Error('Eventos novos não podem ser cadastrados antes da data atual')
        }
        evento.id = obterId() 
        return setListaDeEventos(listaAntiga => [...listaAntiga, evento])
    }
}