import { Container } from './styles';
import { GRID_SECTION_ROW_SIZE } from '../../pages/Dashboard/styles';
import { useState } from 'react';
import { Profile } from '../Profile';

// import { useRef } from "react";

export const Card = ({ thumbUrl, title, link, user }) => {
    // const imageRef = useRef();
    const [imageSize, setImageSize] = useState(30);

    function getImageSize(event) {

        const { height } = event.target;

        const GRID_CONTENT_SPAN_SIZE = 4;
        const size = Math.round(
            (height / GRID_SECTION_ROW_SIZE) + GRID_CONTENT_SPAN_SIZE);

       setImageSize(size);
    }

    return(
        <Container size={imageSize}>
            <a href={link} target='_blank' rel='noreferrer'>
                <div>
                    <img 
                        // ref={imageRef}
                        onLoad={getImageSize} 
                        src={thumbUrl} 
                        alt={title} />

                    <p>{title}</p>
                </div>

                <div>
                    <Profile />
                    <span>{user.name} {user.surname}</span>
                </div>
            </a>
        </Container>
    )
}