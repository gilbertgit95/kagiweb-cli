import dotenv from 'dotenv';
dotenv.config();

import Config from '@kagiweb-tech/api-core-a/utils/config';

// 1. administrative commands
//      ---- generators ----
//      a. generate secret key
//      b. hash a password
//      ---- DB ----
//      c. clean database
//      d. seed database
//      e. reset database

// 2. app creator
//      a. Server (using kagiweb-api-core-a)
//      b. Webapp (using kagiweb-ui-core-a)


// for administrative processes
// check app env
// if it does not have .env
// then break the process

export default async () => {
    console.log('cli started')
    const env = Config.getEnv()
    // console.log('config env: ', env)

    
};