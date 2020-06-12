import React from "react";
import '../App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
function TableHeader(props) {
    return (
        <>
      <Container fluid>
          <thead className="">
              <Row className="employee-row sticky-top">
                  <Col></Col>
                  <Col className="hover-pointer heading" onClick={props.sortByName}>Name</Col>
                  <Col className="heading">Phone</Col>
              </Row>
          </thead>
          <tbody className="employee-row">
              {props.results.map(result => (
                  <Row key={result.login.uuid} className="employee-row">
                      <Col> <img
                      src={result.picture.medium} title={result.name.first + " " + result.name.last} alt={result.name.first + " " + result.name.last} /></Col>
                      <Col>{result.name.first + " " + result.name.last}  </Col>
                      <Col>{result.cell}</Col>
                  </Row>
              ))}
          </tbody>
      </Container >
      </>
  )
}


export default TableHeader