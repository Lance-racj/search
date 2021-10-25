import {SAVE} from '../constant'

export let createSaveAction=(data)=>{
    return {type:SAVE,data:data};
}