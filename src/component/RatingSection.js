import { Avatar } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import React from 'react'
import styled from 'styled-components';
const RatingSection = (props) => {
    const { customer_name, vendor_rating, review_comments, rated_date } = props;
    return (
        <Container>
            <PhotoContainer><Avatar /></PhotoContainer>
            <ContaintContainer>
                <NameAndRate>
                    <span style={{ fontSize: '16px', whiteSpace: 'nowrap' }}>{customer_name}</span>
                    <Rating readOnly value={vendor_rating} precision={0.5} />
                </NameAndRate>
                <ReviewSpan>
                    <span style={{ fontSize: '14px' }}>{review_comments}</span>

                </ReviewSpan>
                <span style={{ color: '#CDCED2', fontSize: '12px' }}>{rated_date}</span>
            </ContaintContainer>

        </Container>
    )
}

const Container = styled.div`
display:flex;
padding:10px 0px;

`;

const PhotoContainer = styled.div`
align-items: center;
flex:1;
`;

const ContaintContainer = styled.div`
flex:9;
display:flex;
flex-direction:column;
justify-content:space-between;
padding:10px;
`;
const NameAndRate = styled.div`
display: flex;
flex-direction: revert;
justify-content: space-between;
`;

const ReviewSpan = styled.div`
height:100%;
padding:10px 0;
`;
export default RatingSection
