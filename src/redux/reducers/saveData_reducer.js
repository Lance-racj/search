import {SAVE} from '../constant'

const init = [];

export default function usersReducer(pre=init,action){

    let {type,data} = action;
    switch(type){
        case SAVE:
            return data;
        default:
            return pre;
    }
}