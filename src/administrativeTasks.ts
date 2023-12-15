import prompts from 'prompts'
import Config from '@kagiweb-tech/api-core-a/utils/config';

const env = Config.getEnv();

class AdministrativeTasks {
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
            console.log('Execute generateSecret')
        }
        if (actionToExecute.action === 'generateHash') {
            console.log('Execute generateHash')
        }
    }
}

export default AdministrativeTasks