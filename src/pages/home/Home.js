import React from 'react'
import { Box, makeStyles } from '@material-ui/core'
import Text from '../../components/atoms/Text'
import Button from '../../components/atoms/Button'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    mainBox: {
        backgroundColor: '#CCC',
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center'
    },
    titleBox: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
    }
}));
const Home = () => {
    const classes = useStyles()
    return (
        <div>
            <Box className={classes.mainBox}>
                <Box className={classes.titleBox} color='primary.main'>
                    <Text variant='h1'>Juan M. Panasiti</Text>
                    <Text variant='h5'>{'<Developer seniority=\'Jr.\' />'}</Text>
                </Box>
                <Box display='flex' justifyContent='center' mt={4}>
                    <Button label='Mis Proyectos' component={Link} linkTo='/projects' size='large' variant='outlined' color='secondary' />
                </Box>
            </Box>
        </div>
    )
}

export default Home
