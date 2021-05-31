import React from 'react'
import { Helmet } from 'react-helmet'

const Loading = () => {
    return (
        <div style={loadingStyle}>
            <Helmet>
                <title>{'Loading'}</title>
            </Helmet>
            <span>Loading...</span>
        </div>
    )
}

const loadingStyle = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignCtems: 'center',
    margin: '0px',
    padding: '0px',
    overflow: 'hidden',
    alignItems:'center'
}

export default Loading
