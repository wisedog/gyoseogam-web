import { Module } from 'vuex';
import { RootState } from '@/types/root';

const modules = {
};

const namespaced: boolean = true;

export const project: Module<null, RootState> = {
    namespaced,
    modules,
};
