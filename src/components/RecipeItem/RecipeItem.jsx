import React from 'react'
import { Col,Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import '../RecipeItem/RecipeItem.css'

export default function RecipeItem({item}) {
  return (
    <div className='item-container'>
      <Col className="recipe-card" lg={5}>
              
                <div key={item.id}>
                  <Row className="recipe-title">
                    <h4>{item.title}</h4>
                  </Row>
                  <Row>
                    <img src={item.image_url} alt={item.image_url} />
                  </Row>
                </div>
                <NavLink to={`/recipe/${item.id}`} className="detail-link">
                  Recipie Details 
              </NavLink>
            </Col>
    </div>
  )
}

