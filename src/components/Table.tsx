import {
  ColumnNumber,
  FirstColumn,
  DataColumn,
  CommentColumn,
  Thead,
  IconsUpDown,
} from "./Table.style";
import { DataGrid } from "@mui/x-data-grid";
import { Icon, IconAbsolute } from "./IconComponent/Icon";
import { TableStatus } from "../constants/TableType";
import { FC, useState } from "react";
import { TableBody } from "./TableBody";
import { COLORS } from "../constants/colors";
export type TableProps = {
  rows: RowType[];
};
export type RowType = {
  id: number;
  extraDoc?: extraDocProps[];
  numberContract: number;
  startDate: number;
  finalDate: number;
  commentInfo?: CommentsProps[];
  status: TableStatus;
  proceed: string;
  download: string;
  isRead: boolean;
};

export type CommentsProps = {
  isRead: boolean;
  name: string;
  picture?: string;
  status: TableStatus;
  date: number;
  comment: string;
};
type extraDocProps = {
  numberContract: string;
  startDate: number;
  finalDate: number;
  commentInfo?: CommentsProps[];
  status: TableStatus;
  proceed: string;
  download: string;
  isRead: boolean;
};

export const Table: FC<TableProps> = ({ rows }) => {
  const [data, setData] = useState(rows);
  const [direction, setDitecrion] = useState(false);
  const sortBy = (d: boolean) => {
    setDitecrion(d);
    const template = [...data];
    if (d) {
      template.sort((a, b) => a.numberContract - b.numberContract);
    } else {
      template.sort((a, b) => b.numberContract - a.numberContract);
      console.log("second");
    }
    setData(template);
  };
  return (
    <>
      <table
        style={{
          borderRadius: "10px",
          // border: "1px solid black",
          // margin: "20px",
          padding: 0,
          borderCollapse: "collapse",
        }}>
        <div
          style={{
            borderRadius: "inherit",
            boxSizing: "border-box",
            width: "100%",
          }}>
          <Thead>
            <tr>
              <th style={{ borderTopLeftRadius: "10px" }}>
                <FirstColumn />
              </th>

              <th>
                <ColumnNumber style={{ justifyContent: "space-between" }}>
                  № договора
                  <IconsUpDown onClick={() => sortBy(!direction)}>
                    <Icon type="IconUp" />
                    <Icon type="IconDown" />
                  </IconsUpDown>
                  <IconAbsolute type="Divider" />
                </ColumnNumber>
              </th>

              <th>
                <DataColumn>
                  Дата создания <IconAbsolute type="Divider" />
                </DataColumn>
              </th>
              <th>
                <DataColumn>
                  Дата окончания <IconAbsolute type="Divider" />
                </DataColumn>
              </th>
              <th>
                <CommentColumn>
                  Комментарии <IconAbsolute type="Divider" />
                </CommentColumn>
              </th>
              <th>
                <ColumnNumber>
                  Статус <IconAbsolute type="Divider" />{" "}
                </ColumnNumber>
              </th>
              <th style={{ borderTopRightRadius: "10px" }}>
                <ColumnNumber>Действие</ColumnNumber>
              </th>
            </tr>
          </Thead>
          <tbody>
            {data.map((row) => (
              <TableBody {...row} key={row.id} />
            ))}
          </tbody>
        </div>
      </table>
    </>
  );
};
