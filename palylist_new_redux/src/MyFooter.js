import React, { Component } from 'react'
import { Link, BrowserRouter, Route,Switch } from "react-router-dom";
import {connect  } from "react-redux";
 class MyFooter extends Component {
  render() {
 console.log(this.props,"------length")
    return (
  <footer style={{display:this.props.length?"block":"none"}}>
      <div>
          <span style={{display:this.props.selectedLength>0?"inline-block":"none"}}>当前选中{this.props.selectedLength}首歌曲</span>
          <span>共{this.props.length}首歌曲</span>
      </div>
      <input type="button"  style={{display:this.props.length>0?"inline-block":"none"}}  value="删除选中歌曲"  onClick={()=>{
       this.props.dispatch({
          type:'REMOVE_SELECT'
       })
                      }}/>
      <input type="button"  style={{display:this.props.length>0?"inline-block":"none"}}     value="收藏选中歌曲"  onClick={
        ()=>{
          this.props.dispatch({
            type:'LIKE_SELECT'
          })
        }}/>
      <input type="button" style={{display:this.props.length>0?"inline-block":"none"}}  
      value="取消收藏选中歌曲" 
      onClick={()=>{
        this.props.dispatch({
          type:'REMOVE_LIKE'
        })
      }} />
      {/* <input type="button"  style={{display:(this.props.likeLength>0)?"inline-block":"none"}} onClick={()=>{
        this.props.likeListData()}}   
        value="查看收藏清单"/>
      <input type="button"  style={{display:(this.props.length>0)?"inline-block":"none"}} onClick={()=>{
        this.props.allListData()
      }}  value="查看所有清单" /> */}
      {this.props.pathName=="/"&&this.props.likeLength>0?<Link to="/like">查看收藏列表</Link>:''}
      {this.props.pathName=="/like"?<Link to="/">查看所有列表</Link>:''}

  </footer>
    )
  }
}
export default connect((state,props)=>{
  let data={};
  data.length=state.data.length;
  data.selectedLength=state.data.filter((item)=>{
return item.selected;
  }).length
data.likeLength=state.data.filter((item)=>{
  return item.like
}).length
  return data;
})(MyFooter)