import React from "react";
import { MDBDataTable } from "mdbreact";

const DatatablePage = () => {
  const data = {
    columns: [
      {
        label: "Year",
        field: "name",
        sort: "asc",
        width: 150
      },
      {
        label: "District",
        field: "position",
        sort: "asc",
        width: 270
      },
      {
        label: "AGE_CAT",
        field: "office",
        sort: "asc",
        width: 200
      },
      {
        label: "GENDER",
        field: "age",
        sort: "asc",
        width: 100
      },
      {
        label: "COUNT",
        field: "date",
        sort: "asc",
        width: 150
      }
    ],
    rows: [
      {
        name: "1997",
        position: "25",
        office: "2",
        age: "2",
        date: "75328.8",
        salary: "$320"
      },
      {
          name: "1997",
          position: "25",
          office: "2",
          age: "1",
          date: "17328.8",
        salary: "$170"
      },
      {
          name: "1997",
          position: "25",
          office: "3",
          age: "2",
          date: "22328.8",
        salary: "$86"
      },
      {
          name: "1997",
          position: "25",
          office: "1",
          age: "1",
          date: "728.8",
        salary: "$433"
      }
    ]
  };

  return <MDBDataTable striped bordered hover data={data} />;
};

export default DatatablePage;
