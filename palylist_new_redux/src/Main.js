import React, { Component } from 'react'
import Item from "./Item";
import { connect } from "react-redux";
class Main extends Component {
  render() {
    let data = this.props.data;

    return (
      <div>
        <table className="main" style={{ display: data.length ? 'table' : 'none' }}>
          <thead>
            <tr>
              <th>
                <input type="checkbox"
                  id="checkAll"
                  checked={this.props.isCheckAll}
                  onChange={(e) => {
                    this.props.dispatch(
                      {
                        type: 'CHECKALL',
                        check: e.target.checked
                      })
                  }
                  }
                />
                <label htmlFor="checkAll"  >全选</label>
              </th>
              <th>歌曲</th>
              <th>歌手</th>
              <th>收藏</th>
              <th>删除</th>
            </tr>
          </thead>
          <tbody>
            {data.map((val, index) => {
              return (<Item
                key={index}
                id={val.id}

              />)
            })}
          </tbody>


        </table>
      </div>
    )
  }
}

export default connect((state, props) => {
  let isCheckAll = (function () {
    for (let i = 0; i < state.data.length; i++) {
      if (!state.data[i].selected) {
        return false;
      }
    }
    return true;
  })()

  let pathName = props.location.pathname;
  let newObj = {};
  if (pathName == "/") {

    newObj = { ...state, isCheckAll }
  }
  if (pathName == "/like") {
    let a = {};
    //对象是值传递
    a.data = state.data.filter((item) => {
      return item.like;
    })
    console.log(a.data, "----a.data")
    newObj = { ...a, isCheckAll }
  }
  return newObj
})(Main)