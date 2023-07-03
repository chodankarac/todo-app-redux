import React, { useState } from "react";
import { Button, Card, Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import DisplayCount from "./DisplayCount";
import { addTodo } from "../redux/actions/todo";
import { connect } from "react-redux";

const AddTodos = ({ addTodo }) => {
  const [todo, setTodo] = useState({ title: "", description: "" });
  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(todo);
    //add todo in store
    console.log(todo);
    setTodo({
      title: "",
      description: "",
    });
  };
  return (
    <Container>
      <Row>
        <Col md={12}>
          <Card className="shadow-sm">
            <Card.Body>
              <h3>Add Todo Here!</h3>
              <DisplayCount />
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>Todo Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Here!"
                    value={todo.title}
                    onChange={(event) => setTodo({ ...todo, title: event.target.value })}
                  />
                </Form.Group>
                <FormGroup className="mt-3">
                  <Form.Label>Todo Description</Form.Label>
                  <Form.Control
                    // as={"textArea"}
                    type="text"
                    placeholder="Enter Here!"
                    value={todo.description}
                    onChange={(event) => setTodo({ ...todo, description: event.target.value })}
                  />
                </FormGroup>
                <Container className="text-center">
                  <Button type="submit" variant="primary">
                    Add Todo
                  </Button>
                </Container>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodo(todo)),
});
export default connect(mapStateToProps, mapDispatchToProps)(AddTodos);
