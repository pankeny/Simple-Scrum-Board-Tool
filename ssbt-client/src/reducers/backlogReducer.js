import {GET_BACKLOG, GET_PROJECT_TASK, DELETE_PROJE0CT_TASK} from "../actions/types";

const initialState = {
    project_tasks: [],
    project_task: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_BACKLOG : {
            return {
                ...state,
                project_tasks: action.payload
            }
        }
        case GET_PROJECT_TASK : {
            return {
                ...state,
                project_task: action.payload
            }
        }

        case DELETE_PROJE0CT_TASK : {
            return {
                ...state

                // ToDo : end action for delete project task
            }
        }
        default:
            return state;
    }
}