import React, { Component } from 'react'

export default class List extends Component {
  constructor(props){
    super(props);
    console.log(props.length)
    this.state={
      title:'',
      singer:""
    }
  }

  getBack(){

      if(this.props.length>0){
          return (
<a href="javascript:;"onClick={()=>{
            

            this.props.router.history.goBack()
}}>返回
            </a>
          )
      }
  }




  render() {
    return (
      <header>
        <h2 className="title">播放列表
        
{this.getBack()}
        
        </h2>
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
           console.log(this.state)
           this.setState({
             title:'',
             singer:''
           })
           this.props.router.history.push("/")
         }}
         />

      </header>
    )
  }
}