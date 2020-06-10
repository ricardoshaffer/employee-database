import React from "react";
import '../App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
function TableHeader(props) {
    return (
      <Container fluid>
          <thead>
              <Row>
                  <Col></Col>
                  <Col onClick={props.sortByName}>Name</Col>
                  <Col>Phone</Col>
              </Row>
          </thead>

          <tbody>
              {props.results.map(result => (
                  <Row key={result.login.uuid}>
                   

                      <Col> <img
                      src={result.picture.medium} title={result.name.first + " " + result.name.last} alt={result.name.first + " " + result.name.last} /></Col>
                      
                      <Col>{result.name.first + " " + result.name.last}  </Col>

                      <Col>{result.cell}</Col>
                      <hr></hr>
                  </Row>
              ))}
          </tbody>
      </Container >
  )
}


export default TableHeader