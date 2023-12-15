import prompts from 'prompts'
import Config from '@kagiweb-tech/api-core-a/utils/config';

const env = Config.getEnv();

class AppsCreator {
    public async execute() {
        const actionToExecute = await prompts({
            type: 'select',
            name: 'action',
            message: 'Select action to execute: ',
            choices: [
                {
                    title: 'Create - API Core A', value: 'apiCoreA', description: ''
                },
                {
                    title: 'Create - UI Core A', value: 'uiCoreA', description: ''
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