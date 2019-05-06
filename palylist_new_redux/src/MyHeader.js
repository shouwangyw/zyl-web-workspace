import React, { Component } from 'react'

export default class MyHeader extends Component {
  constructor(props){
    super(props);
    this.state={
      title:'',
      singer:""
    }
  }
  render() {
    return (
      <header>
        <h2 className="title">播放列表</h2>
        <input type="text" 
        placeholder="输入歌曲名字" 
        value={this.state.title}
        onChange={(e)=>{this.setState({
          title:e.target.value
        })}}
        />
        <input type="text" 
        placeholder="输入歌手名字" 
        value={this.state.singer}
        onChange={(e)=>{this.setState({
          singer:e.target.value
        })}}
        />
        <input type="button"
         value="添加音乐" 
         onClick={()=>{
           this.props.add(this.state.title,this.state.singer);
           debugger
           console.log(this.state)
           this.setState({
             title:'',
             singer:''
           })
         }}
         />

      </header>
    )
  }
}
