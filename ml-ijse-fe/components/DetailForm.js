import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import swal from "sweetalert";
import axios from "axios";
import DiabeticModal from "@/components/Diabetes";
import NonDiabeticModal from "@/components/NoDiabetes";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";

function DetailForm() {
  const [showDiabeticModal, setShowDiabeticModal] = useState(false);
  const [showNonDiabeticModal, setShowNonDiabeticModal] = useState(false);

  const [formData, setFormData] = useState({
    pregnancies: "",
    glucose: "",
    pressure: "",
    thickness: "",
    insulin: "",
    bmi: "",
    dpf: "",
    age: "",
  });


  const handleChange = (event) => {
    const { name, value } = event.target;
    
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: Number(value),
    }));
  };

  const submitForm = async (formDataJson) => {
    try {
      const response = await axios.post(
        // "https://ip-172-31-13-77.ap-southeast-1.compute.internal:8080/endpoint",
          "http://localhost:5000/endpoint",
        formDataJson, {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.data === "The person is diabetic") {
        setShowDiabeticModal(true);
      } else {
        setShowNonDiabeticModal(true);
      }
      // Handle the response from the backend if needed
    } catch (error) {
      console.error(error);
      // Handle any errors that occurred during the API call
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formDataObj = formData;
    submitForm(formDataObj);
    console.log(formDataObj);
  };

  return (
      <>
        <section>
          <div className="container-lg">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-5 text-center d-none d-md-block ">
                <img
                    className="img-fluid"
                    src="/diabetes-cartoon.jpg"
                    alt="diabetes-symptoms"
                />
              </div>

              <div className="col-md-5 text-center text-md-start">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="pregnancies">
                    <Form.Control
                        type="number"
                        name="pregnancies"
                        placeholder="How many Pregnancies 'Eg:0'"
                        value={formData.pregnancies}
                        onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="glucose">
                    <Form.Control
                        type="number"
                        name="glucose"
                        placeholder="Blood Glucose Level 'Eg:100'"
                        value={formData.glucose}
                        onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="pressure">
                    <Form.Control
                        type="number"
                        name="pressure"
                        placeholder="Blood Pressure 'Eg:80'"
                        value={formData.pressure}
                        onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="thickness">
                    <Form.Control
                        type="number"
                        name="thickness"
                        placeholder="Skin Thickness 'Eg:'30'"
                        value={formData.thickness}
                        onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="insulin">
                    <Form.Control
                        type="number"
                        name="insulin"
                        placeholder="Insulin 'Eg:70'"
                        value={formData.insulin}
                        onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="bmi">
                    <Form.Control
                        type="number"
                        name="bmi"
                        placeholder="BMI 'Eg:70'"
                        value={formData.bmi}
                        onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="dpf">
                    <Form.Control
                        type="number"
                        name="dpf"
                        placeholder="Diabetes Pedigree Function 'Eg:0.230'"
                        value={formData.dpf}
                        onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="age">
                    <Form.Control
                        type="number"
                        name="age"
                        placeholder="Age 'Eg:25'"
                        value={formData.age}
                        onChange={handleChange}
                    />
                    <Form.Text className="text-muted">
                      We'll never share your details with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </section>
        {showDiabeticModal && <DiabeticModal onHide={() => setShowDiabeticModal(false)} />}
        {showNonDiabeticModal && <NonDiabeticModal onHide={() => setShowNonDiabeticModal(false)} />}
      </>
  );
}

export default DetailForm;
