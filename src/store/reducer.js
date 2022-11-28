import * as types from './types';

export function reducer(state, action) {
    switch (action.type) {
        case types.openModalSavePinType:
            return {
                ...state,
                mode: 'savePin'
            }
        case types.closeModalType:
            return {
                ...state,
                mode: null
            }
        default:
            return state;
    }
}
