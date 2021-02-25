import React from 'react'
import PropTypes from 'prop-types'
import { AppBar, IconButton, makeStyles, Toolbar } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';
import CodeIcon from '@material-ui/icons/Code';
import SendIcon from '@material-ui/icons/Send';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '../atoms/Button'
import Text from '../atoms/Text';

const useStyles = makeStyles((theme) => ({
    
    offset: theme.mixins.toolbar,
    menuButton: {
        marginRight: theme.spacing(4),
      },
      title: {
        flexGrow: 1,
      },
}))

const Navbar = props => {
    const classes = useStyles()

    return (
        <div className={''}>
            <AppBar>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>

                    <Text className={classes.title}>JMP</Text>
                    <Button className={classes.menuButton} label='Home' variant='text' color='secondary' startIcon={<HomeIcon/>}/>
                    <Button className={classes.menuButton} label='Proyectos' variant='text' color='secondary' startIcon={<CodeIcon/>}/>
                    <Button className={classes.menuButton} label='Contacto' variant='text' color='secondary' startIcon={<SendIcon/>}/>
                </Toolbar>
            </AppBar>
            <div className={classes.offset}></div>
        </div>
    )
}


export default Navbar
