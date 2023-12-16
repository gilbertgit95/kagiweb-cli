#!/usr/bin/env node
import dotenv from 'dotenv';
dotenv.config();

import prompts from 'prompts';
import AdministrativeTasks from './administrativeTasks';
import AppsCreator from './appsCreator';

const logo = `
oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
ooooooo/  /oo.*  .*ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
oooooo/  /o*  .ooooooooooooooooooooooooooooooooooooo/_________    _________/oooooooooo
ooooo/     .*oo/    |/       |/.  _/|o/   |o/  /  ____/  _   /.  | .____/     / |o|  o
oooo/    *oooo/  o  |  /oo|__|/  /  |/    |/  / /ooo/. /oo  /o   | |ooo   000|  |o|  o
ooo/  .o.  *o/  _   | /oo+---+  /|  |  |  |  /   __/  __  oooo|  |  __/.  ooo|       o
oo/  /ooo*.  *./o|  | |oo|  |  /o|  . /|  . / /ooo/__/ooo  /oo|  | |ooo.   oo|  |o|  o
o/__/oooooo*.__*o|__|.______|__/o|___/o|___/__________/___/ooo|__|______/..     /o|  o
oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
`;

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

(async () => {
    console.log(logo)

    const actionToExecute = await prompts({
        type: 'select',
        name: 'action',
        message: 'Select action to execute: ',
        choices: [
            {
                title: 'Administrative Tasks', value: 'adminTask',
                description: ''
            },
            {
                title: 'App Creator', value: 'appsCreator',
                description: ''
            }
        ],
    })

    // execution
    if (actionToExecute.action === 'adminTask') {
        const admin = new AdministrativeTasks()
        await admin.execute()
    }
    if (actionToExecute.action === 'appsCreator') {
        const admin = new AppsCreator()
        await admin.execute()
    }
})();