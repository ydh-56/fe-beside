import React from 'react'
import styled from 'styled-components'

import MeetingStep from './MeetingStep'
import MeetingForm from './MeetingForm'

const Container = styled.div`
    margin-top: 20px;
    padding-right: 28px;
    /* border: 1px solid teal; */
    height: 508px;
    overflow: scroll;
    font-family: Pretendard;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
`

function MeetingBody() {
    return (
        <Container>
            <MeetingStep />
            <MeetingForm />
        </Container>
    )
}

export default MeetingBody
