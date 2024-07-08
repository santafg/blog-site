import { RootState } from "@/redux-toolkit/store/store";
import { useSelector, TypedUseSelectorHook } from "react-redux";
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;