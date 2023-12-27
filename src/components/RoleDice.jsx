import React, { useState } from 'react'
import styled from 'styled-components'

const RoleDice = ({ randomNumber, currentDice }) => {


    return (
        <DiceContainer>
            <div className='dice' onClick={randomNumber}>
                <img src={`/images/dice/dice_${currentDice}.png`} alt="dice 1" />
                {/* <img src="/images/dice/dice_2.png" alt="dice 1" />
                <img src="/images/dice/dice_3.png" alt="dice 1" />
                <img src="/images/dice/dice_4.png" alt="dice 1" />
                <img src="/images/dice/dice_5.png" alt="dice 1" />
                <img src="/images/dice/dice_6.png" alt="dice 1" /> */}
            </div>
            <p>click on dice to roll</p>
        </DiceContainer>
    )
}

export default RoleDice

const DiceContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 48px;
    flex-direction: column;
    cursor: pointer;
    .dice{
        cursor: pointer;
    }
    p{
        font-size: 25px;
        font-weight: 700;
    }
`