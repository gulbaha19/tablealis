import { Button } from "@mui/material";

import { useCallback, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Bank } from "../components/Bank";
import { Address } from "../components/Address";
import { PersonalInfo } from "../components/PersonalInfo";
import { OrganizationInfo } from "../components/OrganizationInfo";
import { Link, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { SubmitButton } from "../components/SubmButton";
import { Table } from "../components/Table";
import { tableData } from "../components/mock/mock";
import { TableStatus } from "../constants/TableType";

export interface DataProps {
  status?: string;
  iin?: string;
  fullNameOfOrganization?: string;
  secondName?: string;
  firstName?: string;
  fathersName?: string;
  email?: string;
  phone?: string;
  position?: string;
  responsobilities?: string;
  region?: null;
  area?: string;
  address?: string;
  bank?: string;
  bik?: string;
  iik?: string;
  kbe?: string;
}
const ButtonWhite = styled(Button)`
  width: 264px;
  height: 38px;
  background-color: white;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: #dc1832;
  :hover {
    background-color: #b49d9d75;
  }
`;
const ButtonRed = styled(Button)`
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  width: 264px;
  height: 38px;
  color: white;
  background-color: #dc1832;
  border: 1px solid #dc1832;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
  border-radius: 2px;
  :hover {
    background-color: #b49d9d75;
  }
`;
export const inputStyle = {
  boxSizing: "border-box" as const,
  height: "32px",
  padding: "5px 12px",
  backgroundColor: "#FFFF",
  width: "320px",
};

export const FormPage = () => {
  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      status: "",
      iin: "",
      fullNameOfOrganization: "",
      secondName: "",
      firstName: "",
      fathersName: "",
      email: "",
      phone: "",
      position: "",
      responsobilities: "",
      region: null,
      area: "",
      adress: "",
      bank: "",
      bik: "",
      iik: "",
      kbe: "",
    },
  });

  const { handleSubmit, reset, getValues } = methods;
  const navigate = useNavigate();

  const onSubmit = useCallback(
    (values: DataProps) => {
      reset();
      alert("submitted");
    },
    [reset],
  );

  const say = () => {
    alert("heyy");
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} style={{ marginLeft: "60px" }}>
          <OrganizationInfo />

          <PersonalInfo />

          <Address />
          <Bank />
          <ButtonWhite
            // style={{ backgroundColor: "transparent" }}
            variant="contained"
            onClick={() =>
              navigate("/contract", {
                state: { myData: getValues(), func: say() },
              })
            }>
            Предпросмотр
          </ButtonWhite>
          <SubmitButton />
        </form>
      </FormProvider>
     
    </>
  );
};
