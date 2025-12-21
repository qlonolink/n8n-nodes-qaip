import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { completionDescription } from './resources/completion';
import { extractDescription } from './resources/extract';
import { searchDescription } from './resources/search';

export class Qaip implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'QAIP',
		name: 'qaip',
		icon: { light: 'file:qaip.svg', dark: 'file:qaip.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the QAIP API',
		defaults: {
			name: 'QAIP',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'qaipApi', required: true }],
		requestDefaults: {
			baseURL: 'https://developer.qaip.com/api/v1',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Completion',
						value: 'completion',
					},
					{
						name: 'Extract',
						value: 'extract',
					},
					{
						name: 'Search',
						value: 'search',
					},
				],
				default: 'completion',
			},
			...completionDescription,
			...extractDescription,
			...searchDescription,
		],
	};
}
