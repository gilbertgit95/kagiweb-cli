import prompts from 'prompts'
import Config from '@kagiweb-tech/api-core-a/utils/config';
import mongoose from '@kagiweb-tech/api-core-a/mongoose';
import Encryption from '@kagiweb-tech/api-core-a/utils/encryption';

import FeatureModel from '@kagiweb-tech/api-core-a/models/featureModel';
import RoleModel from '@kagiweb-tech/api-core-a/models/roleModel';
import UserModel from '@kagiweb-tech/api-core-a/models/userModel';
import WorkspaceModel from '@kagiweb-tech/api-core-a/models/workspaceModel';

import features from './seeds/featuresSeed';
import roles from './seeds/rolesSeed';
import users from './seeds/usersSeed';
import workspaces from './seeds/workspaceSeed';

const env = Config.getEnv();

class AdministrativeTasks {
    public async randomKey():Promise<void> {
        const key = Encryption.generateRandKey()
        console.log(` -> Random key is: ${ key }`)
    }

    public async hashPassword():Promise<void> {
        const input = await prompts({
            type: 'text',
            name: 'value',
            message: 'Enter you password'
        })
        // then hash the text
        const hash = await Encryption.hashText(input.value)

        console.log(` -> Hashed text is : ${ hash }`)
    }

    public async resetDB():Promise<void> {
        await this.cleanDB()
        await this.seedDB()
    }

    public async cleanDB():Promise<void> {
        // clean feature
        console.log(' - cleaning feature')
        await FeatureModel.deleteMany({})

        // clean role
        console.log(' - cleaning role')
        await RoleModel.deleteMany({})

        // clean user
        console.log(' - cleaning user')
        await UserModel.deleteMany({})

        // clean workspace
        console.log(' - cleaning workspace')
        await WorkspaceModel.deleteMany({})

        console.log(' - Done')
    }

    public async seedDB():Promise<void> {
        // seed features
        console.log(' + seeding feature')
        await FeatureModel.bulkWrite(features.map(item => {
            return {
                updateOne: {
                    filter: { _id: item._id },
                    update: item,
                    upsert: true
                }
            }
        }))

        // seed roles
        console.log(' + seeding role')
        await RoleModel.bulkWrite(roles.map(item => {
            return {
                updateOne: {
                    filter: { _id: item._id },
                    update: item,
                    upsert: true
                }
            }
        }))

        // seed users
        console.log(' + seeding user')
        await UserModel.bulkWrite(users.map(item => {
            return {
                updateOne: {
                    filter: { _id: item._id },
                    update: item,
                    upsert: true
                }
            }
        }))

        // seed workspaces
        console.log(' + seeding workspace')
        await WorkspaceModel.bulkWrite(workspaces.map(item => {
            return {
                updateOne: {
                    filter: { _id: item._id },
                    update: item,
                    upsert: true
                }
            }
        }))

        console.log(' + Done')
    }

    public async execute() {
        // also env configuration if it existed
        // if it does not, then break the process with prompt message
        const fieldsToCheck = [
            'APP_ENV',
            'APP_PORT',
            'APP_ADMIN_CONFIRM_KEY',
            'PROD_MONGO_URI',
            'PROD_MONGO_DB_NAME',
            'STAGING_MONGO_URI',
            'STAGING_MONGO_DB_NAME',
            'DEV_MONGO_URI',
            'DEV_MONGO_DB_NAME',
            'JWT_EXPIRATION',
            'JWT_SECRET_KEY'
        ]

        if (!fieldsToCheck.every(field => process.env[field])) {
            console.log('+--------------------------------------------------------------+')
            console.log('|  Administrative tasks requires the right .env configuration! |')
            console.log('|  Please execute the cli again on the right directory.        |')
            console.log('+--------------------------------------------------------------+')
            return
        }

        // add prompt for the requirements
        // add basic authentication
        const confirm = await prompts({
            type: 'text',
            name: 'key',
            message: 'Please enter the admin confirmation key to proceed:',
        })
        if (confirm.key !== env.AppAdminConfirmKey) {
            console.log('+--------------------------------------------------------------+')
            console.log('|               Please execute the cli again and               |')
            console.log('|              enter the correct confirmation key.             |')
            console.log('+--------------------------------------------------------------+')
            return
        }

        // if input is good, then proceed
        const actionToExecute = await prompts({
            type: 'select',
            name: 'action',
            message: 'Select action to execute: ',
            choices: [
                { title: 'DB - cleaner', value: 'dbCleaner', description: '' },
                { title: 'DB - reset', value: 'dbReset', description: '' },
                { title: 'DB - seed', value: 'dbSeed', description: '' },
                { title: 'Generator - Secret key', value: 'generateSecret', description: '' },
                { title: 'Generator - Hash password', value: 'generateHash', description: '' }
            ],
        })

        // initiate db connection
        await mongoose.connect(env.MongoURI? env.MongoURI: '', {
            dbName: env.DBName
        })

        // execution
        if (actionToExecute.action === 'dbCleaner') await this.cleanDB()
        if (actionToExecute.action === 'dbReset') await this.resetDB()
        if (actionToExecute.action === 'dbSeed') await this.seedDB()
        if (actionToExecute.action === 'generateSecret') await this.randomKey()
        if (actionToExecute.action === 'generateHash') await this.hashPassword()

        // end connection to mongodb
        await mongoose.disconnect()
    }
}

export default AdministrativeTasks