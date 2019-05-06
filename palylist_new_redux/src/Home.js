import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, BrowserRouter, Route,Switch,Redirect } from "react-router-dom";
import Main from "./Main"
import Item from "./Item"
import Footer from "./MyFooter"

class All extends Component{
    render(){
        return (
            <h3>所有列表1</h3>
        )
    }
}
class Like extends Component{
    render(){
        return (
            <h3>所有列表2</h3>
        )
    }
}

export default class Home extends Component {
    render() {
        let props=this.props;
        let data = props.data;
        let length = data.length;
        let selectData = data.filter((val) => {
          debugger
          return val.selected
        })
    
        let likeData = data.filter((val) => {
          return val.like
        })

        let pathName=props.pathName;
        return (
            <div>
                <h2>{pathName=="/"?"播放":"收藏"}列表
                
                <Link to="/add">添加歌曲</Link>
                </h2>
                <nav>
                    <Link to="/">所有列表</Link>
                    <span>|</span>
                    <Link to="/like">收藏列表</Link>
                </nav>
            
                <Route path="/" exact  render={()=>{
                    debugger
                    return (
                        <Main
                          data={props.data}
                        isCheckAll={props.isCheckAll}
                        checkAll={props.checkAll}
                        setCheck={props.setCheck}
                        setLike={props.setLike}
                        remove={props.remove}/>
                    )
                }}></Route>
                 <Route path="/like" exact  render={()=>{
                     if(likeData.length==0){
                         return <Redirect to="/"/>
                     }
                    return (
                        <Main
                          data={likeData}
                        isCheckAll={props.isCheckAll}
                        checkAll={props.checkAll}
                        setCheck={props.setCheck}
                        setLike={props.setLike}
                        remove={props.remove}/>
                    )
                }}></Route>
           <Footer
           pathName={pathName}
           length={props.data.length}
           likeLength={likeData.length}
           showList={props.showList}
           selectedLength={selectData.length}
           selectRemove={props.selectRemove}
           removeSelectLike={props.removeSelectLike}
           selectLike={props.selectLike}
           likeListData={props.likeListData}
           allListData={props.allListData}
           />
            </div>
        )
    }
}