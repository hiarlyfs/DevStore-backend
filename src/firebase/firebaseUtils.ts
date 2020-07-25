import { firebase } from './firebaseConfig'

export const createUser = (email: string, password: string) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function (res) {
      console.log(res.user)
    })
}

export const signIn = (email: string, password: string) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      console.log(res.user)
    })
}
