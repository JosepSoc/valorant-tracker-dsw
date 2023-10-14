import { MongoClient, Db } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const connectionStr = process.env.API_URI || 'mongodb.//127.0.0.1:27017/';

const cli = new MongoClient(connectionStr);
await cli.connect();

export let db: Db = cli.db('Valorant-Tracker');
