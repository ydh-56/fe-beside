import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    @keyframes ring {
        0%,
        100% {
            transform: rotate(0deg);
        }
        5% {
            transform: rotate(-30deg);
        }
        10% {
            transform: rotate(25deg);
        }
        15% {
            transform: rotate(-25deg);
        }
        20% {
            transform: rotate(20deg);
        }
        25% {
            transform: rotate(-20deg);
        }
        30% {
            transform: rotate(15deg);
        }
        35% {
            transform: rotate(-15deg);
        }
        40% {
            transform: rotate(15deg);
        }
        45% {
            transform: rotate(0deg);
        }
    }

    .bell {
        animation-name: ring;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        background-color: gold;
        border-radius: 50% 50% 0 0;
        height: 75px;
        position: relative;
        transform: rotate(-30deg);
        transform-origin: top center;
        width: 80px;

        &::before {
            background-color: gold;
            border-radius: 50%;
            content: '';
            height: 20px;
            left: 50%;
            position: absolute;
            top: 0;
            transform: translate(-50%, -50%);
            width: 20px;
        }

        &::after {
            background-color: gold;
            border-radius: 5px;
            content: '';
            height: 10px;
            left: 50%;
            position: absolute;
            bottom: 0;
            transform: translate(-50%, 50%);
            width: 100px;
        }
    }

    .tongue {
        background: gold;
        position: absolute;
        bottom: -15px;
        left: 50%;
        height: 10px;
        width: 20px;
        transform: translate(-50%, 50%);
        border-radius: 0 0 10px 10px;
    }

    .quote {
        color: gold;
        margin-bottom: 20px;
        font-size: 30px;
    }

    html,
    body {
        height: 100%;
    }

    @import url(https://fonts.googleapis.com/css?family=Poiret+One);
    body {
        font-family: 'Poiret One';
        background-color: #3be2bb;
        align-items: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
`

const Bell = () => {
    return (
        <Container>
            <div className="bell">
                <div className="tongue" />
            </div>
        </Container>
    )
}

export default Bell
