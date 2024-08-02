import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import IFiltro from "../interfaces/IFiltro";
import { eventosAPI } from "./seletores";

export const listaDeEventosState = atom<IEvento[]>({
    key: 'listaDeEventosState',
    default: eventosAPI
})

export const filtroDeEventos = atom<IFiltro>({
    key: 'filtroDeEventos',
    default: {}
})