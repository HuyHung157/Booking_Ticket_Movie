import * as ActionTypes from "./../contants/ActionTypes";
const initialState = {
    infoUser: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SIGN_IN:
            localStorage.setItem("User", JSON.stringify(action.infoUser));
            state.infoUser = action.infoUser;
            return { ...state };
        case ActionTypes.SIGN_OUT:
            localStorage.removeItem("User");
            state.infoUser = null;
            return { ...state };
        default:
            let _infoUser = JSON.parse(localStorage.getItem("User"));
            state.infoUser = _infoUser;
            return { ...state };
    }
};

export default authReducer;