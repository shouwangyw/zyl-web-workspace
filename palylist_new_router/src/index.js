import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, BrowserRouter, Route,Switch } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import List from "./List";


export default class Index extends Component {
    constructor(props) {
        super(props);
        this.nows = 1;
        this.state = {

            showList: true,
            data: [
                {
                    id: 0,
                    title: "空白格",
                    singer: "zyl",
                    selected: true,
                    like: true
                }
            ]
        }
    }

    // add=(title,singer)=>{
    //   debugger
    //   let data=this.state.data;
    //   data.push({
    //     title:title,
    //     singer:singer,
    //     selected:false,
    //     like:false
    //   })
    //   this.setState({
    //     data
    //   })
    // }
    add(title, singer) {

        let data = this.state.data;
        if (!title || !singer) {
            return
        }

        data.push({
            id: this.now,
            title: title,
            singer: singer,
            selected: false,
            like: false
        })
        this.now++;
        this.setState({
            data
        })

    }

    isCheckAll = () => {
        let data = this.state.data;
        debugger
        for (let i = 0; i < data.length; i++) {
            debugger
            if (!data[i].selected) {
                return false;
            }
        }
        return true;


    }

    setCheck = (index, checked) => {
        let data = this.state.data;
        data.forEach((val) => {
            if (val.id == index) {
                val.selected = checked;
            }
        })

        this.setState({
            data
        })
    }
    setLike = (index, like) => {
        let data = this.state.data;
        data.forEach((val) => {
            if (val.id == index) {
                val.like = like;
            }
        })
        this.setState({
            data
        })
    }
    remove = (index) => {
        let data = this.state.data.filter((val) => {
            return val.id != index
        });
        // data.splice(index,1);

        this.setState({
            data
        })
    }

    selectRemove = () => {
        let data = this.state.data.filter((val) => {
            return !val.selected
        })
        this.setState({
            data
        })
    }

    selectLike = () => {
        let data = this.state.data.map((val) => {
            if (val.selected) {
                val.like = true
            }
            return val
        })
        this.setState({
            data
        })
    }

    removeSelectLike = () => {
        let data = this.state.data.map((val) => {
            if (val.selected) {
                val.like = false
            }
            return val
        })
        this.setState({
            data
        })
    }
    setCheckAll = (checked) => {
        let data = this.state.data.map((val) => {
            val.selected = checked;
            return val;
        })

        this.setState({
            data
        })
    }

    //查看收藏清单
    likeListData = () => {
        this.setState({
            showList: false
        })
        // let data = this.state.data.filter((val) => {
        //   return val.like
        // })
        // this.setState({
        //   data
        // })
    }
    allListData = () => {
        this.setState({
            showList: true
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (!nextState.showList) {
            let likeData = nextState.data.filter((val) => { return val.like });
            if (likeData.length == 0) {
                this.setState({
                    showList: true
                })
                return false
            }
         
        }
        return true
    }

    render() {
        let data = this.state.data;
        let length = data.length;
        let selectData = data.filter((val) => {
            debugger
            return val.selected
        })

        let likeData = data.filter((val) => {
            return val.like
        })
        return (
            <BrowserRouter>
                <div>
                    <h1>首页</h1>
                    <nav>
                        <Link to="/">首页</Link>
                        <span>|</span>
                        <Link to="/add">添加页</Link>
                    </nav>
                    <hr></hr>
                    <Switch>
                    {/* <Route path="/add" component={List}></Route> */}
                    <Route path="/"  render={(e)=>{
              
                        return (
                            <Home  
                            pathName={e.location.pathname}
                            data={this.state.data}
                            isCheckAll={this.isCheckAll()}
                            checkAll={this.setCheckAll}
                            setCheck={this.setCheck}
                            setLike={this.setLike}
                            remove={this.remove}/>
                        )
                    }}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}


ReactDOM.render(<Index />, document.getElementById('root'))
