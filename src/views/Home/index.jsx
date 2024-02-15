import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
        
import { Header } from "../../components/Header"
import { Modal } from "../../components/Modal"


import { useRooms } from "../../hooks/useRooms"
import { auth } from "../../services/firebase"

import { ChatRoom } from "../ChatRoom"

import { TEXTS } from '../../constants'

import { 
    Content, 
    Container, 
    Wrapper, 
    TopContainer, 
    BottomContainer, 
    NewChat, 
    Icon, 
    Room,
    Form,
    WrapperRow
} from "./styles"


export const Home = () => {
    const { photoURL  } = auth.currentUser
    const {
        modal,
        openModal, 
        closeModal,
        handleOnSubmit,
        rooms,
        roomActive,
        name,
        description,
        setName, 
        setDescription,
        setRoomActive,
    } = useRooms()

    return (
        <Container>
            <Header />
        <Content>
            <Modal isOpen={modal} onClose={closeModal} acceptText={'Enviar'}>
                <Typography variant="h4" gutterBottom>
                    {TEXTS.CREATE_NEW_ROOM}
                </Typography>
                <Typography variant="h6" gutterBottom>
                {TEXTS.ROOM_INFORMATIONS}
                </Typography>
                <Form onSubmit={handleOnSubmit}> 
                    <TextField  
                        size="small" 
                        variant="standard" 
                        placeholder={TEXTS.ROOM_NAME} 
                        type='text' 
                        value={name} 
                        onChange={(event) => setName(event.target.value)}
                    />
                    <TextField  
                        size="small" 
                        variant="standard" 
                        placeholder={TEXTS.DESCRIPTION} 
                        type='text' 
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                    <WrapperRow>
                        <Button 
                            variant="contained" 
                            type="submit"
                            color="error"
                        >
                            {TEXTS.SEND}
                        </Button>
                    </WrapperRow>
                </Form>
            </Modal>
            <Wrapper>
                <TopContainer>
                    <NewChat>
                        <Icon src={photoURL} />
                        <Button 
                            variant="contained" 
                            onClick={openModal}
                            style={{ backgroundColor: '#e84a27'}}
                        >
                            {TEXTS.CREATE_NEW_ROOM}
                        </Button>
                    </NewChat>
                </TopContainer>
                <BottomContainer>
                    {rooms && rooms.map((room, index) => {
                        return (
                            <Room key={index} onClick={() => setRoomActive(room)}>
                                <Avatar 
                                    shape="circle" 
                                    size="xlarge" 
                                    style={{ backgroundColor: '#e84a27', color: '#ffffff' }}
                                >
                                    {room?.name[0]}
                                </Avatar>
                                <Wrapper>
                                    <h3>{room?.name}</h3>
                                    <p>{room?.description}</p>
                                </Wrapper>
                            </Room>
                            )
                        })
                    }
                </BottomContainer>
            </Wrapper>
            <Wrapper>
                <TopContainer>
                    <WrapperRow justify={'start'}>
                        <Avatar 
                            shape="circle" 
                            size="xlarge" 
                            style={{ backgroundColor: '#e84a27', color: '#ffffff' }}
                        >
                            {/* {roomActive?.name[0]} */}
                        </Avatar>
                        <div>
                            <Typography variant="h6" gutterBottom>
                                {roomActive?.name}
                            </Typography>
                            <h4>{roomActive?.description}</h4>

                        </div>
                    </WrapperRow>
                </TopContainer>
                <BottomContainer>
                    <ChatRoom room={roomActive?.id}/>
                </BottomContainer>
            </Wrapper>
            </Content>
        </Container>
    )
}
