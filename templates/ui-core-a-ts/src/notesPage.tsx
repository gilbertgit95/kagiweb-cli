import { useAppSelector } from '@kagiweb-tech/ui-core-a';

export const NotesRoute = 'notes'
export const NotesRouteNav = {
    label: 'Notes',
    url: '/notes'
    // Icon: HomeIcon
}

export const NotesPage = () => {
    const accountData = useAppSelector(state => state.signedInAccount.accountData)

    return (
        <div>
            <h2>Notes View</h2>
            <ul>{ accountData?.nameId }</ul>
        </div>
    )
}

export default NotesPage