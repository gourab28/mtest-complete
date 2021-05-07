import React, { Fragment, useState, useEffect } from "react";
import { Dropdown, Button, Container, Row, Col, Alert } from "react-bootstrap";
import Alluser from "./components/Allusercomponent";
import "./App.css";

const LOCAL_STORAGE_KEY = "USERS_KEY";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [userphone, setUserphone] = useState("");
  const [useraddress, setUseraddress] = useState("");
  const [usrm, updateUsrmList] = useState([]);
  const [showAlert, changeAlertState] = useState(false);

  useEffect(() => {
    const storedusrm = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // console.log(storedusrm);
    if (storedusrm) updateUsrmList(storedusrm);
  }, []);

  // saving the usrm in browser storage to prevent loss of usrm on refreshing tab
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(usrm));
  }, [usrm]);

  // handling change in input box
  const handleInputChange = event => {
    setUsername(event.target.value);
    if (showAlert === true) {
      changeAlertState(false);
    }
  };
  const handleEmailChange = event => {
    setUseremail(event.target.value);
    if (showAlert === true) {
      changeAlertState(false);
    }
  };
  const handlePhoneChange = event => {
    setUserphone(event.target.value);
    if (showAlert === true) {
      changeAlertState(false);
    }
  };
  const handleAddressChange = event => {
    setUseraddress(event.target.value);
    if (showAlert === true) {
      changeAlertState(false);
    }
  };

  // handling add item button to add new todo in list
  const handleButtonClick = () => {
    if (username !== "") {
      const newItem = {
        name: username,
        email : useremail,
        phone : userphone,
        address : useraddress
      };
      updateUsrmList(previoususrm => {
        return [...previoususrm, newItem];
      });
      setUsername("");
    } else {
      changeAlertState(true);
    }
  };

  // handling enter key pressed
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleButtonClick();
    }
  }
  if(!isAdmin) {
    return (
      <Fragment>
      <div className="drop">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
              Dropdown Button
          </Dropdown.Toggle>
          <Dropdown.Menu>
          <Dropdown.Item onClick={() => setIsAdmin(false)}>Normal</Dropdown.Item>
          <Dropdown.Item onClick={() => setIsAdmin(true)}>Admin</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <Container className="mt-3 p-3 ">
        <h2 className=" p-3 text-center header-color text-white shadow-lg ">
          User Management List
        </h2>
      </Container>
       <Alluser usrm={usrm} />
      </Fragment>
      )
  }
  else {
  return (
    <Fragment>
      <div className="drop">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
              Dropdown Button
          </Dropdown.Toggle>
          <Dropdown.Menu>
          <Dropdown.Item onClick={() => setIsAdmin(false)}>Normal</Dropdown.Item>
          <Dropdown.Item onClick={() => setIsAdmin(true)}>Admin</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <Container className="mt-3 p-3 ">
        <h2 className=" p-3 text-center header-color text-white shadow-lg ">
         Add User Management
        </h2>

        <Row className="p-2 mt-3 mx-auto">
          <Col xs={12} sm={12} md={12}>
            <Alert variant="danger" className="fade show" show={showAlert}>
              Oopss!!! enter something...
            </Alert>{" "}
          </Col>
          <Col
            xs={12}
            sm={12}
            md={8}
            className="p-3 d-flex justify-content-center"
          >
            <input
              className="  shadow form-control d-flex justify-content-center "
              type="text"
              value={username}
              style={{ height: "50px" }}
              onChange={handleInputChange}
              placeholder="Enter Name..."
              onKeyDown={handleKeyPress}
            />
          </Col>
          <Col
            xs={12}
            sm={12}
            md={8}
            className="p-3 d-flex justify-content-center"
          >
            <input
              className="  shadow form-control d-flex justify-content-center "
              type="text"
              value={useremail}
              style={{ height: "50px" }}
              onChange={handleEmailChange}
              placeholder="Enter Email..."
              onKeyDown={handleKeyPress}
            />
          </Col>
          <Col
            xs={12}
            sm={12}
            md={8}
            className="p-3 d-flex justify-content-center"
          >
            <input
              className="  shadow form-control d-flex justify-content-center "
              type="text"
              value={userphone}
              style={{ height: "50px" }}
              onChange={handlePhoneChange}
              placeholder="Enter phone..."
              onKeyDown={handleKeyPress}
            />
          </Col>
           <Col
            xs={12}
            sm={12}
            md={8}
            className="p-3 d-flex justify-content-center"
          >
            <input
              className="  shadow form-control d-flex justify-content-center "
              type="text"
              value={useraddress}
              style={{ height: "50px" }}
              onChange={handleAddressChange}
              placeholder="Enter Adress..."
              onKeyDown={handleKeyPress}
            />
          </Col>
          <Col
            xs={12}
            sm={12}
            md={4}
            className="p-3 d-flex justify-content-center"
          >
            <Button
              className="addItem btn-lg w-75 shadow "
              variant="outline-warning"
              onClick={handleButtonClick}
            >
              Add User
            </Button>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
  }
}
export default App;