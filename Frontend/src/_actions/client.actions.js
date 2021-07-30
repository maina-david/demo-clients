import { userService } from '../_services/';
// import { history } from '../_helpers';
export const clientAction = {
    getClient
};
function getClient(){
    return dispatch => {
        let apiEndpoint = 'clients';
        userService.get(apiEndpoint)
        .then((response)=>{
            dispatch(changeClientsList(response.data.clients));
        }).catch((err)=>{
            console.log(err);
        })
    };
}
export function changeClientsList(client){
    return{
        type: "FETCHED_ALL_CLIENT",
        client: client
    }
}