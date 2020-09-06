## Description

This is the backend of the [DevStore Frontend](https://github.com/hiarlyfs/DevStore-backend)

## Tecnologies used

.[NodeJs](https://nodejs.org/docs/latest-v10.x/api/)
.[Express](https://expressjs.com/pt-br/4x/api.html)
.[Multer](https://github.com/expressjs/multer#readme)
.[Pagar.me](https://docs.pagar.me/reference#principios-basicos)
.[Google Firebase](https://firebase.google.com/docs)
.[Google Cloud Storage](https://cloud.google.com/storage)

## Motivation

Desire for test a payment's api (I used the [Pagar.me](https://docs.pagar.me/reference#principios-basicos)), Multer and Google Cloud

## How to run

. Install the dependecies:

```bash
$ yarn install
```

.Create an [firebase project](https://firebase.google.com/)
. See the file 'firebaseCnfig.ts' and put your credentials in there

.Access the console of [Google Cloud Storage](https://cloud.google.com/storage)
. See the file 'key.json' and replace the file with your credentials

. Get an api key from [Pagar.me](https://docs.pagar.me/reference#principios-basicos)

. After this, create the .env file in the root directory
. In the .env file put the:

- FIREBASE_API_KEY='Your firebase api key'
- FIREBASE_PROJECT_ID='Your firebase project id'
- PAGARME_API_KEy='Yout Pagar api key'
- BASE_URL='The url where the server is running'
- GOOGLE_CLOUD_PROJECT_ID='Your google cloud project_id'
- GOOGLE_CLOUD_PRIVATE_KEY_ID='Your google cloud private_key_id'
- GOOGLE_CLOUD_CLIENT_ID='Your google cloud cliend_id'

. Obs: Every value of the key above is without the quotation marks. Ex: BASE_URL=http://localhost:3030
