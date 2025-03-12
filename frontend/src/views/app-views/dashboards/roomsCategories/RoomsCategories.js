import React, { useState } from 'react';
import CustomTable from 'components/shared-components/Table';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Modal, Input } from 'antd';




const data = [
  {
    key: '1',
    name: 'John Brown',
    slug: 'john-brown',
    created_at: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Carlos Los',
    slug: 'carlos-los',
    created_at: 'New York No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Zed Bres',
    slug: 'zed-bres',
    created_at: 'New York No. 1 Lake Park',
  }
];

export const RoomsCategories = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRow, setEditingRow] = useState(null);
  const [form, setForm] = useState({
    name: '',
  });

  const showModal = () => {
    setEditingRow(null);
    setForm({
      name: '',
    });
    setIsModalOpen(true);
  };

  const handleEdit = (record) => {
    setEditingRow(record);
    setForm({
      name: record.name,
    });
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if (editingRow) {
      // Handle update logic here
      console.log('Update row:', editingRow, form);
    } else {
      // Handle add new logic here
      console.log('Add new row:', form);
    }
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
      searchable: true,
    },
    {
      title: 'Slug',
      dataIndex: 'slug',
      key: 'slug',
      width: '20%',
      searchable: true,
    },
    {
      title: 'Created At',
      dataIndex: 'created_at',
      key: 'created_at',
      width: '20%',
      searchable: true,
    },
    {
      title: 'Actions',
      key: 'actions',
      width: '20%',
      searchable: false,
      render: (_, record) => (
        <>
          <Button icon={<EditOutlined />} style={{ marginRight: 8 }} onClick={() => handleEdit(record)} />
          <Button icon={<DeleteOutlined />} />
        </>
      ),
    },
  ];

  return (
    <>
      <Button type="primary" onClick={showModal} style={{ marginBottom: 16, float: 'right' }}>
        New Room Category
      </Button>
      <Modal
        title={editingRow ? "Edit Category" : "Add Category"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={editingRow ? "Update" : "Validate"}
      >
        <div style={{ marginBottom: 16 }}>
          <label>Category Name:</label>
          <Input name="name" value={form.name} onChange={handleInputChange} placeholder="Enter category name" />
        </div>
      </Modal>
      <CustomTable data={data} columns={columns} />
    </>
  );
};

export default RoomsCategories;
