import React from 'react';
import { Box, Divider, makeStyles } from '@material-ui/core';
import Text from '../../components/atoms/Text';
import Button from '../../components/atoms/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    mainBox: {
        height: `calc(100vh - 64px)`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    titleBox: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
    },
    bloqueInfo: {
        display:'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            // backgroundColor: theme.palette.secondary.main,
        },
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            // backgroundColor: theme.palette.primary.main,
        },
    },
    text: {
        margin: '20px 0',
        alignSelf:'center',
        [theme.breakpoints.only('xs')]: {
            width:'100%',
            order: 1,
            margin: '0px 0',
        },
        [theme.breakpoints.only('sm')]: {
            width:'100%',
            order: 1,
            margin: '0px 0',
        },
        [theme.breakpoints.only('md')]: {
            width:'70%',
        },
        [theme.breakpoints.only('lg')]: {
            width:'80%',
        },
        [theme.breakpoints.only('xl')]: {
            width:'85%',
        },
        
    },
    image: {
        margin:'20px 10px',
        alignSelf:'center',
        
        [theme.breakpoints.only('xs')]: {
            width:'100%',
            margin:'10px 5px',
        },
        [theme.breakpoints.only('sm')]: {
            width:'100%',
            margin:'10px 5px',
        },
        [theme.breakpoints.only('md')]: {
            width:'30%',
        },
        [theme.breakpoints.only('lg')]: {
            width:'20%',
        },
        [theme.breakpoints.only('xl')]: {
            width:'15%',
        },
        
    }
}));
const Home = () => {
    const classes = useStyles();
    return (
        <div>
            <Box className={classes.mainBox}>
                <Box className={classes.titleBox} color='primary.main'>
                    <Text variant='h1'>Juan M. Panasiti</Text>
                    <Text variant='h5'>{"<Developer seniority='Jr.' />"}</Text>
                </Box>
                <Box display='flex' justifyContent='center' mt={4}>
                    <Button label='Mis Proyectos' component={Link} linkTo='/projects' size='large' variant='outlined' color='secondary' />
                </Box>
            </Box>

            <Divider />

            <Box className={classes.bloqueInfo}>
                <Box className={classes.text}>
                    <Text variant='h3'>Mi Formación</Text>
                    <Text>
                        Desde chico que estoy enganchado a las computadoras, aunque nunca me enganché al lado gamer de este mundo, siempre tuve claro que mi futuro estaba acá. Por eso, al terminar la secundaria me metí a estudiar Ingeniería en Sistemas en la UTN-FRM, y despues de 5 años... seguía cursando... y así un par mas de años hasta que me di cuenta (más vale tarde que nunca) que mi lugar estaba más cerca del código.
                    </Text>
                    <Text>
                        Con esta revelación personal, y el apoyo de mi novia y mi familia, me largué a cambiar un poco el rumbo: cambié de carrera.. pero no de facultad, me metí en la Tecnicatura en Programación, con el objetivo de hacerla en los 2 años que duraba la carrera (spoiler alert! objetivo cumplido) y vivir de lo que me apasiona.
                    </Text>
                </Box>
                <Box className={classes.image}>
                    <img src='formacion.png' alt='formacion en programación' width='100%' />
                </Box>
            </Box>

            <Divider />

            <Box className={classes.bloqueInfo}>
                <Box className={classes.image}>
                    <img src='out-of-office.jpg' alt='formacion en programación' width='100%' />
                </Box>
                <Box className={classes.text}>
                    <Text variant='h3'>Algo más de info</Text>
                    <Text>
                        Muchos piensan que los informáticos nunca nos desenchufamos, y no es así, actualmente casi todos somos "informáticos wireless", pero aparte de programar en el trabajo (y en mi tiempo libre, porque me gusta y no me canso de aprender cosas nuevas), también tengo mis hobbies y actividades no-informáticas, como ir al cine o ver peliculas en casa (esto último sobre todo por las razones de público conocimiento), arreglar cosas (dentro de lo posible, me gusta arreglar lo que pueda arreglar, internet es una fuente inagotable de conocimiento donde para cada cosa que quieras hacer, alguien subió un video mostrando como hacerlo), aprender idiomas (al menos lo intento, vamos por el inglés y después si puedo, el italiano)
                    </Text>
                </Box>
            </Box>
        </div>
    );
};

export default Home;
