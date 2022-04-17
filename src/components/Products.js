import React from 'react'
import Card from './Card'
import styled from 'styled-components'
import { products } from './products_content';

const Container = styled.div`
   width: 90%;
   margin: 0 auto;
   display: grid;
   justify-content: space-between;
   grid-template-columns: 1fr 1fr 1fr;
   column-gap: 6em;
   row-gap: 6em;
   padding-bottom: 6em;
   border-radius:1em;
`;

function Products(){
    return(
        <Container className="container-fluid">
            {products.map((product) =>
                <Card 
                    title = {product.title}
                    imgURL = {product.imgURL}
                    body = {product.body}
                    />
            )}
        </Container>
    )
}

export default Products;