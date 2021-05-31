/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Rating } from '@material-ui/lab';
import React, { useContext, useEffect, useState } from 'react'
import Gallery from 'react-photo-gallery';
import styled from 'styled-components';
import RatingSection from '../component/RatingSection';

import AppContext from '../service/app/AppContext';


const tempPhotos = [
    {
        src: 'https://images.unsplash.com/photo-1613390792897-aa0c06a52332?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8YXJjaGljdHVyZXxlbnwwfHx8fDE2MjA4OTkxOTU&ixlib=rb-1.2.1',
        width: 3,
        height: 4
    },
    {
        src: 'https://images.unsplash.com/photo-1614115866447-c9a299154650?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTB8fGFyY2hpY3R1cmV8ZW58MHx8fHwxNjIwODk5MTk1&ixlib=rb-1.2.1',
        width: 3,
        height: 2
    }, {
        src: 'https://images.unsplash.com/photo-1609417006671-091090cf6af1?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8YXJjaGljdHVyZXxlbnwwfHx8fDE2MjA4OTkxOTU&ixlib=rb-1.2.1',
        width: 1,
        height: 1
    }, {
        src: 'https://images.unsplash.com/photo-1613258488197-04297077fe10?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NXx8YXJjaGljdHVyZXxlbnwwfHx8fDE2MjA4OTkxOTU&ixlib=rb-1.2.1',
        width: 1,
        height: 1
    }, {
        src: 'https://images.unsplash.com/photo-1611444713509-13551307f623?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Nnx8YXJjaGljdHVyZXxlbnwwfHx8fDE2MjA4OTkxOTU&ixlib=rb-1.2.1',
        width: 1,
        height: 1
    }, {
        src: 'https://images.unsplash.com/photo-1610824224317-ac64e52481c7?ixid=MnwxMjA3fDB8MXxzZWFyY2h8N3x8YXJjaGljdHVyZXxlbnwwfHx8fDE2MjA4OTkxOTU&ixlib=rb-1.2.1',
        width: 1,
        height: 1
    }, {
        src: 'https://images.unsplash.com/photo-1618397746666-63405ce5d015?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OHx8YXJjaGljdHVyZXxlbnwwfHx8fDE2MjA4OTkxOTU&ixlib=rb-1.2.1',
        width: 1,
        height: 1
    }
];
const Profile = (props) => {
    const { artist_type_url, city_url, vendor_page_url } = props.match.params;

    const { userData, getUser } = useContext(AppContext);

    const [userImagesLocal, setUserImagesLocal] = useState([]);
    const [userDataLocal, setUserDataLocal] = useState(userData);
    const { vendor_name, vendor_avatar, vendor_timeline_pic, artist_type, city_name, country_code, vendor_reviews, vendor_about, post_count, vendor_media } = userDataLocal;

    useEffect(() => {
        getUser({ artist_type_url, city_url, vendor_page_url }, (result) => {
            if (!result) props.history.replace('/');
        })

        setUserDataLocal(userData);
    }, [])

    useEffect(() => {
        setUserDataLocal(userData);
        setupImages(userData.vendor_media);
    }, [userData])


    const [rating] = useState(Math.floor(Math.random() * (5 - 0 + 1)) + 0);


    //TODO vendor count, foll, foll
    const tempData = [
        { data: '52', name: 'Collections' },
        { data: '1321', name: 'Followers' },
        { data: '20K', name: 'Following' },
    ]

    const TempProfileDetails = () => {
        return tempData.map((element, index) => {
            return (
                <DataDiv key={index}>
                    <Data>
                        {element.data}
                    </Data>
                    <DataName>
                        {element.name}
                    </DataName>
                </DataDiv>
            )
        })
    }



    const setupImages = (imagesArr) => {

        const hwArr = [
            { height: 2, width: 3 },
            { height: 2, width: 1 },
            { height: 3, width: 4 },
            { height: 4, width: 3 },
            { height: 5, width: 4 },
        ]
        if (imagesArr) {
            let newArr = imagesArr.filter(element => (element.media_type === 1))
            newArr = newArr.map(element => {
                const randomHW = hwArr[Math.floor(Math.random() * hwArr.length)]
                return (
                    { src: element.media_url, ...randomHW }
                )
            })

            const shuffled = newArr.sort(() => 0.5 - Math.random());

            setUserImagesLocal(shuffled.slice(0, 6));
        }
    }


    const ReviewSection = () => {
        if (vendor_reviews === undefined || vendor_reviews.length === 0) return <></>
        return (
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography ><b>See Reviews</b></Typography>
                </AccordionSummary>
                <AccordionDetails style={{ display: 'flex', flexDirection: 'column' }}>
                    {vendor_reviews?.map((element, index) => {
                        return (
                            <RatingSection key={index} {...element} />
                        )
                    })}
                </AccordionDetails>
            </Accordion>
        )
    }


    return (
        <MainContainer>
            <Container>
                <LeftProfileSection>
                    <PhotoAndRatting>
                        <ProfilePhoto
                            src={vendor_avatar}
                            style={{ height: '120px', width: '120px' }} />
                        <ProfileRating name='rating' precision={0.5} value={rating} readOnly />
                    </PhotoAndRatting>
                    <ProfileDetails >
                        <ProfilePersonal>
                            <ProfileName>{vendor_name}</ProfileName>
                            <ProfileType>{artist_type}</ProfileType>
                            <ProfileLocation>{city_name} - {country_code}</ProfileLocation>
                        </ProfilePersonal>
                        <ProfileInfo>
                            <TempProfileDetails />
                        </ProfileInfo>
                    </ProfileDetails>
                </LeftProfileSection>

                <RightProfileSection>
                    <TopSection>
                        <TopImage src={vendor_timeline_pic} alt='loading...' />
                    </TopSection>
                    <BottomSection>
                        <GallaryDiv>
                            {(userImagesLocal !== undefined && userImagesLocal.length > 0) &&
                                <Gallery margin={10} photos={userImagesLocal} direction={"column"} />
                            }
                        </GallaryDiv>
                        <RatingAndBio>
                            <BioDiv>
                                <span style={{
                                    padding: '10px 0px 10px 0px',
                                    whiteSpace: 'nowrap',
                                    textTransform: 'uppercase',
                                    color: '#404040'
                                }}>Biography</span>
                                <span style={{ color: '#404040' }}   >{vendor_about}</span>
                            </BioDiv>
                            <ReviewDiv>
                                <ReviewSection />
                            </ReviewDiv>
                        </RatingAndBio>
                    </BottomSection>
                </RightProfileSection>

            </Container>
        </MainContainer >
    )
}


// RIGHT DESIGN
const RightProfileSection = styled.div`
display:flex;
justify-content: center;
flex-direction:column;
flex:8;
`;

const TopImage = styled.img`
width: 100%;
height:100%;
max-height: 200px;
height: inherit;
object-fit: cover;
border-radius:25px;
`;

const TopSection = styled.div`
flex:2;
margin:10px`;

const BottomSection = styled.div`
flex:8;
display:flex;
flex-direction: row;
`;


const GallaryDiv = styled.div`
flex:6;
width :100%;`

const RatingAndBio = styled.div`
flex:4;
width :100%; 
padding:20px;`

const BioDiv = styled.div`
display:flex;
flex-direction:column;
padding:10px`;
const ReviewDiv = styled.div``;


// LEFT DESIGN
const ProfilePhoto = styled(Avatar)`flex:3;`;
const ProfileRating = styled(Rating)``;
const PhotoAndRatting = styled.div`
padding:20px;
`;

const ProfileName = styled.span`
font-size:30px;
white-space: nowrap;`;

const ProfileType = styled.span`
font-size:14px;
white-space: nowrap;
`;


const ProfileLocation = styled.span`
font-size:14px;
white-space: nowrap;`;

const ProfileDetails = styled.div`
display: flex;
flex-direction: column;
align-items: center;
flex:8;
width: 100%;
padding:20px;
`;

const ProfilePersonal = styled.div`
display: flex;
flex-direction: column;
padding: 5px;`;

const LeftProfileSection = styled.div`
display:flex;
justify-content: center;
flex-direction:column;
align-items:center;
flex:2;
height:calc(100vh - 4rem);
position:sticky;
top: 0;
padding: 2rem;
`;



const Container = styled.div`
display:flex;
flex-direction:row;
width: 95%;
padding:0;
margin:0;
`;


const MainContainer = styled.div`
width: 100%;
display:flex;
justify-content: center;
padding:0;
margin:0;
`;

const DataDiv = styled.div`
display: flex;
flex-direction: column;
`;


const Data = styled.span`
font-size:18px;
font-weight:bold;
`;

const DataName = styled.span`
font-size:8px;
`;
const ProfileInfo = styled.div`
width: 100%;
padding-top:20px;
display:flex;
flex-direction:row;
justify-content:space-evenly;   
`;

export default Profile

// onHover={(rate) => document.getElementById('label-quiet-onrate').innerHTML = rate || ''} 

