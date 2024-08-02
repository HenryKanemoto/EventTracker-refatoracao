import { useSetRecoilState } from "recoil"
import { listaDeEventosState } from "../atom"
import { IEvento } from "../../interfaces/IEvento";


export const useAtualizaEvento = () => {
    const setListaDeEventos = useSetRecoilState(listaDeEventosState);

    return (evento: IEvento) => {
        return setListaDeEventos(listaAntiga => {
            const indice = listaAntiga.findIndex(item => item.id === evento.id)
            return [
                ...listaAntiga.slice(0, indice),
                evento,
                ...listaAntiga.slice(indice + 1)
            ]
        })
    }
}