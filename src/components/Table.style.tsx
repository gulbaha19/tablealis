import styled from "@emotion/styled";
export const Thead = styled("thead")`
  background: #fafafa;

  th {
    font-weight: 500;
  }
`;
export const FirstColumn = styled("div")`
  width: 48px;
  justify-content: center;
  height: 56px;
  align-items: center;
  font-size: 14px;
  line-height: 22px;
  /* padding: 17px 16px; */
  display: flex;
  font-weight: 500;
  position: relative;
`;

export const ColumnNumber = styled("div")`
  width: 240px;
  height: 56px;
  align-items: center;
  font-size: 14px;
  line-height: 22px;
  padding: 17px 16px;
  display: flex;
  font-weight: 500;
  position: relative;
`;
export const DataColumn = styled("div")`
  width: 200px;
  height: 56px;
  font-size: 14px;
  line-height: 22px;
  padding: 17px 16px;
  align-items: center;
  display: flex;
  position: relative;
`;

export const CommentColumn = styled("div")`
  width: 140px;
  height: 56px;
  font-size: 14px;
  line-height: 22px;
  padding: 17px 16px;
  line-height: 22px;
  align-items: center;
  display: flex;
  position: relative;
`;
export const Button = styled("button")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px;
  gap: 10px;

  width: 16px;
  height: 16px;

  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
`;
export const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  borderRadius: "2px",
  boxShadow:
    "0px 3px 6px -4px rgba(0, 0, 0, 0.12), 0px 6px 16px rgba(0, 0, 0, 0.08), 0px 9px 28px 8px rgba(0, 0, 0, 0.05)",
  p: 4,
};
export const Div = styled("a")`
  color: #dc1832;
  text-decoration: none;
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  :hover {
    color: rgba(0, 0, 0, 0.25);
  }
`;
export const StatusDiv = styled("div")<{ backgroundColor?: string; border: string }>`
  border-radius: 2px;
  height: 22px;
  background-color: ${(props) => props.backgroundColor};
  border: ${(props) => props.border};
  font-size: 12px;
  padding: 1px 8px;
`;
export const IconsUpDown = styled("div")`
  display: flex;
  flex-direction: column;
  :hover {
    opacity: 0.5;
  }
`;
