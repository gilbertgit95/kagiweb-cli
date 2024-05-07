// import { IFeature } from '../models/featureModel'

const features = [
    {
      '_id': 'eadd9f55-50ff-47ef-8240-f64b4ec5e722',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/systemInfo',
      'tags': [
        'System'
      ],
      'type': 'api-route',
      'value': 'GET - /api/v1/systemInfo'
    },
    {
      '_id': 'ab1b6851-170e-44b5-b147-d80f7b3ec76c',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/features',
      'tags': [
        'Features'
      ],
      'type': 'api-route',
      'value': 'GET - /api/v1/features'
    },
    {
      '_id': 'de2daa49-5dc2-45c6-b221-16004422c015',
      'description': 'One of the server endpoint',
      'name': 'POST - /api/v1/features',
      'tags': [
        'Features'
      ],
      'type': 'api-route',
      'value': 'POST - /api/v1/features'
    },
    {
      '_id': '7f1a33f7-f382-4e34-aaa0-a07663e3041c',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/features/:featureId',
      'tags': [
        'Features'
      ],
      'type': 'api-route',
      'value': 'GET - /api/v1/features/:featureId'
    },
    {
      '_id': 'ea1e2ae1-9f61-41e4-9904-a97bc6e0f119',
      'description': 'One of the server endpoint',
      'name': 'PUT - /api/v1/features/:featureId',
      'tags': [
        'Features'
      ],
      'type': 'api-route',
      'value': 'PUT - /api/v1/features/:featureId'
    },
    {
      '_id': '7e6311e9-70e5-40bd-8f73-d7cf22dbb6b2',
      'description': 'One of the server endpoint',
      'name': 'DELETE - /api/v1/features/:featureId',
      'tags': [
        'Features'
      ],
      'type': 'api-route',
      'value': 'DELETE - /api/v1/features/:featureId'
    },
    {
      '_id': 'f859ca43-4e50-408e-8cd3-271de5102a9b',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/roles',
      'tags': [
        'Roles'
      ],
      'type': 'api-route',
      'value': 'GET - /api/v1/roles'
    },
    {
      '_id': 'c049dde2-209f-4296-816e-2dbd54f242b0',
      'description': 'One of the server endpoint',
      'name': 'POST - /api/v1/roles',
      'tags': [
        'Roles'
      ],
      'type': 'api-route',
      'value': 'POST - /api/v1/roles'
    },
    {
      '_id': '7f00752d-151c-464f-8aa1-0822720a02bb',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/roles/:roleId',
      'tags': [
        'Roles'
      ],
      'type': 'api-route',
      'value': 'GET - /api/v1/roles/:roleId'
    },
    {
      '_id': 'd3a7c487-8918-432c-b7c8-ecdb9db3e5a7',
      'description': 'One of the server endpoint',
      'name': 'PUT - /api/v1/roles/:roleId',
      'tags': [
        'Roles'
      ],
      'type': 'api-route',
      'value': 'PUT - /api/v1/roles/:roleId'
    },
    {
      '_id': 'fb9b660e-73a1-4cbb-a9bc-a04ed23208bd',
      'description': 'One of the server endpoint',
      'name': 'DELETE - /api/v1/roles/:roleId',
      'tags': [
        'Roles'
      ],
      'type': 'api-route',
      'value': 'DELETE - /api/v1/roles/:roleId'
    },
    {
      '_id': '38075849-0aeb-4af9-8d9b-03c1887a1a9a',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/roles/:roleId/features',
      'tags': [
        'Roles',
        'Features'
      ],
      'type': 'api-route',
      'value': 'GET - /api/v1/roles/:roleId/features'
    },
    {
      '_id': '904e09e2-e360-4531-903f-1a853d52b68f',
      'description': 'One of the server endpoint',
      'name': 'POST - /api/v1/roles/:roleId/features',
      'tags': [
        'Roles',
        'Features'
      ],
      'type': 'api-route',
      'value': 'POST - /api/v1/roles/:roleId/features'
    },
    {
      '_id': 'c62d5258-329a-416d-ae14-e152022a8999',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/roles/:roleId/features/:featureRefId',
      'tags': [
        'Roles',
        'Features'
      ],
      'type': 'api-route',
      'value': 'GET - /api/v1/roles/:roleId/features/:featureRefId'
    },
    {
      '_id': '9cd90eec-f2e3-4954-9ead-96a9578c25ba',
      'description': 'One of the server endpoint',
      'name': 'PUT - /api/v1/roles/:roleId/features/:featureRefId',
      'tags': [
        'Roles',
        'Features'
      ],
      'type': 'api-route',
      'value': 'PUT - /api/v1/roles/:roleId/features/:featureRefId'
    },
    {
      '_id': '22675b82-afa8-4d02-b852-dda8412c7b70',
      'description': 'One of the server endpoint',
      'name': 'DELETE - /api/v1/roles/:roleId/features/:featureRefId',
      'tags': [
        'Roles',
        'Features'
      ],
      'type': 'api-route',
      'value': 'DELETE - /api/v1/roles/:roleId/features/:featureRefId'
    },
    {
      '_id': 'f1bf5e78-c976-4344-b134-c86f580c7e0e',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/users',
      'tags': [
        'Users'
      ],
      'type': 'api-route',
      'value': 'GET - /api/v1/users'
    },
    {
      '_id': '87d76cf2-1ed8-4f46-a22f-552145420f92',
      'description': 'One of the server endpoint',
      'name': 'POST - /api/v1/users',
      'tags': [
        'Users'
      ],
      'type': 'api-route',
      'value': 'POST - /api/v1/users'
    },
    {
      '_id': '1608b4c7-e076-4cd4-8781-23e41a0e3d5d',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/users/:userId',
      'tags': [
        'Users'
      ],
      'type': 'api-route',
      'value': 'GET - /api/v1/users/:userId'
    },
    {
      '_id': 'c143b10b-ff38-4099-b2f3-71a69ffa6a3f',
      'description': 'One of the server endpoint',
      'name': 'PUT - /api/v1/users/:userId',
      'tags': [
        'Users'
      ],
      'type': 'api-route',
      'value': 'PUT - /api/v1/users/:userId'
    },
    {
      '_id': 'e17fc847-f06f-4557-977b-14d5f9e80f5f',
      'description': 'One of the server endpoint',
      'name': 'DELETE - /api/v1/users/:userId',
      'tags': [
        'Users'
      ],
      'type': 'api-route',
      'value': 'DELETE - /api/v1/users/:userId'
    },
    {
      '_id': '7f15d512-83af-46b6-b0c0-940e2e566a4d',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/users/:userId/roles',
      'tags': [
        'Users',
        'Roles'
      ],
      'type': 'api-route',
      'value': 'GET - /api/v1/users/:userId/roles'
    },
    {
      '_id': 'e7bf4233-d225-4496-be8b-86f8121631ca',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/users/:userId/roles/:roleRefId',
      'tags': [
        'Users',
        'Roles'
      ],
      'type': 'api-route',
      'value': 'GET - /api/v1/users/:userId/roles/:roleRefId'
    },
    {
      '_id': 'a4e020b1-0c8f-48f2-9872-974d2e936801',
      'description': 'One of the server endpoint',
      'name': 'POST - /api/v1/users/:userId/roles',
      'tags': [
        'Users',
        'Roles'
      ],
      'type': 'api-route',
      'value': 'POST - /api/v1/users/:userId/roles'
    },
    {
      '_id': 'ada2ba4a-ee69-4b15-a40f-694a0e040743',
      'description': 'One of the server endpoint',
      'name': 'PUT - /api/v1/users/:userId/roles/:roleRefId',
      'tags': [
        'Users',
        'Roles'
      ],
      'type': 'api-route',
      'value': 'PUT - /api/v1/users/:userId/roles/:roleRefId'
    },
    {
      '_id': '1a923823-9cf3-4845-8a54-0f55e9a2751a',
      'description': 'One of the server endpoint',
      'name': 'DELETE - /api/v1/users/:userId/roles/:roleRefId',
      'tags': [
        'Users',
        'Roles'
      ],
      'type': 'api-route',
      'value': 'DELETE - /api/v1/users/:userId/roles/:roleRefId'
    },
    {
      '_id': '2652318e-cf5e-490b-8c45-bc5eb1b5b622',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/users/:userId/userInfos',
      'tags': [
        'Users',
        'User Infos'
      ],
      'type': 'api-route',
      'value': 'GET - /api/v1/users/:userId/userInfos'
    },
    {
      '_id': 'ba5e85e3-2fe5-4657-9b79-9731889cbd9a',
      'description': 'One of the server endpoint',
      'name': 'POST - /api/v1/users/:userId/userInfos',
      'tags': [
        'Users',
        'User Infos'
      ],
      'type': 'api-route',
      'value': 'POST - /api/v1/users/:userId/userInfos'
    },
    {
      '_id': '5a0d526a-e78b-4055-b452-b5180cc2d260',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/users/:userId/userInfos/:userInfoId',
      'tags': [
        'Users',
        'User Infos'
      ],
      'type': 'api-route',
      'value': 'GET - /api/v1/users/:userId/userInfos/:userInfoId'
    },
    {
      '_id': '4bb63448-f53f-4e08-9584-0a0cf67404ed',
      'description': 'One of the server endpoint',
      'name': 'PUT - /api/v1/users/:userId/userInfos/:userInfoId',
      'tags': [
        'Users',
        'User Infos'
      ],
      'type': 'api-route',
      'value': 'PUT - /api/v1/users/:userId/userInfos/:userInfoId'
    },
    {
      '_id': '77cbbf55-128e-49ec-9d3d-5cdafd70b0cd',
      'description': 'One of the server endpoint',
      'name': 'DELETE - /api/v1/users/:userId/userInfos/:userInfoId',
      'tags': [
        'Users',
        'User Infos'
      ],
      'type': 'api-route',
      'value': 'DELETE - /api/v1/users/:userId/userInfos/:userInfoId'
    },
    {
      '_id': '34ca3a87-22c8-404d-8661-e395ca29a707',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/users/:userId/contactInfos',
      'tags': [
        'Users',
        'Contact Infos'
      ],
      'type': 'api-route',
      'value': 'GET - /api/v1/users/:userId/contactInfos'
    },
    {
      '_id': 'eb94f4b2-7c4e-4efe-84fc-5dbaf5de01f7',
      'description': 'One of the server endpoint',
      'name': 'POST - /api/v1/users/:userId/contactInfos',
      'tags': [
        'Users',
        'Contact Infos'
      ],
      'type': 'api-route',
      'value': 'POST - /api/v1/users/:userId/contactInfos'
    },
    {
      '_id': 'c5e7fb9f-54cf-443a-b74b-dcdbf4c4407e',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/users/:userId/contactInfos/:contactInfoId',
      'tags': [
        'Users',
        'Contact Infos'
      ],
      'type': 'api-route',
      'value': 'GET - /api/v1/users/:userId/contactInfos/:contactInfoId'
    },
    {
      '_id': 'a4a85703-3252-4c3e-abfe-86cb9f701505',
      'description': 'One of the server endpoint',
      'name': 'PUT - /api/v1/users/:userId/contactInfos/:contactInfoId',
      'tags': [
        'Users',
        'Contact Infos'
      ],
      'type': 'api-route',
      'value': 'PUT - /api/v1/users/:userId/contactInfos/:contactInfoId'
    },
    {
      '_id': '5b3ce0b8-f307-48c4-a7cf-305bbff602f7',
      'description': 'One of the server endpoint',
      'name': 'DELETE - /api/v1/users/:userId/contactInfos/:contactInfoId',
      'tags': [
        'Users',
        'Contact Infos'
      ],
      'type': 'api-route',
      'value': 'DELETE - /api/v1/users/:userId/contactInfos/:contactInfoId'
    },
    {
      '_id': '0cad4fdf-d6e1-4aaf-8aed-711425ec69fe',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/users/:userId/passwords',
      'tags': [
        'Users',
        'Passwords'
      ],
      'type': 'api-route',
      'value': 'GET - /api/v1/users/:userId/passwords'
    },
    {
      '_id': '31f10e6d-4b4d-471c-8109-98750f1a2ee5',
      'description': 'One of the server endpoint',
      'name': 'POST - /api/v1/users/:userId/passwords',
      'tags': [
        'Users',
        'Passwords'
      ],
      'type': 'api-route',
      'value': 'POST - /api/v1/users/:userId/passwords'
    },
    {
      '_id': 'b7a23794-7f2f-4e59-a270-0f03be073aa2',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/users/:userId/passwords/:passwordId',
      'tags': [
        'Users',
        'Passwords'
      ],
      'type': 'api-route',
      'value': 'GET - /api/v1/users/:userId/passwords/:passwordId'
    },
    {
      '_id': '4a4194a9-5370-4c34-9160-77a533320765',
      'description': 'One of the server endpoint',
      'name': 'DELETE - /api/v1/users/:userId/passwords/:passwordId',
      'tags': [
        'Users',
        'Passwords'
      ],
      'type': 'api-route',
      'value': 'DELETE - /api/v1/users/:userId/passwords/:passwordId'
    },
    {
      '_id': '9c2eda89-436b-4380-a7d5-430f0584d9a8',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/users/:userId/limitedTransactions',
      'tags': [
        'Users',
        'Limited Transactions'
      ],
      'type': 'api-route',
      'value': 'GET - /api/v1/users/:userId/limitedTransactions'
    },
    {
      '_id': '75e20db6-218e-4104-97fe-b7acb4631f60',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/users/:userId/limitedTransactions/:limitedTransactionId',
      'tags': [
        'Users',
        'Limited Transactions'
      ],
      'type': 'api-route',
      'value': 'GET - /api/v1/users/:userId/limitedTransactions/:limitedTransactionId'
    },
    {
      '_id': 'ed803a0c-9e16-4adb-91f6-511c6a5f26a4',
      'description': 'One of the server endpoint',
      'name': 'PUT - /api/v1/users/:userId/limitedTransactions/:limitedTransactionId',
      'tags': [
        'Users',
        'Limited Transactions'
      ],
      'type': 'api-route',
      'value': 'PUT - /api/v1/users/:userId/limitedTransactions/:limitedTransactionId'
    },
    {
      '_id': '169bc403-f779-4338-b1d4-b78b2b992871',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/users/:userId/clientDevices',
      'tags': [
        'Users',
        'Client Devices'
      ],
      'type': 'api-route',
      'value': 'GET - /api/v1/users/:userId/clientDevices'
    },
    {
      '_id': 'c1f4863d-e6f0-456e-88c3-e5a156a8adfb',
      'description': 'One of the server endpoint',
      'name': 'POST - /api/v1/users/:userId/clientDevices',
      'tags': [
        'Users',
        'Client Devices'
      ],
      'type': 'api-route',
      'value': 'POST - /api/v1/users/:userId/clientDevices'
    },
    {
      '_id': 'ee226dff-55e8-4850-8063-9c0d45292258',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/users/:userId/clientDevices/:clientDeviceId',
      'tags': [
        'Users',
        'Client Devices'
      ],
      'type': 'api-route',
      'value': 'GET - /api/v1/users/:userId/clientDevices/:clientDeviceId'
    },
    {
      '_id': '42004dde-532b-468a-a59b-fd103bf26226',
      'description': 'One of the server endpoint',
      'name': 'PUT - /api/v1/users/:userId/clientDevices/:clientDeviceId',
      'tags': [
        'Users',
        'Client Devices'
      ],
      'type': 'api-route',
      'value': 'PUT - /api/v1/users/:userId/clientDevices/:clientDeviceId'
    },
    {
      '_id': '561eb501-c0a0-4b79-a6da-f78d0ece9267',
      'description': 'One of the server endpoint',
      'name': 'DELETE - /api/v1/users/:userId/clientDevices/:clientDeviceId',
      'tags': [
        'Users',
        'Client Devices'
      ],
      'type': 'api-route',
      'value': 'DELETE - /api/v1/users/:userId/clientDevices/:clientDeviceId'
    },
    {
      '_id': '416ede4e-15d2-4a1a-8c87-2b092403d488',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/users/:userId/clientDevices/:clientDeviceId/accessTokens',
      'tags': [
        'Users',
        'Client Devices',
        'Access Tokens'
      ],
      'type': 'api-route',
      'value': 'GET - /api/v1/users/:userId/clientDevices/:clientDeviceId/accessTokens'
    },
    {
      '_id': '906787c7-abf9-4ced-8f43-a1cbff501178',
      'description': 'One of the server endpoint',
      'name': 'POST - /api/v1/users/:userId/clientDevices/:clientDeviceId/accessTokens',
      'tags': [
        'Users',
        'Client Devices',
        'Access Tokens'
      ],
      'type': 'api-route',
      'value': 'POST - /api/v1/users/:userId/clientDevices/:clientDeviceId/accessTokens'
    },
    {
      '_id': '21d540c3-9309-44c8-b144-500f3922c0e8',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/users/:userId/clientDevices/:clientDeviceId/accessTokens/:accessTokenId',
      'tags': [
        'Users',
        'Client Devices',
        'Access Tokens'
      ],
      'type': 'api-route',
      'value': 'GET - /api/v1/users/:userId/clientDevices/:clientDeviceId/accessTokens/:accessTokenId'
    },
    {
      '_id': 'b03607ad-982f-4cd1-9c14-c51a984c2e1e',
      'description': 'One of the server endpoint',
      'name': 'PUT - /api/v1/users/:userId/clientDevices/:clientDeviceId/accessTokens/:accessTokenId',
      'tags': [
        'Users',
        'Client Devices',
        'Access Tokens'
      ],
      'type': 'api-route',
      'value': 'PUT - /api/v1/users/:userId/clientDevices/:clientDeviceId/accessTokens/:accessTokenId'
    },
    {
      '_id': 'b57a0c39-e31f-4f27-b46e-e715c6d41a02',
      'description': 'One of the server endpoint',
      'name': 'DELETE - /api/v1/users/:userId/clientDevices/:clientDeviceId/accessTokens/:accessTokenId',
      'tags': [
        'Users',
        'Client Devices',
        'Access Tokens'
      ],
      'type': 'api-route',
      'value': 'DELETE - /api/v1/users/:userId/clientDevices/:clientDeviceId/accessTokens/:accessTokenId'
    },
    {
      '_id': '2e90dae2-32ed-4d47-8ff7-dd3c56ec4aa4',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/owner',
      'tags': [
        'Owner'
      ],
      'type': 'api-route',
      'value': 'GET - /api/v1/owner'
    },
    {
      '_id': '886f4ba8-ed70-4e79-9638-838a7c45108a',
      'description': 'One of the server endpoint',
      'name': 'PUT - /api/v1/owner',
      'tags': [
        'Owner'
      ],
      'type': 'api-route',
      'value': 'PUT - /api/v1/owner'
    },
    {
      '_id': 'd48d57d8-0bf3-4b73-b521-f30923937289',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/owner/roles',
      'tags': [
        'Owner',
        'Roles'
      ],
      'type': 'api-route',
      'value': 'GET - /api/v1/owner/roles'
    },
    {
      '_id': '98d77b97-fbd3-4d2d-84a5-93967d6589a0',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/owner/roles/:roleRefId',
      'tags': [
        'Owner',
        'Roles'
      ],
      'type': 'api-route',
      'value': 'GET - /api/v1/owner/roles/:roleRefId'
    },
    {
      '_id': 'f3a132d5-0bfe-4da6-95ed-f9a811c11b55',
      'description': 'One of the server endpoint',
      'name': 'POST - /api/v1/owner/roles',
      'tags': [
        'Owner',
        'Roles'
      ],
      'type': 'api-route',
      'value': 'POST - /api/v1/owner/roles'
    },
    {
      '_id': 'c03a81af-3763-4b4d-8147-be5bc369cad1',
      'description': 'One of the server endpoint',
      'name': 'PUT - /api/v1/owner/roles/:roleRefId',
      'tags': [
        'Owner',
        'Roles'
      ],
      'type': 'api-route',
      'value': 'PUT - /api/v1/owner/roles/:roleRefId'
    },
    {
      '_id': '58471c04-be21-4508-bccf-2723364c4d3c',
      'description': 'One of the server endpoint',
      'name': 'DELETE - /api/v1/owner/roles/:roleRefId',
      'tags': [
        'Owner',
        'Roles'
      ],
      'type': 'api-route',
      'value': 'DELETE - /api/v1/owner/roles/:roleRefId'
    },
    {
      '_id': 'd06f83f4-35a4-4ddc-8f84-f4e8d90e2a8d',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/owner/userInfos',
      'tags': [
        'Owner',
        'User Infos'
      ],
      'type': 'api-route',
      'value': 'GET - /api/v1/owner/userInfos'
    },
    {
      '_id': 'de03656f-1522-48b5-beff-8ff90874c1b2',
      'description': 'One of the server endpoint',
      'name': 'POST - /api/v1/owner/userInfos',
      'tags': [
        'Owner',
        'User Infos'
      ],
      'type': 'api-route',
      'value': 'POST - /api/v1/owner/userInfos'
    },
    {
      '_id': 'e59d3de7-39cd-46d2-b780-389e6c763944',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/owner/userInfos/:userInfoId',
      'tags': [
        'Owner',
        'User Infos'
      ],
      'type': 'api-route',
      'value': 'GET - /api/v1/owner/userInfos/:userInfoId'
    },
    {
      '_id': 'e5c60129-9267-4ccb-a79b-97d941e1fc98',
      'description': 'One of the server endpoint',
      'name': 'PUT - /api/v1/owner/userInfos/:userInfoId',
      'tags': [
        'Owner',
        'User Infos'
      ],
      'type': 'api-route',
      'value': 'PUT - /api/v1/owner/userInfos/:userInfoId'
    },
    {
      '_id': '6cb961f3-1ea3-4f6b-b930-8b088a15be95',
      'description': 'One of the server endpoint',
      'name': 'DELETE - /api/v1/owner/userInfos/:userInfoId',
      'tags': [
        'Owner',
        'User Infos'
      ],
      'type': 'api-route',
      'value': 'DELETE - /api/v1/owner/userInfos/:userInfoId'
    },
    {
      '_id': 'daf025ef-e54e-4fdc-a832-8888928f9a15',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/owner/contactInfos',
      'tags': [
        'Owner',
        'Contact Infos'
      ],
      'type': 'api-route',
      'value': 'GET - /api/v1/owner/contactInfos'
    },
    {
      '_id': '12cfb96b-d6fc-41fb-9457-a562deb3c20f',
      'description': 'One of the server endpoint',
      'name': 'POST - /api/v1/owner/contactInfos',
      'tags': [
        'Owner',
        'Contact Infos'
      ],
      'type': 'api-route',
      'value': 'POST - /api/v1/owner/contactInfos'
    },
    {
      '_id': 'cf9234a0-2ed1-4e25-b325-0e8b7e818f5b',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/owner/contactInfos/:contactInfoId',
      'tags': [
        'Owner',
        'Contact Infos'
      ],
      'type': 'api-route',
      'value': 'GET - /api/v1/owner/contactInfos/:contactInfoId'
    },
    {
      '_id': 'a809f32e-4ef6-4480-9ace-b8585630cde5',
      'description': 'One of the server endpoint',
      'name': 'PUT - /api/v1/owner/contactInfos/:contactInfoId',
      'tags': [
        'Owner',
        'Contact Infos'
      ],
      'type': 'api-route',
      'value': 'PUT - /api/v1/owner/contactInfos/:contactInfoId'
    },
    {
      '_id': '2ad2fc91-d555-4a39-97fb-31dfd338b8de',
      'description': 'One of the server endpoint',
      'name': 'DELETE - /api/v1/owner/contactInfos/:contactInfoId',
      'tags': [
        'Owner',
        'Contact Infos'
      ],
      'type': 'api-route',
      'value': 'DELETE - /api/v1/owner/contactInfos/:contactInfoId'
    },
    {
      '_id': '2d3e49bf-4a49-4c79-a391-53222ae55252',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/owner/passwords',
      'tags': [
        'Owner',
        'Passwords'
      ],
      'type': 'api-route',
      'value': 'GET - /api/v1/owner/passwords'
    },
    {
      '_id': 'c8007276-3f8e-4962-a0c2-d8f0c9b5eb98',
      'description': 'One of the server endpoint',
      'name': 'POST - /api/v1/owner/passwords',
      'tags': [
        'Owner',
        'Passwords'
      ],
      'type': 'api-route',
      'value': 'POST - /api/v1/owner/passwords'
    },
    {
      '_id': 'f6e45daf-6694-4766-a81f-04c6c2375b8d',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/owner/passwords/:passwordId',
      'tags': [
        'Owner',
        'Passwords'
      ],
      'type': 'api-route',
      'value': 'GET - /api/v1/owner/passwords/:passwordId'
    },
    {
      '_id': '1b3167cf-8639-4cc0-95b4-4cfe490619c5',
      'description': 'One of the server endpoint',
      'name': 'DELETE - /api/v1/owner/passwords/:passwordId',
      'tags': [
        'Owner',
        'Passwords'
      ],
      'type': 'api-route',
      'value': 'DELETE - /api/v1/owner/passwords/:passwordId'
    },
    {
      '_id': 'a406c62e-36c1-46b2-9ef3-f04c2e04d8ca',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/owner/limitedTransactions',
      'tags': [
        'Owner',
        'Limited Transactions'
      ],
      'type': 'api-route',
      'value': 'GET - /api/v1/owner/limitedTransactions'
    },
    {
      '_id': '11826468-7e6b-4e37-ba51-9d7d4e2d817f',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/owner/limitedTransactions/:limitedTransactionId',
      'tags': [
        'Owner',
        'Limited Transactions'
      ],
      'type': 'api-route',
      'value': 'GET - /api/v1/owner/limitedTransactions/:limitedTransactionId'
    },
    {
      '_id': 'abd5b2af-f44a-447e-bc9e-039e773e02bf',
      'description': 'One of the server endpoint',
      'name': 'PUT - /api/v1/owner/limitedTransactions/:limitedTransactionId',
      'tags': [
        'Owner',
        'Limited Transactions'
      ],
      'type': 'api-route',
      'value': 'PUT - /api/v1/owner/limitedTransactions/:limitedTransactionId'
    },
    {
      '_id': 'ee90cf0b-4448-4e11-a264-6c1f4f77516a',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/owner/clientDevices',
      'tags': [
        'Owner',
        'Client Devices'
      ],
      'type': 'api-route',
      'value': 'GET - /api/v1/owner/clientDevices'
    },
    {
      '_id': '33c9db06-855d-4d47-8929-ff5b74191ee1',
      'description': 'One of the server endpoint',
      'name': 'POST - /api/v1/owner/clientDevices',
      'tags': [
        'Owner',
        'Client Devices'
      ],
      'type': 'api-route',
      'value': 'POST - /api/v1/owner/clientDevices'
    },
    {
      '_id': '3599016e-c36a-439f-908c-670525eb8e26',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/owner/clientDevices/:clientDeviceId',
      'tags': [
        'Owner',
        'Client Devices'
      ],
      'type': 'api-route',
      'value': 'GET - /api/v1/owner/clientDevices/:clientDeviceId'
    },
    {
      '_id': '172ea74c-dde3-45e0-a947-2760a486f52c',
      'description': 'One of the server endpoint',
      'name': 'PUT - /api/v1/owner/clientDevices/:clientDeviceId',
      'tags': [
        'Owner',
        'Client Devices'
      ],
      'type': 'api-route',
      'value': 'PUT - /api/v1/owner/clientDevices/:clientDeviceId'
    },
    {
      '_id': 'c5481c32-deaf-4efa-8ff1-bd60c664e690',
      'description': 'One of the server endpoint',
      'name': 'DELETE - /api/v1/owner/clientDevices/:clientDeviceId',
      'tags': [
        'Owner',
        'Client Devices'
      ],
      'type': 'api-route',
      'value': 'DELETE - /api/v1/owner/clientDevices/:clientDeviceId'
    },
    {
      '_id': '6935aabb-e7dc-496c-94c8-92478cfa3072',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/owner/clientDevices/:clientDeviceId/accessTokens',
      'tags': [
        'Owner',
        'Client Devices',
        'Access Tokens'
      ],
      'type': 'api-route',
      'value': 'GET - /api/v1/owner/clientDevices/:clientDeviceId/accessTokens'
    },
    {
      '_id': 'c8a1fd70-87e2-412c-87d0-57677f775b83',
      'description': 'One of the server endpoint',
      'name': 'POST - /api/v1/owner/clientDevices/:clientDeviceId/accessTokens',
      'tags': [
        'Owner',
        'Client Devices',
        'Access Tokens'
      ],
      'type': 'api-route',
      'value': 'POST - /api/v1/owner/clientDevices/:clientDeviceId/accessTokens'
    },
    {
      '_id': 'b0514442-38ba-433f-8381-2752129a0989',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/owner/clientDevices/:clientDeviceId/accessTokens/:accessTokenId',
      'tags': [
        'Owner',
        'Client Devices',
        'Access Tokens'
      ],
      'type': 'api-route',
      'value': 'GET - /api/v1/owner/clientDevices/:clientDeviceId/accessTokens/:accessTokenId'
    },
    {
      '_id': '6c37f2c5-035a-43eb-8c49-17e09d714cc0',
      'description': 'One of the server endpoint',
      'name': 'PUT - /api/v1/owner/clientDevices/:clientDeviceId/accessTokens/:accessTokenId',
      'tags': [
        'Owner',
        'Client Devices',
        'Access Tokens'
      ],
      'type': 'api-route',
      'value': 'PUT - /api/v1/owner/clientDevices/:clientDeviceId/accessTokens/:accessTokenId'
    },
    {
      '_id': '958faaa1-26f6-43ef-848e-1f5136416366',
      'description': 'One of the server endpoint',
      'name': 'DELETE - /api/v1/owner/clientDevices/:clientDeviceId/accessTokens/:accessTokenId',
      'tags': [
        'Owner',
        'Client Devices',
        'Access Tokens'
      ],
      'type': 'api-route',
      'value': 'DELETE - /api/v1/owner/clientDevices/:clientDeviceId/accessTokens/:accessTokenId'
    },
    {
      '_id': '2863101d-873b-416b-b1c0-de727de2c393',
      'value': 'GET - /api/v1/owner/workspaces',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/owner/workspaces',
      'tags': [
        'Owner',
        'Workspaces'
      ],
      'type': 'api-route'
    },
    {
      '_id': '7ae6c2f2-8abd-495d-aede-665465b3692b',
      'value': 'POST - /api/v1/owner/workspaces',
      'description': 'One of the server endpoint',
      'name': 'POST - /api/v1/owner/workspaces',
      'tags': [
        'Owner',
        'Workspaces'
      ],
      'type': 'api-route'
    },
    {
      '_id': '787b607c-e7f8-4aed-a463-ce7fcccedb1b',
      'value': 'GET - /api/v1/owner/workspaces/:workspaceId',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/owner/workspaces/:workspaceId',
      'tags': [
        'Owner',
        'Workspaces'
      ],
      'type': 'api-route'
    },
    {
      '_id': '3c473b85-f04a-4362-904b-c28d3cbb3c11',
      'value': 'PUT - /api/v1/owner/workspaces/:workspaceId',
      'description': 'One of the server endpoint',
      'name': 'PUT - /api/v1/owner/workspaces/:workspaceId',
      'tags': [
        'Owner',
        'Workspaces'
      ],
      'type': 'api-route'
    },
    {
      '_id': 'c0993164-c0a8-4511-9137-9e29c757a969',
      'value': 'DELETE - /api/v1/owner/workspaces/:workspaceId',
      'description': 'One of the server endpoint',
      'name': 'DELETE - /api/v1/owner/workspaces/:workspaceId',
      'tags': [
        'Owner',
        'Workspaces'
      ],
      'type': 'api-route'
    },
    {
      '_id': 'c942f05b-3b63-4073-9779-d03192d73085',
      'value': 'POST - /api/v1/owner/workspaces/:workspaceId/select',
      'description': 'One of the server endpoint',
      'name': 'POST - /api/v1/owner/workspaces/:workspaceId/select',
      'tags': [
        'Owner',
        'Workspaces'
      ],
      'type': 'api-route'
    },
    {
      '_id': '99cd716d-f87d-4df9-bf0d-d7daf940e8c9',
      'value': 'GET - /api/v1/owner/workspaces/:workspaceId/users',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/owner/workspaces/:workspaceId/users',
      'tags': [
        'Owner',
        'Workspaces'
      ],
      'type': 'api-route'
    },
    {
      '_id': 'f051edc1-ab38-4b26-b8c6-ee2b30bebd9f',
      'value': 'POST - /api/v1/owner/workspaces/:workspaceId/users',
      'description': 'One of the server endpoint',
      'name': 'POST - /api/v1/owner/workspaces/:workspaceId/users',
      'tags': [
        'Owner',
        'Workspaces'
      ],
      'type': 'api-route'
    },
    {
      '_id': '88f16fd9-ed25-4ec3-b13d-56b1c5792bed',
      'value': 'GET - /api/v1/owner/workspaces/:workspaceId/users/:userRefId',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/owner/workspaces/:workspaceId/users/:userRefId',
      'tags': [
        'Owner',
        'Workspaces'
      ],
      'type': 'api-route'
    },
    {
      '_id': '8076174f-0d4f-412c-beb6-0afe5b91cd6f',
      'value': 'PUT - /api/v1/owner/workspaces/:workspaceId/users/:userRefId',
      'description': 'One of the server endpoint',
      'name': 'PUT - /api/v1/owner/workspaces/:workspaceId/users/:userRefId',
      'tags': [
        'Owner',
        'Workspaces'
      ],
      'type': 'api-route'
    },
    {
      '_id': '5c87717f-d085-40ea-a385-d269a3a7f0f8',
      'value': 'DELETE - /api/v1/owner/workspaces/:workspaceId/users/:userRefId',
      'description': 'One of the server endpoint',
      'name': 'DELETE - /api/v1/owner/workspaces/:workspaceId/users/:userRefId',
      'tags': [
        'Owner',
        'Workspaces'
      ],
      'type': 'api-route'
    },
    {
      '_id': '639944d7-e2b9-4e8b-98ce-d4736805e19e',
      'value': 'GET - /api/v1/users/:userId/completeInfo',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/users/:userId/completeInfo',
      'tags': [
        'Users'
      ],
      'type': 'api-route'
    },
    {
      '_id': '9c83b00b-f363-4e51-abd6-4f6bbdeb9176',
      'value': 'GET - /api/v1/owner/completeInfo',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/owner/completeInfo',
      'tags': [
        'Owner'
      ],
      'type': 'api-route'
    },
    {
      '_id': '6dbcad65-6078-4947-b086-76b8faae58a1',
      'value': 'PUT - /api/v1/users/:userId/roles/:roleRefId/activate',
      'description': 'One of the server endpoint',
      'name': 'PUT - /api/v1/users/:userId/roles/:roleRefId/activate',
      'tags': [
        'Users',
        'Roles'
      ],
      'type': 'api-route'
    },
    {
      '_id': '0b15c4f2-f889-432e-823f-bade91d665f8',
      'value': 'PUT - /api/v1/owner/roles/:roleRefId/activate',
      'description': 'One of the server endpoint',
      'name': 'PUT - /api/v1/owner/roles/:roleRefId/activate',
      'tags': [
        'Owner',
        'Roles'
      ],
      'type': 'api-route'
    },
    {
      '_id': 'e78073e1-3b8f-4b01-a20b-0d8e79b619b2',
      'value': 'PUT - /api/v1/roles/:roleId/cloneFeatures',
      'description': 'One of the server endpoint',
      'name': 'PUT - /api/v1/roles/:roleId/cloneFeatures',
      'tags': [
        'Roles'
      ],
      'type': 'api-route'
    },
    {
      '_id': 'c1133a83-6216-4e81-87b0-6abd10274c30',
      'value': 'GET - /api/v1/owner/workspaces/:workspaceId/userRefs',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/owner/workspaces/:workspaceId/userRefs',
      'tags': [
        'Owner',
        'Workspaces',
        'User References'
      ],
      'type': 'api-route'
    },
    {
      '_id': '976b98e7-5991-4882-872a-9761f01e31ac',
      'value': 'POST - /api/v1/owner/workspaces/:workspaceId/userRefs',
      'description': 'One of the server endpoint',
      'name': 'POST - /api/v1/owner/workspaces/:workspaceId/userRefs',
      'tags': [
        'Owner',
        'Workspaces',
        'User References'
      ],
      'type': 'api-route'
    },
    {
      '_id': '30cbe593-e6e4-4215-bf18-286066be9c2c',
      'value': 'GET - /api/v1/owner/workspaces/:workspaceId/userRefs/:userRefId',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/owner/workspaces/:workspaceId/userRefs/:userRefId',
      'tags': [
        'Owner',
        'Workspaces',
        'User References'
      ],
      'type': 'api-route'
    },
    {
      '_id': '8b2cee7f-dbe5-44e4-b47d-c04091ab4e99',
      'value': 'PUT - /api/v1/owner/workspaces/:workspaceId/userRefs/:userRefId',
      'description': 'One of the server endpoint',
      'name': 'PUT - /api/v1/owner/workspaces/:workspaceId/userRefs/:userRefId',
      'tags': [
        'Owner',
        'Workspaces',
        'User References'
      ],
      'type': 'api-route'
    },
    {
      '_id': '1968e844-b968-4cb9-9c4b-e0b916998e12',
      'value': 'DELETE - /api/v1/owner/workspaces/:workspaceId/userRefs/:userRefId',
      'description': 'One of the server endpoint',
      'name': 'DELETE - /api/v1/owner/workspaces/:workspaceId/userRefs/:userRefId',
      'tags': [
        'Owner',
        'Workspaces',
        'User References'
      ],
      'type': 'api-route'
    },
    {
      '_id': '5269593f-b41c-4575-ba66-fdf6fd31b1b5',
      'value': 'GET - /api/v1/users/:userId/workspaces',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/users/:userId/workspaces',
      'tags': [
        'Users',
        'Workspaces'
      ],
      'type': 'api-route'
    },
    {
      '_id': '12a87eba-f81d-49cf-a682-c5cb5d273be6',
      'value': 'POST - /api/v1/users/:userId/workspaces',
      'description': 'One of the server endpoint',
      'name': 'POST - /api/v1/users/:userId/workspaces',
      'tags': [
        'Users',
        'Workspaces'
      ],
      'type': 'api-route'
    },
    {
      '_id': 'de783b93-f9cb-43c8-abeb-ffb9551f74d0',
      'value': 'GET - /api/v1/users/:userId/workspaces/:workspaceId',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/users/:userId/workspaces/:workspaceId',
      'tags': [
        'Users',
        'Workspaces'
      ],
      'type': 'api-route'
    },
    {
      '_id': '09b4be12-6908-4a37-ae78-1f4539f485b4',
      'value': 'PUT - /api/v1/users/:userId/workspaces/:workspaceId',
      'description': 'One of the server endpoint',
      'name': 'PUT - /api/v1/users/:userId/workspaces/:workspaceId',
      'tags': [
        'Users',
        'Workspaces'
      ],
      'type': 'api-route'
    },
    {
      '_id': 'e08b5ee2-2c7c-438a-b058-1e0defc16f25',
      'value': 'DELETE - /api/v1/users/:userId/workspaces/:workspaceId',
      'description': 'One of the server endpoint',
      'name': 'DELETE - /api/v1/users/:userId/workspaces/:workspaceId',
      'tags': [
        'Users',
        'Workspaces'
      ],
      'type': 'api-route'
    },
    {
      '_id': '1bd14996-220d-4104-8805-aec12f387e3e',
      'value': 'GET - /api/v1/users/:userId/workspaces/:workspaceId/userRefs',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/users/:userId/workspaces/:workspaceId/userRefs',
      'tags': [
        'Users',
        'Workspaces',
        'User References'
      ],
      'type': 'api-route'
    },
    {
      '_id': '91575245-bd4e-45a0-8961-8aa202fa131b',
      'value': 'POST - /api/v1/users/:userId/workspaces/:workspaceId/userRefs',
      'description': 'One of the server endpoint',
      'name': 'POST - /api/v1/users/:userId/workspaces/:workspaceId/userRefs',
      'tags': [
        'Users',
        'Workspaces',
        'User References'
      ],
      'type': 'api-route'
    },
    {
      '_id': '8ecee4d8-f9d7-454b-9397-9edb79d9cebc',
      'value': 'GET - /api/v1/users/:userId/workspaces/:workspaceId/userRefs/:userRefId',
      'description': 'One of the server endpoint',
      'name': 'GET - /api/v1/users/:userId/workspaces/:workspaceId/userRefs/:userRefId',
      'tags': [
        'Users',
        'Workspaces',
        'User References'
      ],
      'type': 'api-route'
    },
    {
      '_id': 'a91352ed-9e68-4e53-ae9b-c059017c00ad',
      'value': 'PUT - /api/v1/users/:userId/workspaces/:workspaceId/userRefs/:userRefId',
      'description': 'One of the server endpoint',
      'name': 'PUT - /api/v1/users/:userId/workspaces/:workspaceId/userRefs/:userRefId',
      'tags': [
        'Users',
        'Workspaces',
        'User References'
      ],
      'type': 'api-route'
    },
    {
      '_id': '4fad9daf-3e7c-476a-8e56-26b8e3d06027',
      'value': 'DELETE - /api/v1/users/:userId/workspaces/:workspaceId/userRefs/:userRefId',
      'description': 'One of the server endpoint',
      'name': 'DELETE - /api/v1/users/:userId/workspaces/:workspaceId/userRefs/:userRefId',
      'tags': [
        'Users',
        'Workspaces',
        'User References'
      ],
      'type': 'api-route'
    }
]

export default features