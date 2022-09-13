import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {
  Button,
  FormControl,
  InputGroup,
  FormGroup,
  Form,
  ListGroup,
  Badge,
  Row,
  Container,
  Col,
  Alert,
} from "react-bootstrap";

import { Link } from "react-router-dom";

import { Trash3Fill, PlusCircle } from "react-bootstrap-icons";
import useOperations from "./Hooks/useOperations";
import { RepositoryTodoList } from "./Repository/RepositoryTodoList";

export default function App() {
  const [ValueInput, setValueInput] = useState("");
  const { AddItem, GetItems, DeleteItemId } = useOperations();
  const [ShowAlert, setShowAlert] = useState<boolean>(false);
  const [DeleteAlert, setDeleteAlert] = useState<boolean>(false);

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Prueba Tecnica
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarID"
            aria-controls="navbarID"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarID"
          >
            <div className="navbar-nav gap-2 ">
              <Link
                className="btn btn-success active "
                aria-current="page"
                to="/user/login"
              >
                Login
              </Link>

              <Link
                className="btn btn-success active  bg-danger"
                aria-current="page"
                to="/user/register"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Container fluid="md" className="vh-100">
        <div className="display-1 my-5 text-bg-dark text-center">Todo List</div>
        <Row className="align-items-center justify-content-center vh-50">
          <Col md="auto">
            <Alert
              variant="success"
              dismissible
              show={ShowAlert}
              onClose={() => setShowAlert(false)}
            >
              Congratulations, Add Item!
            </Alert>
            <Alert
              variant="danger"
              dismissible
              show={DeleteAlert}
              onClose={() => setDeleteAlert(false)}
            >
              Congratulations, Delete Item!
            </Alert>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                AddItem(ValueInput);
                setValueInput("");
                setShowAlert(true);
              }}
            >
              <Form.Group as={Row} className="mb-3">
                <InputGroup>
                  <FormControl
                    type="text"
                    value={ValueInput}
                    onChange={(e) => setValueInput(e.target.value)}
                  />
                  <Col sm={4}>
                    <FormControl type="submit" className="text-bg-success " />
                  </Col>
                </InputGroup>
              </Form.Group>
            </Form>
            <ListGroup as="ol" numbered>
              {GetItems().map((item) => {
                return (
                  <ListGroup.Item
                    variant="info"
                    key={item.id}
                    as="li"
                    className="d-flex justify-content-between  align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold"> {item.name}</div>
                    </div>
                    <Badge
                      bg="danger"
                      onClick={() => {
                        DeleteItemId(item.id);
                        setDeleteAlert(true);
                      }}
                    >
                      <Trash3Fill />
                    </Badge>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Col>

          <Col md="auto" className="flex justify-content-center text-center ">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/000/963/090/small/cartoon-man-with-to-do-list-on-clipboard.jpg"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
