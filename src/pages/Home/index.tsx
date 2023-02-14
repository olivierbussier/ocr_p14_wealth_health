import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { Link } from "react-router-dom";
import { Container } from "../../components/Container";
import { Form } from "../../components/Form";
import { Button } from "../../components/Form/Button";
import { FieldSet } from "../../components/Form/FieldSet";
import { InputDate } from "../../components/Form/InputDate";
import { InputNumber } from "../../components/Form/InputNumber";
import { InputSelect } from "../../components/Form/InputSelect";
import { InputText } from "../../components/Form/InputText";
import { Modal } from "../../components/Modal";
import { addEmployee } from "../../Services/Redux/Slices/dataSlice";

import { states } from "../../states";

import "./style.scss";

interface IEmployee {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  startDate: string;
  department: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

type mops = {
  children: React.ReactNode;
};
const Title: React.FC<mops> = ({ children }) => {
  return (
    <div className="title">
      <h1>{children}</h1>
    </div>
  );
};

const SubTitle: React.FC<mops> = ({ children }) => {
  return <h2>{children}</h2>;
};
export const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
      <Title>HRNet</Title>
      <Container>
        <header className="center">
          <Link to="/employee-list">View Current Employees</Link>
          <SubTitle>Create Employee</SubTitle>
        </header>
        <Form onSubmit={handleSubmit}>
          <InputText name="first-name" text="First Name" />
          <InputText name="last-name" text="Last Name" />
          <InputDate name="date-of-birth" text="Date of Birth" />
          <InputDate name="start-date" text="Start Date" />
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
              { name: "Sales", abbreviation: "Sales" },
              { name: "Marketing", abbreviation: "Marketing" },
              { name: "Engineering", abbreviation: "Engineering" },
              { name: "Human Resources", abbreviation: "Human Resources" },
              { name: "Legal", abbreviation: "Legal" },
            ]}
          />
          <Button text="Save" />
        </Form>
      </Container>
      <Modal
        isOpen={modalIsOpen}
        message="Employee Created!"
        onClose={() => setModalIsOpen(false)}
      />
    </>
  );
};
