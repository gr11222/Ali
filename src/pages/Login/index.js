import React,{Component} from 'react';

function Login({Child}) {
	if(!Child){

		return <div></div>
	}
  return class PP extends Component{
  		render(){
  			return <Child {...this.props}></Child>	
  		}
  	}
}

function Child(props) {
	return(
			<div>22222</div>
		)
}


export default Login;
