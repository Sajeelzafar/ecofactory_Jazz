import React, { useState } from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import { Button, Grid, Typography } from '@mui/material';
// import { withStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';


const HelpAndSupport = (props) => {
    const classes = {
        root: {
            flexGrow: 1,
            alignItems: 'center',
        },
        fullWidthBack: {},
        superRoot: {
            display: 'flex',
            flexDirection: 'column',
        },
        liElements: {
            padding: '2rem',
            transition: 'background-color 0.3s ease',
            cursor: 'pointer',
            borderBottom: '1px solid #DDDDDD',
            '&:last-child': {
                borderBottom: 'none',
            },
            '&:hover': {
                backgroundColor: '#FFE8A4',
            },
        },
        helpAndSupportMainCard: {
            padding: '2rem 5rem',
        },
        helpAndSupportCards: {
            padding: '5rem 1rem !important',
        },
    };
    // const { classes, theme } = props;
    const [searchTerm, setSearchTerm] = useState('');
    // const {
    //     custom: {
    //         landingPage:
    //         {
    //             exploreProducts: { content: exploreProductsImgs },
    //         },
    //         helpAndSupport: { content: listByHelpContent, searchIconsrc: searchIcon },
    //     },
    // } = theme;
    const handleSearch = () => {
        // const filteredList = listByHelpContent.filter((element) => element.title.toLowerCase().includes(searchTerm.toLowerCase())
        // || element.content.toLowerCase().includes(searchTerm.toLowerCase()));
        // return filteredList;
    };

    return (
        <div className={classes.superRoot}>
            <Grid
                container
                alignItems='center'
                justifyContent='center'
                style={{
                    height: '80vh',
                    background: 'url("./site/public/images/helpAndSupport/helpMainBackground.svg")',
                    flexDirection: 'column',
                }}
            >
                <Typography variant='h2' gutterBottom>
                    <strong>How can we help?</strong>
                </Typography>
                <br />
                <br />
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        borderRadius: '5rem',
                        width: '50%',
                        overflow: 'hidden',
                        position: 'relative',
                        border: '1px solid #CBCBCB',
                        height: '4rem',
                    }}
                >
                    <input
                        type='text'
                        placeholder='Search...'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{
                            flex: 1,
                            padding: '2.5rem',
                            border: 'none',
                            outline: 'none',
                            borderRadius: '5rem',
                        }}
                    />
                    <button
                        type='button'
                        style={{
                            background: 'none',
                            border: 'none',
                            padding: '2.5rem',
                            cursor: 'pointer',
                            position: 'absolute',
                            right: 0,
                        }}
                        onClick={handleSearch}
                    >
                        <img
                            // src={searchIcon}
                            alt='Search'
                            style={{ width: '20px', height: '20px' }}
                        />
                    </button>
                </div>
            </Grid>
            <Grid className={classes.helpAndSupportMainCard} container spacing={3}>
                {handleSearch()?.map((element) => (
                    <Grid className={classes.helpAndSupportCards} item key={v4()} sm={4}>
                        <img src={element.src} alt='Help' />
                        <br />
                        <br />
                        <Typography variant='h3' gutterBottom>
                            <strong>{element.title}</strong>
                        </Typography>
                        <br />
                        <Typography variant='body1' gutterBottom>
                            <div
                                style={{ color: '#6F6F6F' }}
                                dangerouslySetInnerHTML={{
                                    __html: element.content.replace(/\n/g, '<br />'),
                                }}
                            />
                        </Typography>
                        <br />
                        <br />
                        <br />
                        <Button
                            variant='contained'
                            style={{
                                width: '9rem',
                                borderRadius: '2rem',
                                background: '#FFC20C',
                                textAlign: 'center',
                            }}
                        >
                            View All
                        </Button>
                    </Grid>
                ))}
            </Grid>
            <div
                className={classes.root}
                style={{
                    marginBottom: '10rem',
                    background: '#F8F8F8',
                    marginLeft: '0',
                    padding: '5rem 0',
                }}
            >
                <Grid
                    container
                    alignItems='center'
                    justifyContent='center'
                    spacing={6}
                    style={{ width: '105vw' }}
                >
                    {/* {exploreProductsImgs && ( */}
                        <>
                            <Grid item xs={5}>
                                <img
                                    // src={exploreProductsImgs[4].src}
                                    alt='Main'
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </Grid>
                            <Grid
                                item
                                xs={5}
                                style={{
                                    paddingBottom: '2rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <Typography variant='h4' gutterBottom>
                                    <strong>Documentation and Tutorials Resources to keep you moving forward.</strong>
                                </Typography>
                                <Typography variant='body1' gutterBottom>
                                    Explore our guides and examples to integrate.
                                    <br />
                                    <br />
                                    <br />
                                    <strong>Products and Integration</strong>
                                    <br />
                                    Build a web or mobile integration to accept payments online or in person.
                                </Typography>
                                <br />
                                <br />
                                <br />
                                <Grid container spacing={3}>
                                    <Grid item xs={4}>
                                        <Button
                                            variant='contained'
                                            style={{
                                                borderRadius: '2rem',
                                                pointerEvents: 'none',
                                                backgroundColor: '#FFE8A4',
                                            }}
                                        >
                                            Online Payments
                                        </Button>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button
                                            variant='contained'
                                            style={{
                                                borderRadius: '2rem',
                                                pointerEvents: 'none',
                                                backgroundColor: '#FFE8A4',
                                            }}
                                        >
                                            QR Payments
                                        </Button>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Button
                                            variant='contained'
                                            style={{
                                                borderRadius: '2rem',
                                                pointerEvents: 'none',
                                                backgroundColor: '#FFE8A4',
                                            }}
                                        >
                                            Payrolls
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </>
                    {/* )} */}
                </Grid>
            </div>
            {/* <ParallaxScroll theme={theme} /> */}

            <div className={classes.root} style={{ marginBottom: '10rem', marginTop: '10rem' }}>
                <Grid
                    container
                    alignItems='center'
                    justifyContent='center'
                    spacing={6}
                >
                    <>
                        <Grid
                            item
                            xs={5}
                            style={{
                                paddingBottom: '2rem',
                                marginLeft: '-3rem',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <Typography variant='h4' gutterBottom>
                                <strong>Knowledge Base</strong>
                            </Typography>
                            <br />
                            <br />
                            <Typography variant='body1' gutterBottom>
                                Have a question in mind? Find the answer in our Knowledge base.
                            </Typography>
                            <br />
                            <br />
                            <Button variant='contained' style={{ width: '9rem', borderRadius: '2rem', background: '#FFC20C' }}>
                                Knowledge Base
                            </Button>
                        </Grid>
                        <Grid item xs={5}>
                            <ul style={{
                                listStyle: 'none',
                                padding: '0',
                                margin: '0',
                                backgroundColor: '#f0f0f0',
                                borderRadius: '1rem',
                            }}
                            >
                                <li className={classes.liElements}>
                                    <span style={{ padding: '0 3rem 0 0' }}>&#10095;</span>
                                    How I integrate my products?
                                </li>
                                <li className={classes.liElements}>
                                    <span style={{ padding: '0 3rem 0 0' }}>&#10095;</span>
                                    How to use sandbox?
                                </li>
                                <li className={classes.liElements}>
                                    <span style={{ padding: '0 3rem 0 0' }}>&#10095;</span>
                                    What are the security protocols?
                                </li>
                                <li className={classes.liElements}>
                                    <span style={{ padding: '0 3rem 0 0' }}>&#10095;</span>
                                    What are the financials services?
                                </li>
                            </ul>
                        </Grid>
                    </>
                </Grid>
            </div>
        </div>
    );
};

export default HelpAndSupport;
