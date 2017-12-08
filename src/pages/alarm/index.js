import React from 'react';
import { connect } from 'dva';
import { Table,Spin } from 'antd';

function Alarm({dispatch,alarm}) {
	console.log(alarm)
	if(alarm.list.length === 0){
		return	(<div className="example" style={{ "textAlign": "center"}}>
			    	<Spin />
			  	</div>)
	}
	const columns = [{
	    title: '序号',
	    dataIndex: 'num',
	    width: '30%'
	  }, {
	    title: 'Age',
	    dataIndex: 'workstate',
	    width: 150,
	  }, {
	    title: 'Address',
	    dataIndex: 'alarminfor',
	  }];

  const data = alarm.list;

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
    }),
  };

  return (
    <div className='alarmTableContent'>
      <Table rowKey="" rowSelection={rowSelection} columns={columns} dataSource={data} pagination={false} scroll={{ y: 500 }} />
    </div>
    )
}

function stateToProps({alarm}){
	return {alarm}
}

export default connect(stateToProps)(Alarm)