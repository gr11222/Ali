import React from 'react';
import { connect } from 'dva';
import {Link,routerRedux} from 'dva/router';
import { Layout, Menu } from 'antd';
import styles from './Nav.less';
const { Header} = Layout;

function Nav({dispatch,menu}) {
	return(
		<Header className={`header ${styles.menuList}`}>
	      <div className="logo" />
	      <Menu
	        theme="dark"
	        mode="horizontal"
	        defaultSelectedKeys={menu.menuList.length===0?"":[menu.menuList[0].menuId.toString()]}
	        onClick={(item)=>{go(item.item.props.link,item.item.props.data)}}
	        style={{ lineHeight: '70px',background: '#182A3A',boxShadow: '0 2px 4px 0 rgba(0,0,0,0.15)' }}
	      >
	      	{
	      		menu.menuList.length===0?<div></div>:menu.menuList.map((item)=>{
		      			return(
		      				<Menu.Item link={!item.link?(!item.children?'':(!item.children[0].link?item.children[0].children[0].menuId:item.children[0].menuId)):item.menuId} data={item.children} key={item.menuId.toString()}>{item.menuName}</Menu.Item>
		      				)
	      			}
	      		)
	      	}
	      </Menu>
	    </Header>
		)
	function go(item,arr){		
		dispatch(routerRedux.push(`/${item}`));
		if(arr){
			dispatch({
			  type: 'menu/setSidebar',
		      payload: arr,
			})
			dispatch({
			  type: 'menu/isSidebar',
		      payload: true,
			})
		}else{
			dispatch({
			  type: 'menu/setSidebar',
		      payload: [],
			})
			dispatch({
			  type: 'menu/isSidebar',
		      payload: false,
			})
		}
	}
}


function stateToProps({menu}){
	return {menu}
}

export default connect(stateToProps)(Nav)