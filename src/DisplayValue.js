import React from 'react'
import Card from 'react-bootstrap/Card';
import imageO from '../src/O.jpg'
import imageX from '../src/X.jpg';

export default function DisplayValue({ value }) {
   if(value === 'X' ) {
       return (
           <Card>
                <Card.Img variant="top" src={imageX} />
           </Card>
       )
   } else {
       return (
           <Card>
               <Card.Img variant="top" src={imageO} />
           </Card>
       )
   }
};
