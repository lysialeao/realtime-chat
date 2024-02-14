import { useState } from "react"

import { addDoc, collection,  query,  limit } from "firebase/firestore"
import { useCollectionData } from "react-firebase-hooks/firestore"

import { databaseApp } from "../services/firebase"

export const useRooms = () => {

    const [ modal, setModal] = useState(false)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [roomActive, setRoomActive] = useState('')

    const roomRef = collection(databaseApp, "room")
    const queryRooms = query(roomRef, limit(25));
    const rooms = useCollectionData(queryRooms,  { idField: "id"})


    const openModal = () => {
        setModal(true);
      };
    
    const closeModal = () => {
        setModal(false);
    };

    const handleOnSubmit = async (event) => {
        event.preventDefault();
        await addDoc(roomRef, {
            name,
            description
        })
        setName('')
        setDescription('')
        setModal(false)
    }

    const values = {
        name,
        description,
        roomActive,
        modal,
        openModal,
        closeModal,
        handleOnSubmit,
        rooms,
        setName,
        setDescription,
        setRoomActive
    }

    return values
}