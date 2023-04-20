import React from 'react';
import { useState } from 'react';
import { Modal,Input, QRCode, Space ,Upload } from 'antd';


const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export default function PaymentColumn() {

        const [previewOpen, setPreviewOpen] = useState(false);
        const [previewImage, setPreviewImage] = useState('');
        const [previewTitle, setPreviewTitle] = useState('');
        const [text, setText] = React.useState('https://ant.design/')
        const [fileList, setFileList] = useState([
    
          {
           // uid: '-2',
           // name: 'image.design',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          // url:'https://ant.design/'
          }
          
        ]);
        const handleCancel = () => setPreviewOpen(false);
        const handlePreview = async (file) => {
          if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
          }
          setPreviewImage(file.url || file.preview);
          setPreviewOpen(true);
          setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
        };
        const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
    
        return (
            <>
             <Space direction="vertical" align="center">
      <QRCode value={text || '-'} />
      <Input
        placeholder="-"
        maxLength={60}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </Space>
          <Upload
           action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
           //action="https://ant.design/"
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
          >
          </Upload>
          <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
            <img
              alt="example"
              style={{
                width: '100%',
              }}
              src={previewImage}
            />
          </Modal>
        </>
    
        )
    };

