import React, { Component } from 'react'
import { connect } from "react-redux";
 class Item extends Component {
  render() {
      let data=this.props.data;
      console.log(this.props)
    return (
  
            <tr className={(data.selected?'selected':'')+(data.like?' like':'')}>
                <td>
                    <input type="checkbox" checked={data.selected} 
                     onChange={(e)=>{
                         this.props.dispatch({
                             type:'CHECK',
                             id:data.id,
                             check:e.target.checked
                         })
                                // this.props.setCheck(this.props.index,e.target.checked)
                    }}/>
                </td>
                <td>{data.title}</td>
                <td>{data.singer}</td>
                <td>
                    <input type="checkbox" checked={data.like} 
                    onChange={(e)=>{
                        this.props.dispatch({
                            type:'LIKE',
                            id:data.id,
                           like:e.target.checked
                        })
                      //  this.props.setLike(this.props.index,e.target.checked)
                    }}/>
                </td>
                <td>
                    <a href="javascript:;"
                     onClick={()=>{
                         console.log(this.props)
                         this.props.dispatch({
                             type:'REMOVE',
                           id:data.id
                         })
                        }}
                        // this.props.remove(this.props.index)}}
                        >X</a>
                </td>
            </tr>
          
          
           
    )
  }
}
export default connect((state,props)=>{
    let data={};
    
   state.data.forEach(item => {
       
  if(props.id==item.id){

      data.data={...item};
  }
 
})


    return  data
})(Item)
