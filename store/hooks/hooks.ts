import { TypedUseSelectorHook, useSelector } from "react-redux";
import store from "..";

type RootStateStates = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootStateStates> = useSelector;