import { useRecoilValue } from "recoil"
import { eventosFiltradosState } from "../seletores";

export const useListaValue = () => {
    return useRecoilValue(eventosFiltradosState);
}