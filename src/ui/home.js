import React from 'react';
import { Link, hashHistory } from 'react-router';
import {getForm} from 'api/apiform'
import store from 'store'
import 'font-awesome/css/font-awesome.css'

const FormListContainer = React.createClass({
	getInitialState: function(){
		return{
			form: []
		}
	},
	componentWillMount: function(){
		getForm()

		this.unsubscribe = store.subscribe(() =>{
			const appState = store.getState()
			this.setState({
				form: appState.form
			})
			// console.log('component state.form', this.state.form)
		})
	},
	componentWillUnmount: function(){
		this.unsubscribe()
	},
	render: function(){
		return(
			<FormList form={this.state.form}/>
			)
	}
})
const FormList = React.createClass({
  render: function() {
    return (
    	<div className="container">
    		<div className="header">
    			<h1>Sign Up For My Web App</h1>
    		</div>
    		<div className="feilds">
    			{this.props.form.map(item =>{
    				if(item.type === 'text'){
    					return <input id={item.id} type={item.type} placeholder={item.label}></input>
    				}else if(item.type === 'tel'){
    					return <input id={item.id} type={item.type} placeholder={item.label}></input>
    				}else if(item.type === 'email'){
    					return <input id={item.id} type={item.type} placeholder={item.label}></input>
    				}else if(item.type === 'select'){
    					return <select id={item.id}>
 								<option value='choose'>{item.label}</option>
                                {item.options.map(label =>{
                                    return(
                                    <option value={label.value}>{label.label}</option>
                                )
                                })}
 							</select>
    				}else{return <textarea id={item.id} placeholder={item.label}></textarea>}
    				return (

    					<div key={item.id}>	
	    					
	    				</div>
    				)
    				
    			})}
    		</div>
    		<div className="footer">
    			<button>Submit</button>
    		</div>
    	</div>
     
    )
  }
})

export default FormListContainer



