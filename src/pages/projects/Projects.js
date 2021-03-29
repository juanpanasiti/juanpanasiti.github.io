import React, { useEffect, useRef, useState } from 'react';

import SwipeableViews from 'react-swipeable-views';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useTheme } from '@material-ui/core';
import StorageIcon from '@material-ui/icons/Storage';
import WebIcon from '@material-ui/icons/Web';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import { useQuery } from 'graphql-hooks';

import TabPanel from './components/TabPanel';
import { getProjects } from '../../services/projectsService';
import ProjectSummary from '../../components/molecules/ProjectSummary';
import { getAllProjects } from '../../graphql/projectsQueries';
import { Loading } from '../../components/atoms/Loading';

const Projects = () => {
    //HOOKS
    const theme = useTheme();
    const [value, setValue] = useState(0);
    const [projects, setProjects] = useState({
        backend: [],
        frontend: [],
        mobile: [],
    });

    const { loading, error, data } = useQuery(getAllProjects);
    const isMounted = useRef(true);
    useEffect(() => {
        if (data && isMounted.current) {
            setProjects({
                ...projects,
                backend: data.allProjects.filter((project) => project.kind === 'backend'),
                frontend: data.allProjects.filter((project) => project.kind === 'frontend'),
                mobile: data.allProjects.filter((project) => project.kind === 'mobile'),
            });
        }
    }, [data]);

    useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    }, []);

    //FUNCTIONS
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
                    <Tab label='Front-end' icon={<WebIcon />} disabled={projects.frontend.length === 0} />
                    <Tab label='Back-end' icon={<StorageIcon />} disabled={projects.backend.length === 0} />
                    <Tab label='Mobile' icon={<PhoneAndroidIcon />} disabled={projects.mobile.length === 0} />
                </Tabs>
            </Paper>

            {loading && <Loading />}

            {!loading && (
                <SwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={value} onChangeIndex={handleChangeIndex}>
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        {projects.frontend.map((project) => (
                            <ProjectSummary title={project.title} data={project.summary} imgURL={project.frontImage.url} />
                        ))}
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        {projects.backend.map((project) => (
                            <ProjectSummary title={project.title} data={project.description} imgURL={project.cover} />
                        ))}
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                        {projects.mobile.map((project) => (
                            <ProjectSummary title={project.title} data={project.description} imgURL={project.cover} />
                        ))}
                    </TabPanel>
                </SwipeableViews>
            )}
        </div>
    );
};

export default Projects;
