import { defineConfig } from "drizzle-kit";



export default defineConfig({
    dialect: 'postgresql',
    schema: './src/utils/schema.jsx',
    out: './drizzle',


    // this is supposed to be in my .env file
    dbCredentials: {
        url: 'postgresql://neondb_owner:npg_lpPG1wHnv3Yz@ep-cold-art-a8riqt52-pooler.eastus2.azure.neon.tech/CancerApp?sslmode=require',
        connectionString: 'postgresql://neondb_owner:npg_lpPG1wHnv3Yz@ep-cold-art-a8riqt52-pooler.eastus2.azure.neon.tech/CancerApp?sslmode=require'
    }
});