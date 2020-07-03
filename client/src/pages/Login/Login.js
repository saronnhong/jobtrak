import React, { Component } from 'react';
import AuthService from './../../components/AuthService';
import "./style.css";

class Login extends Component {
    constructor() {
        super();
        this.Auth = new AuthService();
      }
    state = {
        login: {
            user: "",
            password: "",
            checkbox: false
        }
    }
    componentDidMount(){
        const isSaved = localStorage.getItem('saved_user');
        if(isSaved){
            this.setState({login: {user: isSaved, checkbox: true}})
        }
    }
    
    logInSubmit = (event) => {
        // event.preventDefault();
        if(this.state.login.checkbox){
            localStorage.setItem('saved_user', this.state.login.user);
            
        }else{
            localStorage.removeItem('saved_user');
        };
        this.Auth.login(this.state.login.user, this.state.login.password)
            .then(res => {
                
                
                // once user is logged in
                // take them to their profile page
                this.props.history.replace(`/`);
                window.location.reload();
            })
            .catch(err => {
                alert(err.response.data.message)
            });
    }
    toggleCheckboxChange = () => {
        this.setState({login: {...this.state.login, checkbox: !this.state.login.checkbox}});
        
    }

    render() {
        const { login } = this.state;
        return (
            <div className="loginContainer z-depth-3">
                <div className="row">
                    <div className="loginTitle">Login</div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="user" type="text" className="validate" value={login.user} onChange={e => this.setState({ login: { ...login, user: e.target.value } })} />
                        <label for="user">User</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="password" type="password" className="validate" value={login.password} onChange={e => this.setState({ login: { ...login, password: e.target.value } })} />
                        <label for="password">Password</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col s6">
                        <label>
                            <input id="checkbox" type="checkbox" checked={login.checkbox} onChange={()=> this.toggleCheckboxChange()}/>
                            <span><label for="checkbox">Remember me</label></span>
                        </label>
                    </div>
                    <div className="col s6">
                        <div className="forgotPasswordLink">Forgot Password?</div>
                    </div>
                </div>
                <div className="row center">
                    <button class="waves-effect btn loginBtn hvr-sweep-to-right-login #40c4ff light-blue accent-2" onClick={() => this.logInSubmit()}>Login</button>
                </div>
                <div className="row center">
                    <div className="forgotPasswordLink ">
                        <a href="/signup">Not a member yet? Create your Account  </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;