import { useRef, useState, useEffect } from "react"
import { addDoc, collection, orderBy, query, serverTimestamp, limit, where } from "firebase/firestore"
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { auth, databaseApp } from "../services/firebase"

export const useMessages = ({ room }) => {
    const [msg, setMsg] = useState('')
    const dummy = useRef()
    const messageRef = collection(databaseApp, "messages")
    const queryMessages = room  && query(messageRef, where('room', '==', room));
    const messages = useCollectionData(queryMessages, { idField: "id"})

    const sendMessage = async (event) => {
        event.preventDefault()
        const { photoURL, uid } = auth.currentUser;
        await addDoc(messageRef, {
            text: msg,
            uid,
            photoURL,
            createdAt: serverTimestamp(),
            room: room
        })
        setMsg('')
        dummy.current.scrollIntoView({
            behavior: "smooth"
        })
    }

    useEffect(() => {
        if (dummy.current) {
            dummy.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [messages])

    const values = {
        msg,
        setMsg,
        messages,
        sendMessage,
        dummy

    }
    return values
}