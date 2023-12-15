import prompts from 'prompts'
import Config from '@kagiweb-tech/api-core-a/utils/config';
import Encryption from '@kagiweb-tech/api-core-a/utils/encryption';

const env = Config.getEnv();

class AppsCreator {

    public async execute() {
        const actionToExecute = await prompts({
            type: 'select',
            name: 'action',
            message: 'Select action to execute: ',
            choices: [
                {
                    title: 'Create - API Core A', value: 'apiCoreA',
                    description: 'Server side application using @kagiweb-tech/api-core-a (Typescript, Express, Mongoose).'
                },
                {
                    title: 'Create - UI Core A', value: 'uiCoreA',
                    description: 'Client side application using @kagiweb-tech/ui-core-a (Typescript, React and Redux).'
                }
            ]
        })

        // execution
        if (actionToExecute.action === 'apiCoreA') {
            console.log('Execute apiCoreA')
        }
        if (actionToExecute.action === 'uiCoreA') {
            console.log('Execute uiCoreA')
        }
    }
}

export default AppsCreator