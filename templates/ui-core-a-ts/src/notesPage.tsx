import react from 'react';
import { appStore } from '@kagiweb-tech/ui-core-a';

// const { useAppSelector } = appStore;
// import { useAppSelector } from '@kagiweb-tech/ui-core-a/dist/esm/stores/appStore';

export const NotesRoute = 'notes'
export const NotesRouteNav = {
    label: 'Notes',
    url: '/notes'
    // Icon: HomeIcon
}

export const NotesPage = () => {
    // const accountData = appStore.useAppSelector(state => state.signedInAccount.accountData)

    return (
        <div>
            <h2>Notes View</h2>
        </div>
    )
}

export default NotesPage