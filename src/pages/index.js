import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import styles from './index.less';
import Nav from './Menu/Nav';
import SidebarList from './Menu/SidebarList';
import { Router, Route, Switch,Redirect,routerRedux } from 'dva/router';
import Login from './Login';
import Alarm from './alarm';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function Pages({menu}) {
  return (
    <div className={styles.pages}>
			<Layout style={{ height: '100%' }}>
		    <Nav></Nav>
		    <Layout>
		    	{
		    		menu.open?<SidebarList></SidebarList>:null
		    	}
		      <Layout>
		        <Content style={{ background: '#f2f4f6', padding: 24, margin: 0, minHeight: 280 }}>
					        <Route path="/" exact component={Login} />
					        <Route path="/7" component={Alarm} />
		        </Content>
		      </Layout>
		    </Layout>
		  </Layout>
    </div>
  );
}

Pages.propTypes = {
};

function stateToProps({menu}){
	return {menu}
}

export default connect(stateToProps)(Pages);
