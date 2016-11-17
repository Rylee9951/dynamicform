import axios from 'axios'
import store from 'store'
import {hashHistory} from 'react-router'

axios.defaults.baseURL = 'http://localhost:8001/'

export function getForm(){
	return axios.get("form").then(function(resp){
		console.log(resp.data)
		store.dispatch({
			type: 'GET_FORM',
			form: resp.data
		})
	})
}