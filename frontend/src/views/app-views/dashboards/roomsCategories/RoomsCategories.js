// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import CustomTable from 'components/shared-components/Table';
// import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
// import { Button, Modal, Input, message } from 'antd';
// import { startLoading, getCategoriesSuccess, hasError } from 'store/slices/roomCategoriesSlice';
// import RoomCategoryService from 'services/RoomCategoriesService';

// export const RoomsCategories = () => {
//   const dispatch = useDispatch();
//   const { categories, loading } = useSelector((state) => state.roomCategory);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editingRow, setEditingRow] = useState(null);
//   const [form, setForm] = useState({
//     name: '',
//   });

//   useEffect(() => {
//     fetchCategories();
//   }, []);



//   const fetchCategories = async () => {
//     console.log('Starting fetchCategories');
//     dispatch(startLoading());
//     try {
//       console.log('Making API call');
//       const data = await RoomCategoryService.getCategories();
//       console.log('API Response:', data);
//       dispatch(getCategoriesSuccess(data));
//     } catch (error) {
//       console.error('Error in fetchCategories:', error);
//       const errorMessage = error.response?.data?.message || error.message || 'An error occurred';
//       dispatch(hasError(errorMessage));
//       message.error(errorMessage);
//     } finally {
//       console.log('fetchCategories completed');
//     }
//   };


//   const showModal = () => {
//     setEditingRow(null);
//     setForm({
//       name: '',
//     });
//     setIsModalOpen(true);
//   };

//   const handleEdit = (record) => {
//     setEditingRow(record);
//     setForm({
//       name: record.name,
//     });
//     setIsModalOpen(true);
//   };



//   const handleOk = () => {
//     if (editingRow) {
//       console.log('Update row:', editingRow, form);
//     } else {
//       console.log('Add new row:', form);
//     }
//     setIsModalOpen(false);
//   };


//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prevForm) => ({
//       ...prevForm,
//       [name]: value,
//     }));
//   };


//   const columns = [
//     {
//       title: 'name',
//       dataIndex: 'name',
//       key: 'name',
//       searchable: true,
//     },
//     {
//       title: 'slug',
//       dataIndex: 'slug',
//       key: 'slug',
//       searchable: true,
//     },
//     {
//       title: 'created_at',
//       dataIndex: 'createdAt',
//       key: 'created_at',
//       searchable: true,
//     },
//     {
//       title: 'Actions',
//       key: 'actions',
//       searchable: false,
//       render: (_, record) => (
//         <>
//           <Button icon={<EditOutlined />} style={{ marginRight: 8 }} onClick={() => handleEdit(record)} />
//           <Button icon={<DeleteOutlined />} />
//         </>
//       ),
//     },
//   ];



//   return (
//     <>
   
//       <Button type="primary" onClick={showModal} icon={<PlusOutlined />} style={{ marginBottom: 16, float: 'right' }}>
//         New Room Category
//       </Button>
//       <Modal
//         title={editingRow ? "Edit Category" : "Add Category"}
//         open={isModalOpen}
//         onOk={handleOk}
//         onCancel={handleCancel}
//         okText={editingRow ? "Update" : "Validate"}
//       >
//         <div style={{ marginBottom: 16 }}>
//           <label>Category Name:</label>
//           <Input name="name" value={form.name} onChange={handleInputChange} placeholder="Enter category name" />
//         </div>
//       </Modal>


//       <CustomTable loading={loading} data={categories} columns={columns}  />
//     </>
//   );
// };

// export default RoomsCategories;








import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomTable from 'components/shared-components/Table';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Modal, Input, message } from 'antd';
import { startLoading, getCategoriesSuccess, hasError, deleteCategorySuccess } from 'store/slices/roomCategoriesSlice';
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
      const errorMessage = error.response?.data?.message || error.message || 'An error occurred';
      dispatch(hasError(errorMessage));
      message.error(errorMessage);
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

  const handleDelete = async (id) => {
    dispatch(startLoading());
    try {
      await RoomCategoryService.deleteCategory(id);
      dispatch(deleteCategorySuccess(id));
      message.success('Category deleted successfully');
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || 'An error occurred';
      dispatch(hasError(errorMessage));
      message.error(errorMessage);
    }
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
      title: 'name',
      dataIndex: 'name',
      key: 'name',
      searchable: true,
    },
    {
      title: 'slug',
      dataIndex: 'slug',
      key: 'slug',
      searchable: true,
    },
    {
      title: 'created_at',
      dataIndex: 'createdAt',
      key: 'created_at',
      searchable: true,
    },
    {
      title: 'Actions',
      key: 'actions',
      searchable: false,
      render: (_, record) => (
        <>
          <Button icon={<EditOutlined />} style={{ marginRight: 8 }} onClick={() => handleEdit(record)} />
          <Button icon={<DeleteOutlined />} onClick={() => handleDelete(record._id)} />
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







