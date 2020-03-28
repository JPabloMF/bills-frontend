import {SAVE_LOGIN, CLEAN_LOGIN} from "./types";

export const saveLogin = (data) =>({type:SAVE_LOGIN,data});

export const cleanLogin = ()=>({type:CLEAN_LOGIN});
