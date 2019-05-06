import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, BrowserRouter, Route,Switch,Redirect } from "react-router-dom";
import Home from "./Home";
import List from "./List";
import {connect} from  "react-redux"

 class App extends Component {
    render() {

        return (
            <BrowserRouter>
                <div>
                 <Switch>

                     <Route path="/add"   component={List}></Route>
                     <Route path="/"   render={(e)=>{
                         if(this.props.data.length==0){
                          return    <Redirect to="/add" />
                         }
                         return <Home router={e}/>
                     }}></Route>
                 </Switch>
                   
                </div>
            </BrowserRouter>
        )
    }
}


export default connect((state,props)=>{
console.log(state,props,"---------")
return  state
})(App)
