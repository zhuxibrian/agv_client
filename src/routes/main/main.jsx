import React, { PropTypes } from 'react';
import { connect } from 'dva';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

const Main = ({
  children,
  dispatch,
  currentAccount,
  currentCollapsed,
  currentMode,
}) => {
  function handleChangeLayoutState() {
    dispatch({ type: 'main/changeLayoutState', payload: { collapsed: currentCollapsed } });
  }
  function handleChangePage(data) {
    const { key } = data;
    switch (key) {
      case '1':
        dispatch({ type: 'main/changePage', payload: { page: 'layout' } });
        break;
      case '2':
        dispatch({ type: 'main/changePage', payload: { page: 'list' } });
        break;
      case '3':
        dispatch({ type: 'main/changePage', payload: { page: 'layout' } });
        break;
      case '4':
        dispatch({ type: 'main/changePage', payload: { page: 'layout' } });
        break;
      case '5':
        dispatch({ type: 'main/changePage', payload: { page: 'layout' } });
        break;
      case '6':
        dispatch({ type: 'main/changePage', payload: { page: 'diagram' } });
        break;
      default:
        dispatch({ type: 'main/changePage', payload: { page: 'layout' } });
    }
  }
  return (
    <Layout>
      <Sider
        collapsible
        collapsed={currentCollapsed}
        onCollapse={handleChangeLayoutState}
      >
        <div className="logo" />
        <Menu theme="dark" mode={currentMode} defaultSelectedKeys={['1']} onClick={handleChangePage}>
          <Menu.Item key="1">
            <span>
              <Icon type="user" />
              <span className="nav-text">User</span>
            </span>
          </Menu.Item>
          <Menu.Item key="2">
            <span>
              <Icon type="user" />
              <span className="nav-text">List</span>
            </span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={<span><Icon type="team" /><span className="nav-text">Team</span></span>}
          >
            <Menu.Item key="3">Alex</Menu.Item>
            <Menu.Item key="4">Team 1</Menu.Item>
            <Menu.Item key="5">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="6">
            <span>
              <Icon type="file" />
              <span className="nav-text">File</span>
            </span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          {children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          AGV System ©2017 Created by Zhu Xi
          </Footer>
      </Layout>
    </Layout>
  );
};

Main.propTypes = {
  children: PropTypes.element.isRequired,
  dispatch: PropTypes.func.isRequired,
  currentAccount: PropTypes.object.isRequired,
  currentCollapsed: PropTypes.bool.isRequired,
  currentMode: PropTypes.string.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    currentAccount: state.app.account,
    currentCollapsed: state.main.collapsed,
    currentMode: state.main.mode,
  };
}

export default connect(mapStateToProps)(Main);
