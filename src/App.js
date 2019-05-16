import React, { Component, Suspense, lazy } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

//import AddToDo from './containers/AddToDo';
//import ToDoListContainer from './containers/ToDoListContainer';

const AddToDo = lazy(() => import('./containers/AddToDo'));
// const AddToDo = lazy(() => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(import("./containers/AddToDo"), 300);
//   });
// });

const ToDoListContainer = lazy(() => import('./containers/ToDoListContainer'));
// const AddToDo = lazy(() => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(import("./containers/ToDoListContainer"), 300);
//   });
// });
class App extends Component {
  render() {
    return (
      <Container>
        <Row className="row">
          <Col xs={12}>
            <h1>To Do List</h1>
            <Suspense fallback={<div>loading .......</div>}>
              <AddToDo />
              <ToDoListContainer />
            </Suspense>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
