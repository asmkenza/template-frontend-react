import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomTable from 'components/shared-components/Table';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Modal, Input, message } from 'antd';
import { startLoading, getCategoriesSuccess, hasError } from 'store/slices/roomCategoriesSlice';
import RoomCategoryService from 'services/RoomCategoriesService';

export const RoomsCategories = () => {
  const dispatch = useDispatch();
  const { categories, loading } = useSelector((state) => state.roomCategory);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRow, setEditingRow] = useState(null);
  const [form, setForm] = useState({
    name: '',
  });

  useEffect(() => {
    fetchCategories();
  }, []);



  const fetchCategories = async () => {
    dispatch(startLoading());
    try {
      const data = await RoomCategoryService.getCategories();
      dispatch(getCategoriesSuccess(data));
    } catch (error) {
      dispatch(hasError(error.message));
      message.error(error.message);
    }
  };

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
      title: 'id',
      dataIndex: '_id',
      key: 'name',
      width: '30%',
      searchable: true,
    },
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
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
      <Button type="primary" onClick={showModal} icon={<PlusOutlined />} style={{ marginBottom: 16, float: 'right' }}>
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
      <CustomTable loading={loading} data={categories} columns={columns} />
    </>
  );
};

export default RoomsCategories;