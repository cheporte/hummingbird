import {
    doc, setDoc, getDoc, updateDoc,
    collection, addDoc, getDocs,
    serverTimestamp, query, orderBy
} from "firebase/firestore";

import { auth, db } from "./firebase";

// [============================ (ᵔᴥᵔ) Profile Actions ============================] //
export const createUserProfile = async (
    userId: string, name="", username="", bio="", avatarUrl=""
) => {
    const userRef = doc(db, "users", userId);
    await setDoc(userRef, {
        name,
        username,
        bio,
        avatarUrl,
    });
}

export const getUserProfile = async (userId: string) => {
    const userRef = doc(db, "users", userId);
    const snap = await getDoc(userRef);
    return snap.exists() ? snap.data() : null;
}

export const updateUserProfile = async (userId: string, updates: Partial<{ name: string; username: string; bio: string; avatarUrl: string }>) => {
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, updates);
};

// [============================ (ᵔᴥᵔ) Post Actions ============================] //

export const createPost = async ({text}: {text: string}) => {
    const user = auth.currentUser;
    if (!user) throw new Error("Not logged in!");

    const userDocRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(userDocRef);

    let username = "anon_chirrp";

    if (userDoc.exists()) {
        username = userDoc.data().username || "anon_chirrp";
    }

    const postRef = collection(db, "posts");

    await addDoc(postRef, {
        text,
        timestamp: serverTimestamp(),
        userId: user.uid,
        username: username
    });
};

export const getPosts = async () => {
    const postsRef = collection(db, "posts");
    const q = query(postsRef, orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map(doc => {
        const data = doc.data();
        return {
            id: doc.id,
            user: data.username || "anon_chirrp",
            text: data.text || "",
            avatarUrl: data.avatarUrl || "https://placekitten.com/100/100",
        };
    });
};




