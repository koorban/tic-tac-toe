import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button'

export default function AppJumboTron() {
    return (
        <Jumbotron style={{textAlign: 'center'}}>
            <h1>Tic Tac Toe Application!</h1>
            <p>
                A simple Tic Tac Toe App. Have fun!
            </p>
            <p>
                <Button href='/'>Reset</Button>
            </p>
        </Jumbotron>
    )
}
