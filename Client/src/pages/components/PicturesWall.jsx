import { Upload, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useState,useRef } from 'react';


function beforeUpload(file) {

  
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

  if (!isJpgOrPng) {
    message.error('Solo puedes subir archivos de tipo JPG/PNG!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('La imagen debe no puede exceder los 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

function PicturesWall () {

  const [state, setState] = useState({imageUrl: ""});
 
  const inputFileRef = useRef();

  const handleChange = (info) => {

    console.log(inputFileRef.current.files[0]);
    console.log(info);
/*     localStorage.setItem("imagen",info.files["name"]);
    
    const imagen = localStorage.getItem("imagen");
    console.log("Cargamos :",imagen); */
    
  };
   
  const { imageUrl } = state;

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload
      <input type="file"/>
      </div>
      
    </div>
  );


    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        beforeUpload={beforeUpload}
        onChange={handleChange}
        ref={inputFileRef}
        type="file"
      >
        {state.imageUrl ? <img src={state.imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
    );
  }

export default PicturesWall;