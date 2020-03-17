import React, { useState } from "react";
import { Typography } from "antd";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Content } from "../../components/Content/Content.styles";
import FileUploader from "../../components/FileUploader/FileUploader";
import { Button } from "../../components/Button/Button.styles";
import { createProduct } from "../../redux/modules/products";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const { Title } = Typography;

const continents = [
  "Afrika",
  "Europe",
  "Asia",
  "North America",
  "South North America"
];

const UploadProductPage = props => {
  const history = useHistory();
  const dispatch = useDispatch();


  const [productInputs, setProductInputs] = useForm({
    title: "",
    description: "",
    continent: "Africa",
    price: 0,
    stars: 0,
    features: ""
  });

  const [images, setImages] = useState([]);

  const {
    title,
    description,
    continent,
    price,
    stars,
    features
  } = productInputs;

  const updateImages = newImages => {
    setImages(newImages);
  };

  const onSubmit = e => {
    e.preventDefault();

    const inputValues = {
      title,
      description,
      continent,
      price,
      stars,
      images,
      features
    };
    dispatch(createProduct(inputValues, history));
  };

  return (
    <Content>
      <Title level={2} className="text-center">
        Upload Travel Product
      </Title>
      <Form>
        <FileUploader updateImages={updateImages} />
        <FormGroup>
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
          <Label for="features">Features</Label>
          <Input
            onChange={setProductInputs}
            value={features}
            type="features"
            name="features"
            id="features"
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
