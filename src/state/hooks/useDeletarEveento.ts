// src\state\hooks\useDeletarEvento.ts

import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { listaDeEventosState } from "../atom";

export const useDeletarEvento = () => {
  const setListaEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);
  return (evento: IEvento) => {

    setListaEventos((listaAntiga) => [
      ...listaAntiga.filter(evt => evento.id !== evt.id)
    ])
  }
}
