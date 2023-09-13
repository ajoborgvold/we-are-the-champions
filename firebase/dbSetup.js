import { initializeApp } from 'firebase/app'
import { getDatabase, ref } from 'firebase/database'

import React from 'react'

const firebaseConfig = {
    apiKey: "AIzaSyBcDaT6k3Uzq5zg56TIOrNXze_uHQKrabg",
    authDomain: "we-are-the-champions-d190d.firebaseapp.com",
    databaseURL: "https://we-are-the-champions-d190d-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "we-are-the-champions-d190d",
    storageBucket: "we-are-the-champions-d190d.appspot.com",
    messagingSenderId: "505284361011",
    appId: "1:505284361011:web:60d68b0665aaddae4b9c46"
  };

const app = initializeApp(firebaseConfig)
const db = getDatabase(app)
const endorsementsInDb = ref(db, "endorsements")

export { endorsementsInDb, db }