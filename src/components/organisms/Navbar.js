import React, { useState } from 'react';
import { AppBar, IconButton, makeStyles, Toolbar, withWidth, Hidden, Avatar } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import CodeIcon from '@material-ui/icons/Code';
import SendIcon from '@material-ui/icons/Send';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';

import Button from '../atoms/Button';
import Text from '../atoms/Text';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
    menuButton: {
        marginRight: theme.spacing(4),
    },
    title: {
        flexGrow: 1,
    },
    list: {
        width: 200,
    },
}));

const Navbar = (props) => {
    const [state, setState] = useState({
        showHiddenMenu: false,
    });
    const classes = useStyles();

    const showDrawer = () => {
        setState({ ...state, showHiddenMenu: true });
    };

    const hideDrawer = () => {
        setState({ ...state, showHiddenMenu: false });
    };

    const list = (
        <div className={classes.list} role='presentation' onClick={hideDrawer}>
            <List>
                <ListItem button component={Link} to='/'>
                    <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                    <ListItemText secondary='Home' />
                </ListItem>
                <ListItem button component={Link} to='/projects'>
                    <ListItemIcon>{<CodeIcon />}</ListItemIcon>
                    <ListItemText secondary='Proyectos' />
                </ListItem>
                <ListItem button component={Link} to='/blog' disabled>
                    <ListItemIcon>{<LibraryBooksIcon />}</ListItemIcon>
                    <ListItemText secondary='Blog' />
                </ListItem>
                <ListItem button component={Link} to='/contact'>
                    <ListItemIcon>{<SendIcon />}</ListItemIcon>
                    <ListItemText secondary='Contacto' />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button>
                    <ListItemIcon>{<CloseIcon />}</ListItemIcon>
                    <ListItemText secondary='Salir' />
                </ListItem>
            </List>
        </div>
    );
    return (
        <div className={''}>
            <AppBar>
                <Toolbar>
                    {/* Logo */}
                    <Avatar alt='logo JP.dev' src='logo370.png' style={{borderRadius:'0',marginRight:'10px'}} />
                    <Text variant='h4' className={classes.title}>
                        <strong>JP</strong>
                        <small>.dev</small>
                    </Text>

                    {/* Nav buttons */}
                    <Hidden smDown>
                        <Button
                            className={classes.menuButton}
                            label='Home'
                            variant='text'
                            color='secondary'
                            startIcon={<HomeIcon />}
                            component={Link}
                            linkTo='/'
                        />
                        <Button
                            className={classes.menuButton}
                            label='Proyectos'
                            variant='text'
                            color='secondary'
                            startIcon={<CodeIcon />}
                            component={Link}
                            linkTo='/projects'
                        />
                        <Button
                            className={classes.menuButton}
                            label='Blog'
                            variant='text'
                            color='secondary'
                            startIcon={<LibraryBooksIcon />}
                            disabled={true}
                            component={Link}
                            linkTo='/blog'
                        />

                        <Button
                            className={classes.menuButton}
                            label='Contacto'
                            variant='text'
                            color='secondary'
                            startIcon={<SendIcon />}
                            component={Link}
                            linkTo='/contact'
                        />
                    </Hidden>
                    <Hidden mdUp>
                        <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu' onClick={showDrawer}>
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                </Toolbar>
            </AppBar>
            <div className={classes.offset}>{/* empty space, do not delete or use!! */}</div>
            <Drawer anchor='right' open={state.showHiddenMenu} onClose={hideDrawer}>
                {list}
            </Drawer>
        </div>
    );
};

export default withWidth()(Navbar);
