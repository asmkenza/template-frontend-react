import React, { useState } from 'react';
import CustomTable from 'components/shared-components/Table';
import { EditOutlined, DeleteOutlined, EyeOutlined, UploadOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Modal, Input, Select, Upload } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

const data = [
  {
    key: '1',
    photo: 'John Brown',
    name: 'lllllllll',
    category: 'New York No. 1 Lake Park',
    code: 'New York No. 1 Lake Park',
    capacity: 'New York No. 1 Lake Park',
    created_at: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    photo: 'John Brown',
    name: 'mmmmmmmm',
    category: 'New York No. 1 Lake Park',
    code: 'New York No. 1 Lake Park',
    capacity: 'New York No. 1 Lake Park',
    created_at: 'New York No. 1 Lake Park',
  },
  {
    key: '3',
    photo: 'John Brown',
    name: 'pppppppp',
    category: 'New York No. 1 Lake Park',
    code: 'New York No. 1 Lake Park',
    capacity: 'New York No. 1 Lake Park',
    created_at: 'New York No. 1 Lake Park',
  }
];

export const Rooms = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRow, setEditingRow] = useState(null);
  const [form, setForm] = useState({
    photo: '',
    name: '',
    category: '',
    code: '',
    description: '',
  });

  const showModal = () => {
    setEditingRow(null);
    setForm({
      photo: '',
      name: '',
      category: '',
      code: '',
      description: '',
    });
    setIsModalOpen(true);
  };

  const handleEdit = (record) => {
    setEditingRow(record);
    setForm({
      photo: record.photo,
      name: record.name,
      category: record.category,
      code: record.code,
      description: record.created_at,
    });
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if (editingRow) {
      console.log('Update row:', editingRow, form);
    } else {
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
      title: 'Photo',
      dataIndex: 'photo',
      key: 'photo',
      searchable: true,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      searchable: true,
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      searchable: true,
    },
    {
      title: 'Code',
      dataIndex: 'code',
      key: 'code',
      searchable: true,
    },
    {
      title: 'Capacity',
      dataIndex: 'capacity',
      key: 'capacity',
      searchable: true,
    },
    {
      title: 'Created At',
      dataIndex: 'created_at',
      key: 'created_at',
      searchable: true,
    },
    {
      title: 'Actions',
      key: 'actions',
      searchable: false,
      render: (_, record) => (
        <div style={{ display: 'flex', gap: 8 }}>
          <Button icon={<EyeOutlined />} />
          <Button icon={<EditOutlined />} onClick={() => handleEdit(record)} />
          <Button icon={<DeleteOutlined />} />
        </div>
      ),
    },
  ];

  const modalStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    marginTop: '16px',
  };

  const labelStyle = {
    marginBottom: '8px',
    fontWeight: 'bold',
  };

  const inputStyle = {
    width: '100%',
  };

  return (
    <>
      <Button type="primary" onClick={showModal} icon={<PlusOutlined />} style={{ marginBottom: 16, float: 'right' }}>
        New Room
      </Button>
      <Modal
        title={editingRow ? "Edit Room" : "New Room"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={editingRow ? "Update" : "Validate"}
      >
        <div style={modalStyle}>
          <div>
            <label style={labelStyle}>Select Image:</label>
            <Upload beforeUpload={() => false}>
              <Button icon={<UploadOutlined />} style={inputStyle}>Select File</Button>
            </Upload>
          </div>
          <div>
            <label style={labelStyle}>Name:</label>
            <Input name="name" value={form.name} onChange={handleInputChange} placeholder="Enter name" style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Category:</label>
            <Select name="category" value={form.category} onChange={(value) => setForm({ ...form, category: value })} placeholder="Select a category" style={inputStyle}>
              <Option value="category1">Category 1</Option>
              <Option value="category2">Category 2</Option>
              <Option value="category3">Category 3</Option>
            </Select>
          </div>
          <div>
            <label style={labelStyle}>Code:</label>
            <Input name="code" value={form.code} onChange={handleInputChange} placeholder="Enter code" style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Created At:</label>
            <Input name="description" value={form.description} onChange={handleInputChange} placeholder="Enter created at" disabled style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Description:</label>
            <TextArea name="description" value={form.description} onChange={handleInputChange} rows={4} placeholder="Enter description" style={inputStyle} />
          </div>
        </div>
      </Modal>
      <CustomTable data={data} columns={columns} />
    </>
  );
};

export default Rooms;
