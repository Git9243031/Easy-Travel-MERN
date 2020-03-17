import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { PlusOutlined } from "@ant-design/icons";
import { UploaderContainer, DropBox, PreviewBox } from "./FileUploader.styles";
import axios from "axios";

const FileUploader = props => {
  const [images, setImages] = useState([]);

  const onDrop = files => {
    let formData = new FormData();
    const config = {
      header: { "content-type": "multipart/form-data" }
    };
    formData.append("file", files[0]);
    //save the Image we chose inside the Node Server
    
    axios
      .post("api/products/upload-image/", formData, config)
      .then(response => {
        if (response.data.success) {
          setImages([...images, response.data.image]);
          props.updateImages([...images, response.data.image]);
        } else {
          alert("Failed to save the Image in Server");
        }
      });
  };

  const onDelete = image => {
    const currentIndex = images.indexOf(image);
    const newImages = [...images].splice(currentIndex, 1);
    setImages(newImages);
    props.updateImages(newImages);
    //TODO : Delete img from the server folder
  };

  return (
    <UploaderContainer>
      <Dropzone onDrop={onDrop} multiple={false} maxSize={1000000}>
        {({ getRootProps, getInputProps }) => (
          <DropBox {...getRootProps()}>
            <input {...getInputProps()} />
            <PlusOutlined />
          </DropBox>
        )}
      </Dropzone>
      <PreviewBox>
        {images.map((image, index) => (
          <div key={image + index} onClick={() => onDelete(image)}>
            <img
              width="300"
              height="240"
              src={`http://localhost:5000/${image}`}
              alt=""
            />
          </div>
        ))}
      </PreviewBox>
    </UploaderContainer>
  );
};

export default FileUploader;
