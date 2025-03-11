import React from 'react';
import CustomTable from 'components/shared-components/Table';



const data = [
  {
    key: '1',
    photo: 'John Brown',
    name: 32,
    category: 'New York No. 1 Lake Park',
    code: 'New York No. 1 Lake Park',
    capacity: 'New York No. 1 Lake Park',
    created_at: 'New York No. 1 Lake Park',
    actions: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    photo: 'John Brown',
    name: 32,
    category: 'New York No. 1 Lake Park',
    code: 'New York No. 1 Lake Park',
    capacity: 'New York No. 1 Lake Park',
    created_at: 'New York No. 1 Lake Park',
    actions: 'New York No. 1 Lake Park',
  },
  {
    key: '3',
    photo: 'John Brown',
    name: 32,
    category: 'New York No. 1 Lake Park',
    code: 'New York No. 1 Lake Park',
    capacity: 'New York No. 1 Lake Park',
    created_at: 'New York No. 1 Lake Park',
    actions: 'New York No. 1 Lake Park',
  }


];

const columns = [
  {
    title: 'Photo',
    dataIndex: 'photo',
    key: 'photo',
    width: '30%',
    ...getColumnSearchProps('photo'),
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: '20%',
    ...getColumnSearchProps('name'),
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
    ...getColumnSearchProps('category'),
  },
  {
      title: 'Code',
      dataIndex: 'code',
      key: 'code',
      width: '20%',
      ...getColumnSearchProps('code'),
    },
    {
      title: 'Capacity',
      dataIndex: 'capacity',
      key: 'capacity',
      ...getColumnSearchProps('capacity'),
    },
    {
          title: 'Created At',
          dataIndex: 'created_at',
          key: 'created_at',
          width: '20%',
          ...getColumnSearchProps('created_at'),
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      width: '20%',
      ...getColumnSearchProps('actions'),
    },
];


export const Rooms = () => {
  
  return (
    <>  
      <CustomTable  data={data} columns={columns} />
    </>
  )
}


export default Rooms;
