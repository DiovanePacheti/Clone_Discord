import React from 'react';

import { Container, User, Avatar, Role,  } from './styles';

interface UserProps{
    nickname:string;
    isBot?:boolean;
}
const UserRow: React.FC<UserProps> = ({
    nickname,
    isBot
}) =>{
    return(
        <User>
            <Avatar className={isBot? 'bot':''} />
            <strong>{nickname}</strong>

            {isBot && <span>Bot</span>}
        </User>
    );
};

const UserList: React.FC =  () =>{
    return(
        <Container>
            <Role>Disponivel - 1</Role>
            <UserRow nickname="Diovane Pacheti" />

            <Role>Offline - 1</Role>
            <UserRow nickname="Luis Nunes" isBot />
            <UserRow nickname="Luis Nunes" />
            <UserRow nickname="Luis Nunes" />
            <UserRow nickname="Luis Nunes" />
            <UserRow nickname="Luis Nunes" />
            <UserRow nickname="Luis Nunes" />
            <UserRow nickname="Luis Nunes" isBot />
            <UserRow nickname="Luis Nunes" />
            <UserRow nickname="Luis Nunes" />
            <UserRow nickname="Luis Nunes" />
            <UserRow nickname="Luis Nunes" />
            <UserRow nickname="Luis Nunes" />
            <UserRow nickname="Luis Nunes" />
            <UserRow nickname="Luis Nunes" />
            <UserRow nickname="Luis Nunes" />
            <UserRow nickname="Luis Nunes" />
            <UserRow nickname="Luis Nunes" />


        </Container>
    )
};
export default UserList;