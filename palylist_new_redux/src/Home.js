import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Main from "./Main"
import Item from "./Item"
import Footer from "./MyFooter"
import { connect } from "react-redux";

class All extends Component {
    render() {
        return (
            <h3>所有列表1</h3>
        )
    }
}
class Like extends Component {
    render() {
        return (
            <h3>所有列表2</h3>
        )
    }
}

class Home extends Component {
    render() {
        let props = this.props;
        let data = props.data;

        // let length = data.length;
        // let selectData = data.filter((val) => {
        //   return val.selected
        // })
        let likeData = data.filter((val) => {
            return val.like
        })
        console.log(likeData.length)
        let pathName = props.router.location.pathname;
        return (
            <div>
                <h2>{pathName == "/" ? "播放" : "收藏"}列表

                <Link to="/add">添加歌曲</Link>

                </h2>
           
                    <Route path="/" exact component={Main} />
                    <Route path="/like" render={(e) => {
                        // let len=data.filter((item)=>{
                        //     return item.like;
                        // }).length;
                        // console.log(len,"长度")
                        //    if(data.filter((item)=>{
                        //        return item.like
                        //     }).length==0){
                        //         console.log("跳转")
                        //     return    <Redirect to="/add"/>
                        //     // 
                        //    }

                        // console.log("jinlai---------")
                        // if (likeData.length == 0) {
                        //     return <Redirect to="/" />
                        // } else {

                        //     return <Main location={e.location} />
                        // }
                        return likeData.length?<Main location={e.location}/>:<Redirect to="/"/>
                    }

                    } />

              
                <Footer pathName={pathName} />
            </div>
        )
    }
}

export default connect((state, props) => {
    return state
})(Home)