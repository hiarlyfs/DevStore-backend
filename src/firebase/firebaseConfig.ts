import * as firebaseApp from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyDBEhOARiIe6UrdYBYQp3osFLWujprP9Gs',
  authDomain: 'devstore-a687b.firebaseapp.com',
  databaseURL: 'https://devstore-a687b.firebaseio.com',
  projectId: 'devstore-a687b',
  storageBucket: 'devstore-a687b.appspot.com',
  messagingSenderId: '337323071845',
  appId: '1:337323071845:web:ad527f5e3aaa9b3397698c',
  measurementId: 'G-9JT8YTD1R3'
}

export const firebase = firebaseApp.initializeApp(config)
export const firebaseAuth = firebaseApp.auth()
