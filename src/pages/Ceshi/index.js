import React,{Component} from 'react';
import propTypes from 'prop-types'
import {menus , users} from '../../services/example'
import CeshiItem from './CeshiItem'
import { Spin } from 'antd';
import { Button, Menu, Dropdown, Icon } from 'antd';

class Ceshi extends Component {
  constructor(){
    super()
    this.state={
      arr:[]
    }
  }
  componentWillMount(){
    menus().then((data)=>{
      this.setState({
        arr:data.data.menus
      })
    }) 
    users().then(response=>{
       response.json().then(function(data){      //将response进行json格式化
            console.log(data);                        //打印
          }); 
    })
  }
  render(){
    return (
      <div className='ceshi'>
        {
          this.state.arr.length===0?<div><Spin /></div>:this.state.arr.map((item)=><CeshiItem key={item.menuId} list={item}></CeshiItem>)
        }
      </div>
    );
  }
}

Ceshi.propTypes = {
};

export default Ceshi;
