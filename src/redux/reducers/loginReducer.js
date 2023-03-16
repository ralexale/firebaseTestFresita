import { loginTypes } from "../types/loginTypes";
const initialState = {
    user: {
        name: '',
        email: ''
    },
    error: {
        status: false,
        message: ''
    },
    loading: false,
    isLogged: false
}

export const loginReducer = (state = initialState, action ) =>{
    switch(action.type){
        case loginTypes.CREATE_USER:
            return {
                ...state,
                user: {
                    name: action.payload.user.name,
                    email: action.payload.user.email
                },
                error: {
                    status: action.payload.error.status,
                    message: action.payload.error.message
                }
            }
    
        case loginTypes.LOGIN_USER:
            return {
                ...action.payload
            }

        case loginTypes.LOGOUT_USER:
            return{
                ...initialState
            }  
        case loginTypes.TOGGLE_LOADING:
            return {
                ...state,
                loading: !state.loading
            }
        case loginTypes.TOGGLE_LOGIN:
            return {
               ...state,
                isLogged: !state.isLogged
            }

        default:
            return state;
    }
}