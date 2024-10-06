import fs from 'fs-extra'
import path from 'node:path'
import prompts from 'prompts'

class AppsCreator {

    public async execute() {
        const actionToExecute = await prompts({
            type: 'select',
            name: 'action',
            message: 'Select action to execute: ',
            choices: [
                {
                    title: 'Create - API Core A (Ts)', value: 'apiCoreATs',
                    description: 'Server side application using @kagiweb-tech/api-core-a for typescript setup.'
                },
                {
                    title: 'Create - UI Core A (Ts)', value: 'uiCoreATs',
                    description: 'Client side application using @kagiweb-tech/ui-core-a for typescript setup.'
                },
                {
                    title: 'Create - Fullstack App Core A (Ts)', value: 'fullstackCoreATs',
                    description: 'Fullstack application both API core A (Ts) and UI core A (Ts).'
                }
            ]
        })

        const project = await prompts({
            type: 'text',
            name: 'name',
            message: 'Enter project name:',
            validate: (value) => {
                if (/^[\w-_]{6,20}$/.test(value)) {
                    return true
                } else {
                    return 'Value should only contain apha-numeric, minus, underscore, minimum length 6 and maximum length 20.'
                }
            }
        })

        // execution
        if (actionToExecute.action === 'apiCoreATs') {
            try {
                const sourceFolder = path.resolve(__dirname, '../templates/api-core-a-ts')
                const distFolder = path.resolve('./' + project.name)

                console.log(' - create folder ' + project.name + ' and extract api codebase...')
                await fs.copy(sourceFolder, distFolder)
                console.log(' - done')
            } catch (error) {
                console.log(' - Error while extracting the codebase!')
            }
        }

        if (actionToExecute.action === 'uiCoreATs') {
            try {
                const sourceFolder = path.resolve(__dirname, '../templates/ui-core-a-ts')
                const distFolder = path.resolve('./' + project.name)

                console.log(' - create folder ' + project.name + ' and extract ui codebase...')
                await fs.copy(sourceFolder, distFolder)
                console.log(' - done')
            } catch (error) {
                console.log(' - Error while extracting the codebase!')
            }
        }
        if (actionToExecute.action === 'fullstackCoreATs') {
            // todo
            // init fullstack template here

            try {
                // ui
                const uiSourceFolder = path.resolve(__dirname, '../templates/ui-core-a-ts')
                const uiDistFolder = path.resolve('./' + project.name + '/ui')
                console.log(' - create folder ' + project.name + ' and extract ui codebase...')
                await fs.copy(uiSourceFolder, uiDistFolder)

                // api
                const apiSourceFolder = path.resolve(__dirname, '../templates/api-core-a-ts')
                const apiDistFolder = path.resolve('./' + project.name + '/api')
                console.log(' - create folder ' + project.name + ' and extract api codebase...')
                await fs.copy(apiSourceFolder, apiDistFolder)
                console.log(' - done')
            } catch (error) {
                console.log(' - Error while extracting the codebase!')
            }
            
        }
    }
}

export default AppsCreator