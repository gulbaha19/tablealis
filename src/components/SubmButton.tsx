import styled from "@emotion/styled";
import { Button } from "@mui/material";

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
export const SubmitButton = () => {
  return (
    <ButtonRed type="submit" variant="contained">
      Подписать с ЭЦП
    </ButtonRed>
  );
};
