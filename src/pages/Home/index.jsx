import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { Link } from "react-router-dom";

import { Card, Container } from "../../components/Container";
import { FieldSet, Form } from "../../components/Form";
import { Button } from "../../components/Form/Button";
import { InputNumber } from "../../components/Form/InputNumber";
import { InputSelect } from "../../components/Form/InputSelect";
import { InputText } from "../../components/Form/InputText";
import { Modal } from "../../components/Modal";

import { InputDate } from "react-date-modify"

import { addEmployee } from "../../Services/Redux/Slices/dataSlice";

import { states } from "../../states";

import "./style.scss";

/**
 *
 * @param param0
 * @returns
 */
const Title = ({ children }) => {
  return (
    <div className="title">
      <h1>{children}</h1>
    </div>
  );
};

/**
 *
 * @param param0
 * @returns
 */
const SubTitle = ({ children }) => {
  return <h2>{children}</h2>;
};

/**
 *
 * @returns
 */
export const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    // const employees = JSON.parse(localStorage.getItem('employees')) || [];
    dispatch(
      addEmployee({
        firstName: formJson["first-name"],
        lastName: formJson["last-name"],
        dateOfBirth: formJson["date-of-birth"],
        startDate: formJson["start-date"],
        department: formJson["department"],
        street: formJson["street"],
        city: formJson["city"],
        state: formJson["state"],
        zipCode: formJson["zip-code"],
      })
    );
    setModalIsOpen(true);
  };

  return (
    <>
      <Container>
        <Modal
          isOpen={modalIsOpen}
          title="Employee Creation"
          message="Employee Created with success!"
          onClose={() => setModalIsOpen(false)}
        />
        <Card>
          <header className="center">
            <Link className="link-button" to="/employee-list">
              View Current Employees
            </Link>
            <Title>HRNet</Title>
            <SubTitle>Create Employee</SubTitle>
          </header>
          <Form onSubmit={handleSubmit}>
            <InputText name="first-name" text="First Name" />
            <InputText name="last-name" text="Last Name" />
            <InputDate
              name="date-of-birth"
              text="Date of Birth"
              value="2022-02-02"
            />
            <InputDate name="start-date" text="Start Date" value="2021-01-01" />
            <FieldSet legend="Address">
              <InputText name="street" text="Street" />
              <InputText name="city" text="City" />
              <InputSelect name="state" text="State" items={states} />
              <InputNumber name="zip-code" text="Zip Code" />
            </FieldSet>
            <InputSelect
              name="department"
              text="Department"
              items={[
                { name: "Sales", value: "Sales" },
                { name: "Marketing", value: "Marketing" },
                { name: "Engineering", value: "Engineering" },
                { name: "Human Resources", value: "Human Resources" },
                { name: "Legal", value: "Legal" },
              ]}
            />
            <Button text="Save" />
          </Form>
        </Card>
      </Container>
    </>
  );
};
