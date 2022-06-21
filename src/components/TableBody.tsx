import {
  ColumnNumber,
  FirstColumn,
  DataColumn,
  CommentColumn,
  Button,
  Div,
  StatusDiv,
} from "./Table.style";
import { Icon, IconAbsolute, IconSmall } from "./IconComponent/Icon";
import { RowType } from "./Table";
import { FC, useState } from "react";
import { TableStatus } from "../constants/TableType";
import { BCKCOLORS, BORDERS, COLORS, ICONSTATUS } from "../constants/colors";
import styled from "@emotion/styled";
import { Collapse, Modal } from "@mui/material";
import moment from "moment";
import { ModalInfo } from "./ModalInfo";

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
export const iconStatus: Record<TableStatus, ICONSTATUS> = {
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
              <div style={{ display: "flex", alignItems: "center" }}>
                {row.isRead ? <IconSmall type="Dot" /> : ""}
                <div onClick={handleOpen}>
                  <Icon type="Message" style={{ margin: " 0 8px" }} />
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
              <Icon type={iconStatus[row.status]} style={{ marginRight: "8px" }} />
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
                      <div style={{ display: "flex", alignItems: "center" }}>
                        {doc.isRead ? <IconSmall type="Dot" /> : ""}
                        <div onClick={handleOpen}>
                          <Icon type="Message" style={{ margin: " 0 8px" }} />
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
                    <StatusDiv
                      backgroundColor={bckColoros[doc.status]}
                      border={bckColoros[doc.status]}>
                      <Icon type={iconStatus[doc.status]} />
                      {doc.status}
                    </StatusDiv>
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
