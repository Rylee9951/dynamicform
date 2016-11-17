const DefaultState = {
	form: []
}

export default function(state = DefaultState, action){
	switch(action.type){
		case 'GET_FORM':
			return {...state, form: action.form}

		default:
			return state
	}
}