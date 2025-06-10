import {neon} from '@neondatabase/serverless';

import {drizzle} from 'drizzle-orm/neon-http';

import * as schema from './schema';

// url is supposed to be in .env file
const sql = neon(
    "postgresql://neondb_owner:npg_lpPG1wHnv3Yz@ep-cold-art-a8riqt52-pooler.eastus2.azure.neon.tech/CancerApp?sslmode=require"
);

export const db = drizzle(sql, {schema});
