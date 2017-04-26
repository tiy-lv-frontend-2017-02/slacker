const initialState = {
    messages: [],
    username: ''
}

export default function messageReducer(state=initialState, action) {
    switch (action.type) {
        case 'LOGIN':
            return {...state, username: action.username}
        case 'ADD_MESSAGE':
            return {...state, messages: [...state.messages, action.message]}
        default:
            return state
    }
}