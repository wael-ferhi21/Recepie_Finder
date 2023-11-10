import React from 'react'
import { Col ,Row} from 'react-bootstrap'

function SearchResult() {
  return (
    <div className="recipe-results-container">
    <Row className="recipe-container">
    <p id="search-req">Showing results for "{result}"</p>
    </Row>
    <div>
    <Col className='recepie-card' lg={5}>
      <Row className='recepie-title'></Row>
      <Row className='recepie-img'> 
      <img src="" alt="" />
      </Row>

      </Col>
    </div>
      </div>
  )
}

export default SearchResult