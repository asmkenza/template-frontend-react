import React from 'react';
import { Form, Input, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const RegisterHotelPage = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  return (
    <div>
      <h1>Register Hotel Page</h1>
      <Form
        form={form}
        name="register-hotel"
        onFinish={onFinish}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item
          name="hotelName"
          label="Nom de l’hôtel"
          rules={[{ required: true, message: 'Veuillez entrer le nom de l’hôtel' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="logo"
          label="Logo"
          rules={[{ required: true, message: 'Veuillez télécharger le logo de l’hôtel' }]}
          valuePropName="fileList"
          getValueFromEvent={(e) => e.fileList}
        >
          <Upload beforeUpload={() => false}>
            <Button icon={<UploadOutlined />}>Télécharger le logo</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          name="photo"
          label="Photo descriptive"
          valuePropName="fileList"
          getValueFromEvent={(e) => e.fileList}
        >
          <Upload beforeUpload={() => false}>
            <Button icon={<UploadOutlined />}>Télécharger la photo</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          name="location"
          label="Emplacement"
          rules={[{ required: true, message: 'Veuillez entrer l’emplacement de l’hôtel' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Enregistrer
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterHotelPage;
