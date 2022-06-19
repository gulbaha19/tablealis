import { TableStatus } from "../../constants/TableType";

export const tableData = [
  {
    id: 1,
    numberContract: 123567,
    startDate: 1669509869,
    finalDate: 1669509869,
    status: TableStatus.CANCELED,
    isRead: true,
    commentInfo: [
      {
        name: "Andy",
        date: 1669509869,
        comment: "Договор принят в работу",
        isRead: true,
        status: TableStatus.CANCELED,
      },
      {
        name: "Peter",
        date: 1669509869,
        comment:
          "Здравствуйте! Причина отказа договора № 123567 это неправильно заполненные данные. Измените эти данные и переотправьте на утверждение",
        isRead: false,
        status: TableStatus.CANCELED,
      },
    ],
    proceed:
      "https://19of32x2yl33s8o4xza0gf14-wpengine.netdna-ssl.com/wp-content/uploads/Exhibit-A-SAMPLE-CONTRACT.pdf",
    download:
      "https://19of32x2yl33s8o4xza0gf14-wpengine.netdna-ssl.com/wp-content/uploads/Exhibit-A-SAMPLE-CONTRACT.pdf",
  },
  {
    extraDoc: [
      {
        numberContract: "123567",
        startDate: 1669509869,
        finalDate: 1669509869,
        status: TableStatus.CANCELED,
        isRead: true,
        commentInfo: [
          {
            name: "wj",
            date: 1669509869,
            comment: "Договор принят в работу",
            isRead: true,
            status: TableStatus.CANCELED,
          },
        ],
        proceed:
          "https://19of32x2yl33s8o4xza0gf14-wpengine.netdna-ssl.com/wp-content/uploads/Exhibit-A-SAMPLE-CONTRACT.pdf",
        download:
          "https://19of32x2yl33s8o4xza0gf14-wpengine.netdna-ssl.com/wp-content/uploads/Exhibit-A-SAMPLE-CONTRACT.pdf",
      },
    ],
    id: 2,
    isRead: true,
    numberContract: 123511,
    startDate: 1667829917,
    finalDate: 1669509869,
    status: TableStatus.CANCELED,
    proceed:
      "https://19of32x2yl33s8o4xza0gf14-wpengine.netdna-ssl.com/wp-content/uploads/Exhibit-A-SAMPLE-CONTRACT.pdf",
    download:
      "https://19of32x2yl33s8o4xza0gf14-wpengine.netdna-ssl.com/wp-content/uploads/Exhibit-A-SAMPLE-CONTRACT.pdf",
  },

  {
    id: 3,
    numberContract: 123512,
    startDate: 1646920999,
    finalDate: 1669509869,
    status: TableStatus.PROCESSING,
    isRead: false,
    proceed:
      "https://19of32x2yl33s8o4xza0gf14-wpengine.netdna-ssl.com/wp-content/uploads/Exhibit-A-SAMPLE-CONTRACT.pdf",
    download:
      "https://19of32x2yl33s8o4xza0gf14-wpengine.netdna-ssl.com/wp-content/uploads/Exhibit-A-SAMPLE-CONTRACT.pdf",
  },

  {
    id: 4,
    numberContract: 3536278,
    startDate: 1648890158,
    finalDate: 1669509869,
    status: TableStatus.AFFIRM,
    isRead: false,
    proceed:
      "https://19of32x2yl33s8o4xza0gf14-wpengine.netdna-ssl.com/wp-content/uploads/Exhibit-A-SAMPLE-CONTRACT.pdf",
    download:
      "https://19of32x2yl33s8o4xza0gf14-wpengine.netdna-ssl.com/wp-content/uploads/Exhibit-A-SAMPLE-CONTRACT.pdf",
  },

  {
    id: 5,
    numberContract: 3637399,
    startDate: 1665525496,
    finalDate: 1669509869,
    status: TableStatus.CANCELED,
    isRead: false,
    proceed:
      "https://19of32x2yl33s8o4xza0gf14-wpengine.netdna-ssl.com/wp-content/uploads/Exhibit-A-SAMPLE-CONTRACT.pdf",
    download:
      "https://19of32x2yl33s8o4xza0gf14-wpengine.netdna-ssl.com/wp-content/uploads/Exhibit-A-SAMPLE-CONTRACT.pdf",
  },

  {
    id: 6,
    numberContract: 3633399,
    startDate: 1652570341,
    finalDate: 1669509869,
    status: TableStatus.AFFIRM,
    isRead: false,
    proceed:
      "https://19of32x2yl33s8o4xza0gf14-wpengine.netdna-ssl.com/wp-content/uploads/Exhibit-A-SAMPLE-CONTRACT.pdf",
    download:
      "https://19of32x2yl33s8o4xza0gf14-wpengine.netdna-ssl.com/wp-content/uploads/Exhibit-A-SAMPLE-CONTRACT.pdf",
  },
  {
    id: 7,
    numberContract: 335730,
    startDate: 1652570341,
    finalDate: 1669509869,
    isRead: false,
    status: TableStatus.AFFIRM,
    extraDoc: [
      {
        numberContract: "123567",
        startDate: 1669509869,
        finalDate: 1669509869,
        status: TableStatus.CANCELED,
        isRead: true,
        commentInfo: [
          {
            name: "wj",
            date: 1669509869,
            comment: "hello",
            isRead: false,
            status: TableStatus.AFFIRM,
          },
        ],
        proceed:
          "https://19of32x2yl33s8o4xza0gf14-wpengine.netdna-ssl.com/wp-content/uploads/Exhibit-A-SAMPLE-CONTRACT.pdf",
        download:
          "https://19of32x2yl33s8o4xza0gf14-wpengine.netdna-ssl.com/wp-content/uploads/Exhibit-A-SAMPLE-CONTRACT.pdf",
      },
      {
        numberContract: "123567",
        startDate: 1669509869,
        finalDate: 1669509869,
        status: TableStatus.CANCELED,
        isRead: true,
        commentInfo: [
          {
            name: "wj",
            date: 1669509869,
            comment: "hello",
            isRead: true,
            status: TableStatus.PROCESSING,
          },
        ],
        proceed:
          "https://19of32x2yl33s8o4xza0gf14-wpengine.netdna-ssl.com/wp-content/uploads/Exhibit-A-SAMPLE-CONTRACT.pdf",
        download:
          "https://19of32x2yl33s8o4xza0gf14-wpengine.netdna-ssl.com/wp-content/uploads/Exhibit-A-SAMPLE-CONTRACT.pdf",
      },
    ],
    proceed:
      "https://19of32x2yl33s8o4xza0gf14-wpengine.netdna-ssl.com/wp-content/uploads/Exhibit-A-SAMPLE-CONTRACT.pdf",
    download:
      "https://19of32x2yl33s8o4xza0gf14-wpengine.netdna-ssl.com/wp-content/uploads/Exhibit-A-SAMPLE-CONTRACT.pdf",
  },
];
