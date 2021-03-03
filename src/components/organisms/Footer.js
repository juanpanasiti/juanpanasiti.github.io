import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

import { Box, IconButton, makeStyles } from '@material-ui/core';
import Text from '../atoms/Text';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        display: 'flex',

        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100wv',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            // backgroundColor: theme.palette.secondary.main,
        },
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            // backgroundColor: theme.palette.primary.main,
        },
    },
    socials: {
        display: 'flex',
    },
    data: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <Box className={classes.socials}>
                <IconButton edge='start'>
                    <LinkedInIcon color='secondary' fontSize='large' />
                </IconButton>
                <IconButton>
                    <FacebookIcon color='secondary' fontSize='large' />
                </IconButton>
                <IconButton>
                    <TwitterIcon color='secondary' fontSize='large' />
                </IconButton>
                <IconButton>
                    <InstagramIcon color='secondary' fontSize='large' />
                </IconButton>
                <IconButton>
                    <GitHubIcon color='secondary' fontSize='large' />
                </IconButton>
            </Box>

            <Box className={classes.data}>
                <Text children='Desarrollado por mi' variant='subtitle1' />
                <Text children='Mendoza - Argentina 2021' variant='subtitle2' />
            </Box>
        </div>
    );
};

export default Footer;
