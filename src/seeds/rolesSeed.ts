// import { IRole } from '../models/roleModel'

const roles = [
    {
        '_id': '798c16ff-d75c-41b6-b9f5-69e21b08879a',
        'absoluteAuthority': true,
        'description': 'The highest role for this app, this has access to all resurces',
        'featuresRefs': [],
        'level': 0,
        'name': 'Master'
    },
    {
        '_id': 'cbe58c3c-9d86-466c-a8b4-1b26c379f276',
        'absoluteAuthority': false,
        'description': 'Have access to most of the resources.',
        'featuresRefs': [],
        'level': 1,
        'name': 'Manager'
    },
    {
        '_id': 'f2b124a8-0452-40f3-b053-c6f3b426e656',
        'absoluteAuthority': false,
        'description': 'Has limited access to resources',
        'featuresRefs': [],
        'level': 2,
        'name': 'Agent'
    },
    {
        '_id': '350f9050-6b97-497f-8c46-b6bf92ce0a4c',
        'absoluteAuthority': false,
        'description': 'Lowest access to resources',
        'featuresRefs': [
            {
              '_id': 'f825554c-23d7-4ad3-a7ad-06adcae2cb5d',
              'featureId': '2e90dae2-32ed-4d47-8ff7-dd3c56ec4aa4'
            },
            {
              '_id': '61d75bf8-e12e-4e31-a1e8-73a0f1487132',
              'featureId': 'eadd9f55-50ff-47ef-8240-f64b4ec5e722'
            },
            {
              '_id': '3ae55e38-5da1-46ed-8be6-6c43dafa1a70',
              'featureId': 'ab1b6851-170e-44b5-b147-d80f7b3ec76c'
            },
            {
              '_id': '85e1716d-27ae-4bf5-a90f-865772cb1ffa',
              'featureId': 'de2daa49-5dc2-45c6-b221-16004422c015'
            },
            {
              '_id': '13f6ca2c-f5a9-44f1-a3e9-92513758f180',
              'featureId': '7f1a33f7-f382-4e34-aaa0-a07663e3041c'
            },
            {
              '_id': '296e75e1-c0fd-437d-a3b0-6997e5880c06',
              'featureId': 'ea1e2ae1-9f61-41e4-9904-a97bc6e0f119'
            }
        ],
        'level': 3,
        'name': 'Intern'
    }
]

export default roles