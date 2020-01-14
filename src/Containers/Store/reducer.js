


const ALL_STATE={
    login : false
    }
    function reducer(state = ALL_STATE, action){
        switch(action.type){
    case "login" : 
    return {
    ...state, login : action.login
    }
        }
        return state
    }
    export default reducer