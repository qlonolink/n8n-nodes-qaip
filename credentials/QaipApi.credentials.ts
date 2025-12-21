import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class QaipApi implements ICredentialType {
	name = 'qaipApi';

	displayName = 'QAIP API';

	// Link to your community node's README
	documentationUrl = 'https://developer.qaip.com/docs/integrations/n8n';

	icon = {
		light: 'file:../nodes/Qaip/qaip.svg',
		dark: 'file:../nodes/Qaip/qaip.dark.svg',
	} as const;

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'x-api-key': '={{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://developer.qaip.com/api/v1',
			url: '/tags',
		},
	};
}
