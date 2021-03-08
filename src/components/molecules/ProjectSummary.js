import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Button from '../atoms/Button';

const ProjectSummary = (props) => {
    const { title, data, imgURL } = props;
    return (
        <MainContainer>
            <Title>{title}</Title>
            <DataContainer>
                {data}
            </DataContainer>
            <Actions>
                <Button label='Ver más' variant='outlined' />
            </Actions>
            <ImageContainer>
                <img src={imgURL} />
            </ImageContainer>
        </MainContainer>
    );
};

ProjectSummary.propTypes = {};

export default ProjectSummary;

//Styled Components
const MainContainer = styled.div`
    display: grid;
    margin: 0.5rem;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 0fr 1fr 0fr;
    column-gap: 1rem;
    grid-template-areas:
        'title      image'
        'info       image'
        'actions    image';
`;
const Title = styled.h2`
    grid-area: title;
    margin: 0;
`;
const DataContainer = styled.div`
    grid-area: info;
`;

const ImageContainer = styled.div`
    grid-area: image;
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 0.5rem;
    img {
        max-width: 100%;
        object-fit: contain;
        object-position: center center;
    }
`;
const Actions = styled.div`
    grid-area: actions;
    display: flex;
    justify-content: flex-end;
`;
