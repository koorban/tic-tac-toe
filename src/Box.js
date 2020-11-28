import React, { useContext, useState, useEffect } from 'react'
import { TicTacContext } from './ContextTicTacToe';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DisplayValue from './DisplayValue';

export default function Box({ id }) {
    const { scoreBoard, updateScore } = useContext(TicTacContext);
    const [isClicked, setIsClicked] = useState(false);
    const [boxValue, setBoxValue] = useState('');

    const checkWinner = (inputValue) => {
        let result = scoreBoard.filter(item => item.value === inputValue);
        let arrayResult = result.map(res => res.id);
        
        let message = '';

        if (arrayResult.includes(0) & arrayResult.includes(1) & arrayResult.includes(2)) {
            message = `${inputValue} is the winner!`;
            alert(message)
        } else if (arrayResult.includes(3) & arrayResult.includes(4) & arrayResult.includes(5)) {
            message = `${inputValue} is the winner!`;
            alert(message)
        }
        else if (arrayResult.includes(6) & arrayResult.includes(7) & arrayResult.includes(8)) {
            message = `${inputValue} is the winner!`;
            alert(message)
        }
        else if (arrayResult.includes(0) & arrayResult.includes(3) & arrayResult.includes(6)) {
            message = `${inputValue} is the winner!`;
            alert(message)
        }
        else if (arrayResult.includes(1) & arrayResult.includes(4) & arrayResult.includes(7)) {
            message = `${inputValue} is the winner!`;
            alert(message)
        }
        else if (arrayResult.includes(2) & arrayResult.includes(5) & arrayResult.includes(8)) {
            message = `${inputValue} is the winner!`;
            alert(message)
        }
        else if (arrayResult.includes(0) & arrayResult.includes(4) & arrayResult.includes(8)) {
            message = `${inputValue} is the winner!`;
            alert(message)
        }
        else if (arrayResult.includes(2) & arrayResult.includes(4) & arrayResult.includes(6)) {
            message = `${inputValue} is the winner!`;
            alert(message)
        } else {
            
        }
        return arrayResult;
    };

    useEffect(()=>{
        checkWinner("X");
        checkWinner("O");
    }, [scoreBoard]);
   
    const handleClick = (boxId, inputValue) => {
        setIsClicked(true);
        setBoxValue(inputValue);
        updateScore(boxId, inputValue)
    };

    if(!isClicked) {
        return (
            <Card className='text-center' style={{minHeight: '350px'}}>
                <Card.Body>
                    <Card.Title>
                        Choose Wisely Padawan
                    </Card.Title>
                    <Button 
                        variant="success" 
                        size="lg"
                        onClick={() => handleClick(id, 'X')}
                        style={{padding: '2em', marginTop: '3em', marginRight: '2em'}}
                    >
                        X
                    </Button>
                    <Button 
                        variant="danger" 
                        size="lg"
                        onClick={() => handleClick(id, 'O')}
                        style={{padding: '2em', marginTop: '3em', marginRight: '2em'}}
                    >
                        O
                    </Button>
                </Card.Body>
            </Card>
        )
    } else {
        return (
            <DisplayValue value={boxValue} />
        )
    }
};
