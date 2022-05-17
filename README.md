# Youtube Clone

Fullstack youtube clone, written with typescript using Node JS (backend) and React (Next JS Frontend). Mongo DB database, and filesystem to store videos. Stream video in bits to keep speed persistent.

## Setup
```bash
cd server
```
```.env
Make .env file
```
```.env
DB_CONNECTION_STRING = (Mongo URI)
PORT = 4000
JWT_SECRET = change me
EXPIRES_IN = change me
```

## Usage Backend

```bash
cd server
npm install --save
npm run dev
```

## Usage Frontend

```bash
cd client
npm install --save
npm run dev
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
