import React from "react";
import { Fragment } from "react";
import {Table} from 'react-bootstrap';


function TableUser (props) {
  const { name: uname, email: uemail, phone: uphone , address : uaddress} = props.items;

  return (
    <Fragment>
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Address</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{uname}</td>
      <td>{uemail}</td>
      <td>{uphone}</td>
      <td>{uaddress}</td>
    </tr>
  </tbody>
</Table>
    </Fragment>
  );
}
export default TableUser;