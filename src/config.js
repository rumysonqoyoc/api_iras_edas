import {config} from 'dotenv';
config();

export const PORT=process.env.PORT || 3000
export const DB_USER=process.env.DB_USER || 'abel'
export const DB_PASSWORD=process.env.DB_PASSWORD || 'axl'
export const DB_HOST=process.env.DB_HOST || 'localhost'
export const DB_DATABASE=process.env.DB_DATABASE || 'epi'
export const DB_PORT=process.env.DB_PORT || 3306
