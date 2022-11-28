import * as types from './types';
import * as pinService from '../services/pinServices';

export const openModalSavePinAction = () => ({
    type: types.openModalSavePinType
});

export const closeModalsAction = () => ({
    type: types.closeModalType
});

export const fetchFoldersInitAction = async () => ({
    type: types.fetchFoldersInitType
});

export const fetchFoldersSuccessAction = async (folders) => ({
    type: types.fetchFoldersSuccessType,
    payload: folders
});

export const fetchFoldersAction = async (dispatch) => {
    dispatch(fetchFoldersInitAction());
    const folders = await pinService.getFolders();
    dispatch(fetchFoldersSuccessAction(folders));
}