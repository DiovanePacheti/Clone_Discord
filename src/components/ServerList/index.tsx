import React from 'react';

import { Container, Separator } from './styles';
import ServerButton from '../ServerButton';

const ServerList: React.FC = () => {
    return(
        <Container>
            <ServerButton isHome />
            <Separator />

            <ServerButton />
            <ServerButton hasNotifications />
            <ServerButton mentions={3} />
            <ServerButton />
            <ServerButton />
            <ServerButton hasNotifications />
            <ServerButton mentions={5}/>
        </Container>
    );
}

export default ServerList;