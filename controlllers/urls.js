import { ObjectId } from 'mongodb';
import { client } from '../index.js';

//Database Name
const database = 'Url-Shortner'

export async function createUrl(data) {
    return await client
    .db(database)
    .collection("urls")
    .insertOne({...data,count:0});
}

export async function getLongUrl(data) {
    return  await client
    .db(database)
    .collection("urls")
    .findOne({shortUrl:data},{projection:{baseUrl:1,count:1}});
}