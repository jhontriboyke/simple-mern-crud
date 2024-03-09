import { createContext, useReducer } from 'react';

export const AuthContext = createContext();

const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN': {
            return {
                user: action.payload,
            };
        }
        case 'LOGOUT': {
            return {
                user: null,
            };
        }

        default:
            return state;
    }
};

const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null || JSON.parse(localStorage.getItem('user')),
    });
    console.log('Authcontext : ', state.user);
    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
