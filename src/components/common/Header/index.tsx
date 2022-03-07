import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import axios from '@axios'
import useSWR from 'swr'

import DropdownMenu from './DropdownMenu'

const Container = styled.div`
    background: linear-gradient(
        90deg,
        rgba(223, 237, 246, 1) 0%,
        rgba(231, 238, 241, 1) 47%,
        rgba(244, 241, 231, 1) 90%
    );
    .header_inner {
        display: flex;
        margin: 0 auto;
        align-items: center;
        justify-content: space-between;
        height: 80px;
        .header_logo {
            font-weight: 900;
            color: #0c254c;
            cursor: pointer;
        }
        .header_desc {
            display: flex;
            align-items: center;
            .username {
                font-weight: 900;
            }
            .description {
                padding-right: 12px;
            }
        }
    }
`

interface HeaderProps {
    desc?: string
}
function Header({ desc }: HeaderProps) {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [username, setUserName] = useState('')
    const onCloseModal = () => setIsOpenModal(false)
    const mockData = {
        username: '오구민',
        icon: '😊',
    }
    // const { data } = useSWR('http://127.0.0.1:8000/api/user/', (url) =>
    //     axios.get(url)
    // )
    useEffect(() => {
        // console.log(data)
        axios.get('http://127.0.0.1:8000/api/user/').then((res) => {
            console.log(res)
            setUserName(res.data.nickname)
        })
    }, [])
    return (
        <Container>
            <div className="header_inner" style={{ width: '1140px' }}>
                <div className="header_logo">
                    <Link href="/">59mins</Link>
                </div>
                <div className="header_desc">
                    <div className="username">{username}</div>
                    <div className="description">{desc}</div>
                    <div style={{ position: 'relative' }}>
                        <div
                            style={{
                                padding: '6px',
                                background: '#fff',
                                borderRadius: '50%',
                                cursor: 'pointer',
                            }}
                            onClick={() => setIsOpenModal((prev) => !prev)}
                        >
                            {mockData.icon}
                        </div>
                        {isOpenModal && <DropdownMenu onClose={onCloseModal} />}
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Header
