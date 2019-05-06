import React, { Component } from 'react'
import MyHeader from "./MyHeader";
import Main from "./Main";
import MyFooter from "./MyFooter";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.nows=1;
    this.state = {

      showList: true,
      data: [
        {
          id:0,
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
      id:this.now,
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
    data.forEach((val)=>{
      if(val.id==index){
        val.selected= checked;
      }
    })

    this.setState({
      data
    })
  }
  setLike = (index, like) => {
    let data = this.state.data;
    data.forEach((val)=>{
      if(val.id==index){
        val.like= like;
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
      showList:false
    })
    // let data = this.state.data.filter((val) => {
    //   return val.like
    // })
    // this.setState({
    //   data
    // })
  }
  allListData=()=>{
    this.setState({
      showList:true
    })
  }

  shouldComponentUpdate(nextProps,nextState){
        if(!nextState.showList){
          let likeData=nextState.data.filter((val)=>{return val.like});
          if(likeData.length==0){
            this.setState({
              showList:true
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
      <div >
        {/* < MyHeader add={this.add} ></MyHeader> */}
        < MyHeader add={(title, singer) => this.add(title, singer)} ></MyHeader>
        <Main
          data={this.state.showList?this.state.data:likeData}
          isCheckAll={this.isCheckAll()}
          checkAll={this.setCheckAll}
          setCheck={this.setCheck}
          setLike={this.setLike}
          remove={this.remove}
        ></Main>
        <MyFooter
         length={this.state.data.length}
          likeLength={likeData.length}
          showList={this.state.showList}
          selectedLength={selectData.length}
          selectRemove={this.selectRemove}
          removeSelectLike={this.removeSelectLike}
          selectLike={this.selectLike}
          likeListData={this.likeListData}
          allListData={this.allListData}
        ></MyFooter>
      </div>
    )
  }
}
