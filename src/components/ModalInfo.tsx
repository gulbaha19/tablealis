import styled from "@emotion/styled";
import { FC } from "react";
import { CommentsProps } from "./Table";
import { Box as MUIBox } from "@mui/system";
import { Icon, IconMed, IconSmall } from "./IconComponent/Icon";
import moment from "moment";
import { statusColors } from "./TableBody";

const Box = styled(MUIBox)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* padding: 16px 24px; */
  gap: 36px;
  top: 50%;
  left: 50%;
  width: 600px;
  position: absolute;
  background: #ffffff;
  box-shadow: inset 0px -1px 0px #f0f0f0;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

  transform: translate(-50%, -50%);

  background-color: white;
  border-radius: 2px;
  box-shadow: "0px 3px 6px -4px rgba(0, 0, 0, 0.12), 0px 6px 16px rgba(0, 0, 0, 0.08), 0px 9px 28px 8px rgba(0, 0, 0, 0.05)";
  p: 4;
`;
const Top = styled("div")`
  height: 24px;

  padding: 16px 24px;

  display: flex;
`;
const Close = styled("div")`
  background: #dc1832;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
  border-radius: 2px;
  width: 89px;
  height: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 14px;
  :hover {
    opacity: 0.5;
  }
`;

export const ModalInfo = ({ ...props }) => {
  const { com, handleClose } = props;
  const getFormatedDate = (date: number) => {
    moment.lang("ru");
    const formatedDate = moment(date * 1000).format("DD MMMM YYYY");

    return [formatedDate];
  };
  const ColorStatus = styled("div")<{ color?: string }>`
    color: ${(props) => props.color};
  `;
  return (
    <>
      <Box>
        <Top style={{ justifyContent: "space-between", boxShadow: "inset 0px -1px 0px #f0f0f0" }}>
          <span> Комментарии</span>
          <div onClick={handleClose}>
            <Icon type="Close" />
          </div>
        </Top>

        {com.map((i: CommentsProps) => (
          <>
            <div style={{ display: "flex", alignItems: "center", padding: "24px 0 8px 40px" }}>
              {i.isRead ? <IconSmall type="Dot" /> : ""}

              <div
                style={{
                  width: "24px",
                  height: "24px",
                  left: "0",
                  top: "0",
                  backgroundColor: "rgba(0, 40, 119, 0.45)",
                  borderRadius: "15px",
                  textAlign: "center",
                  alignItems: "center",
                  margin: "0 8px",
                }}>
                <IconMed type="Profile" />
              </div>
              <div>
                {i.name}
                <span style={{ color: "rgba(0, 40, 119, 0.45)", marginLeft: "8px" }}>
                  {getFormatedDate(i.date)}
                </span>
              </div>
            </div>
            <div style={{ lineHeight: "22px", padding: "0 0 16px 40px" }}>{i.comment}</div>
            <div style={{ lineHeight: "22px", padding: "0 0 24px 40px", display: "flex" }}>
              <span style={{ color: "rgba(0, 40, 119, 0.45)" }}>Статус: </span>
              <ColorStatus color={statusColors[i.status]}> {i.status}</ColorStatus>
            </div>
          </>
        ))}
        <Top style={{ justifyContent: "right", boxShadow: "0px -1px 0px #f0f0f0" }}>
          <Close onClick={handleClose}>Закрыть</Close>
        </Top>
      </Box>
    </>
  );
};
