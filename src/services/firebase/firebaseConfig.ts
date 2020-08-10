import firebaseLib from 'firebase'
import * as firebaseApp from 'firebase/app'
import 'firebase/auth'
import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: `${process.env.FIREBASE_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: `${process.env.FIREBASE_PROJECT_ID}.appspot.com`,
  messagingSenderId: '337323071845',
  appId: '1:337323071845:web:ad527f5e3aaa9b3397698c',
  measurementId: 'G-9JT8YTD1R3'
}

export const firebase = firebaseApp.initializeApp(config)
export const firebaseAuth = firebaseApp.auth()
export const firebaseDatabase = firebaseLib.database()
