import { FC } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import { SubmitButton } from "../components/SubmButton";

export const ContractPage = () => {
  const location: any = useLocation();
  const data = location.state?.myData;
  console.log("hey", location.state);

  return (
    <div>
      <h3>Договор № ________</h3>
      <p>
        Вы {data.secondName} {data.firstName} {data.fathersName}, <br />
        иин: {data.iin}, <br />
        Проживающий по адресу: {data.region}, {data.area}, {data.adress}.{data.phone}
      </p>
      {data.address}
      <Button variant="contained">Подписать с ЭЦП</Button>
    </div>
  );
};
