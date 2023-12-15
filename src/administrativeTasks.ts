import prompts from 'prompts'
import Config from '@kagiweb-tech/api-core-a/utils/config';
import Encryption from '@kagiweb-tech/api-core-a/utils/encryption';

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

    public async execute() {
        const actionToExecute = await prompts({
            type: 'select',
            name: 'action',
            message: 'Select action to execute: ',
            choices: [
                {
                    title: 'DB - cleaner', value: 'dbCleaner', description: ''
                },
                {
                    title: 'DB - reset', value: 'dbReset', description: ''
                },
                {
                    title: 'DB - seed', value: 'dbSeed', description: ''
                },
                {
                    title: 'Generator - Secret key', value: 'generateSecret', description: ''
                },
                {
                    title: 'Generator - Hash password', value: 'generateHash', description: ''
                }
            ],
        })

        // execution
        if (actionToExecute.action === 'dbCleaner') {
            console.log('Execute dbCleaner')
        }
        if (actionToExecute.action === 'dbReset') {
            console.log('Execute dbReset')
        }
        if (actionToExecute.action === 'dbSeed') {
            console.log('Execute dbSeed')
        }
        if (actionToExecute.action === 'generateSecret') {
            await this.randomKey()
        }
        if (actionToExecute.action === 'generateHash') {
            await this.hashPassword()
        }
    }
}

export default AdministrativeTasks