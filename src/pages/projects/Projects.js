import React, { useEffect, useRef, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useTheme } from '@material-ui/core';
import StorageIcon from '@material-ui/icons/Storage';
import WebIcon from '@material-ui/icons/Web';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import TabPanel from './components/TabPanel';
import { getProjects } from '../../services/projectsService';
import ProjectSummary from '../../components/molecules/ProjectSummary';

const Projects = () => {
    const theme = useTheme();
    const [value, setValue] = useState(0);
    const [state, setState] = useState({ isLoaded: false, backProjects: [], frontProjects: [], mobileProjects: [] });
    const { backProjects, frontProjects, mobileProjects } = state;

    const isMounted = useRef(true);

    useEffect(() => {
        const fillProjects = async () => {
            const projects = await getProjects();
            const backProjects = [];
            const frontProjects = [];
            const mobileProjects = [];

            for (const project of projects) {
                switch (project.type) {
                    case 'back-end':
                        backProjects.push(project);
                        break;
                    case 'front-end':
                        frontProjects.push(project);
                        break;
                    case 'mobile':
                        mobileProjects.push(project);
                        break;

                    default:
                        break;
                }
            }

            if (isMounted.current) {
                setState({
                    ...state,
                    isLoaded: true,
                    backProjects: backProjects,
                    frontProjects: frontProjects,
                    mobileProjects: mobileProjects,
                });
            }
        };
        fillProjects();

        return () => {
            isMounted.current = false;
        };
    }, []);

    console.log(state);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };
    return (
        <div style={{ minHeight: '90vh' }}>
            <Paper square>
                <Tabs
                    centered
                    value={value}
                    indicatorColor='secondary'
                    textColor='primary'
                    variant='fullWidth'
                    onChange={handleChange}
                    aria-label='projects types'>
                    <Tab label='Front-end' icon={<WebIcon />} disabled={frontProjects.length === 0} />
                    <Tab label='Back-end' icon={<StorageIcon />} disabled={backProjects.length === 0} />
                    <Tab label='Mobile' icon={<PhoneAndroidIcon />} disabled={mobileProjects.length === 0} />
                </Tabs>
            </Paper>

            <SwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={value} onChangeIndex={handleChangeIndex}>
                <TabPanel value={value} index={0} dir={theme.direction}>
                    {frontProjects.map((project) => (
                        <ProjectSummary title={project.title} data={project.description} imgURL={project.cover} />
                    ))}
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    {backProjects.map((project) => (
                        <ProjectSummary title={project.title} data={project.description} imgURL={project.cover} />
                    ))}
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    {mobileProjects.map((project) => (
                        <ProjectSummary title={project.title} data={project.description} imgURL={project.cover} />
                    ))}
                </TabPanel>
            </SwipeableViews>
        </div>
    );
};

export default Projects;
