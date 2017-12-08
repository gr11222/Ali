import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Icon } from 'antd';
import {Link} from 'dva/router';
const { SubMenu } = Menu;
const { Sider } = Layout;

function SidebarList({menu}) {
	// console.log(menu.sidebarList[0].children?menu.sidebarList[0].children[0].menuId.toString():menu.sidebarList[0].menuId.toString())
	return(
			<Sider width={200} style={{ background: '#fff' }}>
				<Menu
				  key={menu.sidebarList[0].children?menu.sidebarList[0].children[0].menuId.toString():menu.sidebarList[0].menuId.toString()}
				  mode="inline"
				  defaultSelectedKeys={[menu.sidebarList[0].children?menu.sidebarList[0].children[0].menuId.toString():menu.sidebarList[0].menuId.toString()]}
				  defaultOpenKeys={[menu.sidebarList[0].children?menu.sidebarList[0].menuId.toString():""]}
				  style={{ height: '100%', borderRight: 0 }}
				>
				{
					menu.sidebarList.map(item=>{
						return(
							!item.hasChild?<Menu.Item key={item.menuId.toString()}> <Link to={`/${item.menuId}`}>{item.menuName}</Link> </Menu.Item>:
								<SubMenu key={item.menuId.toString()} title={<span>{item.menuName}</span>}>
									{
										!item.hasChild?null:item.children.map(item=>{
											return(
													<Menu.Item key={item.menuId.toString()}><Link to={`/${item.menuId}`}>{item.menuName}</Link></Menu.Item>
												)
										})
									}
								</SubMenu>
							)
					})
				}
				</Menu>
			</Sider>
		)
}

function stateToProps({menu}){
	return {menu}
}
export default connect(stateToProps)(SidebarList)




