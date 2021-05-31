/* eslint-disable react-hooks/exhaustive-deps */
import { IconButton, List, ListItem, ListItemText } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import React, { useContext, useEffect, useState } from 'react'
import { DebounceInput } from 'react-debounce-input';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import AppContext from '../service/app/AppContext';

const placeHolder = 'Search artists and topics here…';

const Landing = ({ history }) => {

    const { searchUser, searchData } = useContext(AppContext);

    const [query, setQuery] = useState('')
    const [cursorPosition, setCursorPosition] = useState({ cursor: 0, result: [] });

    useEffect(() => { document.getElementById('id').focus(); }, [])

    useEffect(() => {
        searchUser(query);
        setCursorPosition(prevState => ({
            result: searchData
        }))

    }, [query])



    const handleKeyDown = (e) => {

        const { cursor, result } = cursorPosition;
        // arrow up/down button should select next/previous list element
        if (e.keyCode === 38 && cursor > 0) {
            setCursorPosition(prevState => ({
                cursor: prevState.cursor - 1
            }))
        } else if (e.keyCode === 40 && cursor < result.length - 1) {
            setCursorPosition(prevState => ({
                cursor: prevState.cursor + 1
            }))
        }
    }
    return (
        <Container>
            <Helmet>
                <title>{'Search'}</title>
            </Helmet>
            <SearchContainer>
                <div style={{ width: '100%', display: 'flex', padding: '2px 10px' }}>
                    <SearchInput
                        id='id'
                        placeholder={placeHolder}
                        minLength={2}
                        value={query}
                        debounceTimeout={300}
                        autoComplete="off"
                        onChange={event => setQuery(event.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <SearchIcon>
                        <IconButton style={{ padding: '0px' }}>
                            <Search scale={2}></Search>
                        </IconButton>
                    </SearchIcon>
                </div>
                {searchData.length > 0 &&
                    <div >
                        <List component="nav" aria-label="secondary mailbox folders" >
                            {searchData.map((element, i) => {
                                const { artist_type, vendor_city, vendor_name, vendor_page_url, } = element;
                                const url = `/profile/${artist_type}/${vendor_city}/${vendor_page_url}`
                                return (
                                    <ListItem key={vendor_page_url} value={url} onClick={() => history.replace(url)}>
                                        <ListItemText primary={vendor_name} />
                                    </ListItem>
                                )
                            })
                            }

                        </List>
                    </div>
                }
            </SearchContainer>
        </Container >
    )
}


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    height: 100vh;
    overflow: hidden;
`;


const SearchInput = styled(DebounceInput)`
flex:8;
width:inherit;
border:none;
outline: none;
height: 30px;
`;

const SearchIcon = styled(Search)`
flex:1;
color:#707070;  
padding:2px;
margin:2px;
height: 30px;
`;

const SearchContainer = styled.div`
display: flex;
border: 1px solid #7070704A;
border-radius: 20px;
font-size: 20px;
width: 100%;
max-width: 280px;
padding : 2px; 
position: absolute;
top: 40%;
flex-direction: column;
`;
export default Landing;
