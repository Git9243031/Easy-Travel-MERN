import React, { useState } from "react";
import { Typography } from "antd";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Content } from "../../components/Content/Content.styles";
import FileUploader from "../../components/FileUploader/FileUploader";
import { Button } from "../../components/Button/Button.styles";
import axios from "axios";
import { useForm } from "../../hooks/useForm";

const { Title } = Typography;

const continents = [
  "Afrika",
  "Europe",
  "Asia",
  "North America",
  "South North America"
];

const UploadProductPage = props => {
  const [productInputs, setProductInputs] = useForm({
    title: "",
    description: "",
    continent: "",
    price: 0,
    stars: 0
  });
  const { title, description, continent, price, stars } = productInputs;

  const [images, setImages] = useState([]);

  const updateImages = newImages => {
    setImages(newImages);
  };

  const onSubmit = e => {
    e.preventDefault();

    console.log("tut")

    const variables = {
      // user: 5848948949848498494, // Todo: get info from resux user.userData._id
      title,
      description,
      continent,
      price,
      stars,
      images
    };

    axios
      .post("http://localhost:5000/api/products/uploadProduct", variables)
      .then(({ data }) => {
        if (data.success) {
          alert("Failed to upload product");
          props.history.push("/");
        } else {
          alert("product successfully uploaded");
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <Content>
      <Title level={2} className="text-center">
        Upload Travel Product
      </Title>
      <Form>
        <FormGroup>
          <FileUploader updateImages={updateImages} />

          <Label for="title">Title</Label>
          <Input
            onChange={setProductInputs}
            value={title}
            type="title"
            name="title"
            id="title"
            placeholder="Title"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            onChange={setProductInputs}
            value={description}
            type="textarea"
            name="description"
            id="description"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label for="price">Price</Label>
          <Input
            onChange={setProductInputs}
            value={price}
            type="number"
            name="price"
            id="price"
            min="1"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label for="continent">Continents</Label>
          <Input
            onChange={setProductInputs}
            value={continent}
            type="select"
            name="continent"
            id="continent"
          >
            {continents.map(continent => (
              <option key={continent} value={continent}>
                {continent}
              </option>
            ))}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="stars">Stars</Label>
          <Input
            onChange={setProductInputs}
            value={stars}
            type="select"
            name="stars"
            id="stars"
          >
            {[...Array(5).keys()].map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
            )}
          </Input>
        </FormGroup>

        <Button onClick={onSubmit} height="35px" width="100%" className="mt-3">
          Submit
        </Button>
      </Form>
    </Content>
  );
};

export default UploadProductPage;
