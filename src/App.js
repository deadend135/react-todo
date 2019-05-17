import React, { Component, Suspense, lazy } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navigation from './components/Navigation';
import { Route } from 'react-router-dom';
import asyncComponent from './components/AsyncComponent';
import Loadable from 'react-loadable';

//import AddToDo from './containers/AddToDo';
//import ToDoListContainer from './containers/ToDoListContainer';

//const AddToDo = lazy(() => import('./containers/AddToDo'));

// const AddToDo = lazy(() => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(import("./containers/AddToDo"), 300);
//   });
// });

//const ToDoListContainer = lazy(() => import('./containers/ToDoListContainer'));

// const AddToDo = lazy(() => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(import("./containers/ToDoListContainer"), 300);
//   });
// });

const AddToDo = asyncComponent(() => import('./containers/AddToDo'));

// const AddToDo = asyncComponent(Loadable({
//   loader: ()=> import("./containers/AddToDo"),
//   loading:()=> <div>Loadable ......</div>
// }));

const ToDoListContainer = asyncComponent(() =>
  import('./containers/ToDoListContainer')
);

// const ToDoListContainer = asyncComponent(Loadable({
//   loader: ()=> import("./containers/ToDoListContainer"),
//   loading:()=> <div>Loadable ......</div>
// }));

class App extends Component {
  render() {
    return (
      <Container>
        <Row className="row">
          <Col xs={12}>
            <h1>To Do List</h1>
            <Navigation />
            {/* <Suspense fallback={<div>loading .......</div>}> */}

            <Route exact path="/" component={ToDoListContainer} />
            <Route exact path="/new-item" component={AddToDo} />
            {/* <AddToDo />
              <ToDoListContainer /> */}
            {/* </Suspense> */}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
