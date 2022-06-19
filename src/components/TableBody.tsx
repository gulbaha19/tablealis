import {
  ColumnNumber,
  FirstColumn,
  DataColumn,
  CommentColumn,
  Thead,
  Button,
  style,
  Div,
  StatusDiv,
} from "./Table.style";
import { Icon, IconAbsolute, IconSmall } from "./IconComponent/Icon";
import { RowType } from "./Table";
import { FC, MouseEvent, useState } from "react";
import { TableStatus } from "../constants/TableType";
import { BCKCOLORS, BORDERS, COLORS, ICONSTATUS } from "../constants/colors";
import styled from "@emotion/styled";
import { Box, Collapse, Modal, Table, TableCell, TableRow } from "@mui/material";
import { click } from "@testing-library/user-event/dist/click";
import { log } from "console";
import { ModalInfo } from "./ModalInfo";
import moment from "moment";

export const statusColors: Record<TableStatus, string> = {
  [TableStatus.CANCELED]: COLORS.ORANGE,
  [TableStatus.AFFIRM]: COLORS.BLACK,
  [TableStatus.PROCESSING]: COLORS.BLUE,
  [TableStatus.DONE]: COLORS.POLARGREEN,
};
export const bckColoros: Record<TableStatus, string> = {
  [TableStatus.CANCELED]: BCKCOLORS.ORANGE,
  [TableStatus.AFFIRM]: BCKCOLORS.BLACK,
  [TableStatus.PROCESSING]: BCKCOLORS.BLUE,
  [TableStatus.DONE]: BCKCOLORS.POLARGREEN,
};
export const borderColoros: Record<TableStatus, string> = {
  [TableStatus.CANCELED]: BORDERS.ORANGE,
  [TableStatus.AFFIRM]: BORDERS.BLACK,
  [TableStatus.PROCESSING]: BORDERS.BLUE,
  [TableStatus.DONE]: BORDERS.POLARGREEN,
};
export const iconStatus: Record<TableStatus, string> = {
  [TableStatus.CANCELED]: ICONSTATUS.CANCELED,
  [TableStatus.AFFIRM]: ICONSTATUS.CLOCK,
  [TableStatus.PROCESSING]: ICONSTATUS.INPROCESS,
  [TableStatus.DONE]: ICONSTATUS.DONE,
};
export const TableBody: FC<RowType> = (row) => {
  const ColumnStatus = styled("div")<{ color?: string }>`
    color: ${(props) => props.color};
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
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };
  const getFormatedDate = (date: number) => {
    moment.lang("ru");
    const formatedDate = moment(date * 1000).format("DD MMMM YYYY");
    return [formatedDate];
  };
  console.log(iconStatus[row.status]);
  let st = iconStatus[row.status].toString;
  return (
    <>
      <tr>
        <td style={{ borderTopLeftRadius: "10px" }}>
          <FirstColumn>
            {row.extraDoc?.length ? (
              <Button onClick={() => setOpen(!open)}>
                {open ? <Icon type="Minus" /> : <Icon type="Plus" />}
              </Button>
            ) : (
              ""
            )}
          </FirstColumn>
        </td>

        <td>
          <ColumnNumber style={{ justifyContent: "space-between" }}>
            {row.numberContract}

            <IconAbsolute type="Divider" />
          </ColumnNumber>
        </td>

        <td>
          <DataColumn>
            {getFormatedDate(row.startDate)} <IconAbsolute type="Divider" />
          </DataColumn>
        </td>
        <td>
          <DataColumn>
            {getFormatedDate(row.finalDate)} <IconAbsolute type="Divider" />
          </DataColumn>
        </td>
        <td>
          <CommentColumn>
            <IconAbsolute type="Divider" />

            {row.commentInfo ? (
              <div>
                {/* {com.isRead ? <IconSmall type="Dot" /> : ""}{" "} */}
                <div onClick={handleOpen}>
                  <Icon type="Message" style={{ marginRight: "8px" }} />
                  {row.commentInfo.length}
                </div>
                <Modal
                  open={openModal}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description">
                  <ModalInfo com={row.commentInfo} handleClose={handleClose} />
                </Modal>
              </div>
            ) : (
              <Icon type="Message" style={{ marginRight: "8px" }} />
            )}
          </CommentColumn>
        </td>
        <td>
          <ColumnStatus color={statusColors[row.status]}>
            <StatusDiv backgroundColor={bckColoros[row.status]} border={bckColoros[row.status]}>
              <Icon type="Clock" style={{ marginRight: "8px" }} />
              {row.status}
            </StatusDiv>
            <IconAbsolute type="Divider" />
          </ColumnStatus>
        </td>
        <td style={{ borderTopRightRadius: "10px" }}>
          <ColumnNumber>
            <Div href={row.proceed} style={{ marginRight: "24px" }}>
              Продлить
            </Div>

            <Div href={row.download}>Скачать</Div>
          </ColumnNumber>
        </td>
      </tr>
      {row.extraDoc?.map((doc) => (
        <>
          <tr>
            <td colSpan={7}>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <td>
                  <FirstColumn></FirstColumn>
                </td>

                <td>
                  <ColumnNumber style={{ justifyContent: "space-between" }}>
                    {doc.numberContract}

                    <IconAbsolute type="Divider" />
                  </ColumnNumber>
                </td>

                <td>
                  <DataColumn>
                    {getFormatedDate(doc.startDate)} <IconAbsolute type="Divider" />
                  </DataColumn>
                </td>
                <td>
                  <DataColumn>
                    {getFormatedDate(doc.finalDate)} <IconAbsolute type="Divider" />
                  </DataColumn>
                </td>
                <td>
                  <CommentColumn>
                    <IconAbsolute type="Divider" />
                    {doc.commentInfo ? (
                      <div>
                        <div onClick={handleOpen}>
                          <Icon type="Message" style={{ marginRight: "8px" }} />
                          {doc.commentInfo.length}
                        </div>
                        <Modal
                          open={openModal}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description">
                          <ModalInfo com={doc.commentInfo} handleClose={handleClose} />
                        </Modal>
                      </div>
                    ) : (
                      <Icon type="Message" style={{ marginRight: "8px" }} />
                    )}
                  </CommentColumn>
                </td>
                <td>
                  <ColumnStatus color={statusColors[doc.status]}>
                    {/* <Icon type="{iconStatus[row.status]}" /> */}
                    {doc.status}
                    <IconAbsolute type="Divider" />
                  </ColumnStatus>
                </td>
                <td style={{ borderTopRightRadius: "10px" }}>
                  <ColumnNumber>
                    <Div href={doc.proceed} style={{ marginRight: "24px" }}>
                      Продлить
                    </Div>

                    <Div href={doc.download}>Скачать</Div>
                  </ColumnNumber>
                </td>
              </Collapse>
            </td>
          </tr>
        </>
      ))}
    </>
  );
};
