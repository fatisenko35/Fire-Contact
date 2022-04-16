import firebase from "./firebase";
import {useState, useEffect} from "react"
import { getDatabase, ref, set, push, onValue, remove, update } from "firebase/database";



// Bilgi Ekleme
export const AddUser = (info) => {
    const db = getDatabase();
    const userRef = ref(db, "database");
    const newUserRef = push(userRef)
    set((newUserRef),{
        username: info.username,
        phoneNumber: info.phoneNumber,
        gender: info.gender,
    })
}

//Bilgi Alma
export const useFetch=()=>{
    const [isLoading,setIsLoading]=useState();
    const [contactList,setContactList]=useState();

    useEffect(() => {
        setIsLoading(true)

        const db = getDatabase();
        const userRef=ref(db,"database");

        onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            const baglantiArray=[];

            for(let id in data){
                baglantiArray.push({id,...data[id]})
            }          
            setContactList(baglantiArray);
            setIsLoading(false);
        });
    },[])
    return {isLoading,contactList}
}

export const DeleteUser =(id) => {
    const db = getDatabase();
    const userRef = ref(db, "database");
    remove(ref(db, "database/"+id))
}

export const EditUser = (info) => {
    const db = getDatabase();
    const updates = {};
    updates["database/"+info.id]=info;
    return update(ref(db),updates);

}
