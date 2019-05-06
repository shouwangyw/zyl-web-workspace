import React, { Component } from 'react'

export default class MyFooter extends Component {
  render() {
    return (
  <footer style={{display:this.props.length?"block":"none"}}>
      <div>
          <span style={{display:this.props.selectedLength>0?"inline-block":"none"}}>当前选中{this.props.selectedLength}首歌曲</span>
          <span>共{this.props.length}首歌曲</span>
      </div>
      <input type="button"  style={{display:this.props.length>0?"inline-block":"none"}}  value="删除选中歌曲"  onClick={()=>{
       
                        this.props.selectRemove()}}/>
      <input type="button"  style={{display:this.props.length>0?"inline-block":"none"}}     value="收藏选中歌曲"  onClick={()=>{this.props.selectLike()}}/>
      <input type="button" style={{display:this.props.length>0?"inline-block":"none"}}  value="取消收藏选中歌曲" onClick={()=>{this.props.removeSelectLike()}} />
      <input type="button"  style={{display:(this.props.showList&&this.props.likeLength>0)?"inline-block":"none"}} onClick={()=>{
        this.props.likeListData()}}   
        value="查看收藏清单"/>
      <input type="button"  style={{display:(!this.props.showList&&this.props.length>0)?"inline-block":"none"}} onClick={()=>{
        this.props.allListData()
      }}  value="查看所有清单" />

  </footer>
    )
  }
}
