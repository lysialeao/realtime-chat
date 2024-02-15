import { useEffect, useState } from "react"

import { addDoc, collection, getDocs } from "firebase/firestore"

import { databaseApp } from "../services/firebase"

export const useRooms = () => {

    const [ modal, setModal] = useState(false)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [roomActive, setRoomActive] = useState('')
    const [ rooms, setRooms ] = useState()

    const roomRef = collection(databaseApp, "room")

    const getRooms = async () => {
        const data = await getDocs(roomRef)
        setRooms(data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
        })))
    }

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
        getRooms()
    }

    useEffect(() => {
        getRooms()
    }, [])

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