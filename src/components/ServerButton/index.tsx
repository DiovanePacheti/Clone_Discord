import React from 'react';
import Logo from '../../assets/img/logo.png'
import { Button } from './styles';

export interface Props {
    selected?:boolean;
    isHome?:boolean;
    hasNotifications?:boolean;
    mentions?:number;
}

const ServerButton: React.FC<Props> = ({
    selected,
    isHome,
    hasNotifications,
    mentions
}) =>{
    return(
        <Button
            isHome={isHome}
            hasNotifications={hasNotifications}
            mentions={mentions}
            className={selected? 'active' : ''}
        >
            {isHome && <img src={Logo} alt="L2Code" />}
        </Button>
    )
}

export default ServerButton;