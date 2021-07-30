const initialState = { 
    anchor: 'left',
    client: [],
    open: false,
    id: '',
    name: '',
    phone: '',
    location: ''
};
export function client(state = initialState, action) {
    switch (action.type) {
        case 'FETECHED_ALL_VENDOR':
            return {
                ...state,
                client: action.client
            };
        default:
            return state
     }
}