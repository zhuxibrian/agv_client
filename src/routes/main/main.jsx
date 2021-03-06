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
        dispatch({ type: 'main/changePage', payload: { page: 'layout', isDraggableShow: false, pageState: 'show' } });
        break;
      case '2':
        dispatch({ type: 'main/changePage', payload: { page: 'list', isDraggableShow: false, pageState: 'list' } });
        break;
      case '11':
        dispatch({ type: 'main/changePage', payload: { page: 'layout', isDraggableShow: true, pageState: 'layout' } });
        break;
      case '12':
        dispatch({ type: 'main/changePage', payload: { page: 'layout', isDraggableShow: true, pageState: 'mark' } });
        break;
      case '13':
        dispatch({ type: 'main/changePage', payload: { page: 'layout', isDraggableShow: true, pageState: 'line' } });
        break;
      case '14':
        dispatch({ type: 'main/changePage', payload: { page: 'layout', isDraggableShow: true, pageState: 'conflict' } });
        break;
      case '15':
        dispatch({ type: 'main/changePage', payload: { page: 'layout', isDraggableShow: true, pageState: 'agv' } });
        break;
      case '16':
        dispatch({ type: 'main/changePage', payload: { page: 'layout', isDraggableShow: true, pageState: 'control' } });
        break;
      case '17':
        dispatch({ type: 'main/changePage', payload: { page: 'layout', isDraggableShow: true, pageState: 'system' } });
        break;
      case '21':
        dispatch({ type: 'main/changePage', payload: { page: 'diagram', isDraggableShow: false, pageState: 'diagram' } });
        break;
      default:
        dispatch({ type: 'main/changePage', payload: { page: 'layout', isDraggableShow: false, pageState: 'show' } });
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
              <Icon type="home" />
              <span className="nav-text">主页</span>
            </span>
          </Menu.Item>
          <Menu.Item key="2">
            <span>
              <Icon type="database" />
              <span className="nav-text">列表</span>
            </span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={<span><Icon type="setting" /><span className="nav-text">设置</span></span>}
          >
            <Menu.Item key="11">布局设置</Menu.Item>
            <Menu.Item key="12">地标设置</Menu.Item>
            <Menu.Item key="13">路线设置</Menu.Item>
            <Menu.Item key="14">管制设置</Menu.Item>
            <Menu.Item key="15">AGV设置</Menu.Item>
            <Menu.Item key="16">控制设置</Menu.Item>
            <Menu.Item key="17">系统设置</Menu.Item>
          </SubMenu>
          <Menu.Item key="21">
            <span>
              <Icon type="line-chart" />
              <span className="nav-text">统计</span>
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
