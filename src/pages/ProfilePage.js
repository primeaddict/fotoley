/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Accordion, AccordionDetails, AccordionSummary, Avatar, IconButton, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Rating } from '@material-ui/lab';
import React, { useContext, useEffect, useState } from 'react'
import Gallery from 'react-photo-gallery';
import styled from 'styled-components';
import RatingSection from '../component/RatingSection';

import AppContext from '../service/app/AppContext';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

import Loading from '../pages/Loading'
import { Helmet } from 'react-helmet';
import BGImage from '../assets/images/bg.jpg'

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`
};

const Profile = (props) => {
    const { artist_type_url, city_url, vendor_page_url } = props.match.params;

    const { userData, getUser, loading } = useContext(AppContext);

    const [userImagesLocal, setUserImagesLocal] = useState([]);
    const [userDataLocal, setUserDataLocal] = useState(userData);
    const { vendor_name, vendor_avatar, vendor_timeline_pic, artist_type, city_name, country_code, vendor_reviews, vendor_about, post_count, vendor_media } = userDataLocal;

    useEffect(() => {
        getUser({ artist_type_url, city_url, vendor_page_url }, (result) => {
            if (!result) props.history.push('/');
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
            {loading === true ?
                <Loading />
                :
                <Container>
                    <Helmet>
                        <title>{`${vendor_name} | ${artist_type} | ${country_code}`}</title>
                    </Helmet>
                    <CrossButton onClick={() => { props.history.push('/') }}>
                        <IconButton style={{ boxShadow: '2px 3px 5px whitesmoke', padding: '0px', margin: '5px' }}>
                            <KeyboardBackspaceIcon />
                        </IconButton>
                    </CrossButton>
                    <NameForTab>
                        <ProfileName>{vendor_name}</ProfileName>
                    </NameForTab>
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
                            <TopImage
                                src={vendor_timeline_pic}
                                alt='loading...'
                                onError={(e) => e.target.src = BGImage}
                            />
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
            }

        </MainContainer >
    )
}

const CrossButton = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    margin: 8px;
    height: 5vh;
    width: 5vh;
    cursor: pointer;
    z-index:1;
`;

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
margin:10px;`;

const BottomSection = styled.div`
flex:8;
display:flex;
flex-direction: row;

@media ${device.tablet} { 
flex-direction: column-reverse;
}

`;


const GallaryDiv = styled.div`
flex:6;
width :100%;
order:1;
`

const RatingAndBio = styled.div`
flex:4;
width :100%; 
padding:20px;
order:2;

@media ${device.tablet} { 
padding: 0px;
}
`

const BioDiv = styled.div`
display:flex;
flex-direction:column;
padding:10px;`;

const ReviewDiv = styled.div``;


// LEFT DESIGN

const NameForTab = styled.div`
width: 100%;
position: fixed;
background-color: whitesmoke;
text-align: center;
display: none;
justify-content: center;
align-items: center;
height: 50px;
z-index: 0;
box-shadow: 1px 1px 2px whitesmoke;    

@media ${device.tablet} { 
display:fixed;
}
`;

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
@media ${device.tablet} { 
padding: 5px;
display:none;
}
`;



const Container = styled.div`
display:flex;
flex-direction:row;
width: 95%;
padding:0;
margin:0;

@media ${device.tablet} { 
    width: 100%;
}
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


