import type { INodeProperties } from 'n8n-workflow';

export const completionDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['completion'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create a completion',
				routing: {
					request: {
						method: 'POST',
						url: '/completions',
					},
				},
			},
		],
		default: 'create',
	},
	{
		displayName: 'Messages',
		name: 'messages',
		placeholder: 'Add message',
		type: 'fixedCollection',
		default: {},
		typeOptions: {
			multipleValues: true,
		},
		description: 'The messages to generate a completion for',
		options: [
			{
				displayName: 'Message',
				name: 'message',
				values: [
					{
						displayName: 'Role',
						name: 'role',
						type: 'options',
						options: [
							{
								name: 'User',
								value: 'user',
							},
							{
								name: 'Assistant',
								value: 'assistant',
							},
							{
								name: 'System',
								value: 'system',
							},
						],
						default: 'user',
						description: 'The role of the message',
					},
					{
						displayName: 'Content',
						name: 'content',
						type: 'string',
						default: '',
						description: 'The content of the message',
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['completion'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'messages',
				value: '={{$value.message}}',
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: ['completion'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Citation',
				name: 'citation',
				type: 'boolean',
				default: true,
				description: 'Whether to include citations in the completion',
				routing: {
					send: {
						type: 'body',
						property: 'citation',
					},
				},
			},
			{
				displayName: 'Date From',
				name: 'date_from',
				type: 'dateTime',
				default: '',
				description: 'Start date for content search',
				routing: {
					send: {
						type: 'body',
						property: 'date_from',
						value: '={{ new Date($value).getTime() / 1000 }}',
					},
				},
			},
			{
				displayName: 'Date To',
				name: 'date_to',
				type: 'dateTime',
				default: '',
				description: 'End date for content search',
				routing: {
					send: {
						type: 'body',
						property: 'date_to',
						value: '={{ new Date($value).getTime() / 1000 }}',
					},
				},
			},
			{
				displayName: 'Domains',
				name: 'domains',
				placeholder: 'Add Domain',
				type: 'fixedCollection',
				default: {},
				typeOptions: {
					multipleValues: true,
				},
				description: 'List of domains',
				options: [
					{
						displayName: 'Domain',
						name: 'domain',
						values: [
							{
								displayName: 'Name',
								name: 'name',
								type: 'string',
								default: '',
								description: 'Domain name to search within',
							},
						],
					},
				],
				routing: {
					send: {
						type: 'body',
						property: 'domains',
						value: '={{ $value.domain.map(item => item.name) }}',
					},
				},
			},
			{
				displayName: 'File Types',
				name: 'file_types',
				type: 'multiOptions',
				default: [],
				description: 'File types to search',
				options: [
					{ name: 'AAC', value: 'aac' },
					{ name: 'AIF', value: 'aif' },
					{ name: 'AIFF', value: 'aiff' },
					{ name: 'DOC', value: 'doc' },
					{ name: 'DOCM', value: 'docm' },
					{ name: 'DOCX', value: 'docx' },
					{ name: 'FLAC', value: 'flac' },
					{ name: 'HTML', value: 'html' },
					{ name: 'M4A', value: 'm4a' },
					{ name: 'MD', value: 'md' },
					{ name: 'MP3', value: 'mp3' },
					{ name: 'Notion Page', value: 'notion_page' },
					{ name: 'OGA', value: 'oga' },
					{ name: 'OGG', value: 'ogg' },
					{ name: 'PDF', value: 'pdf' },
					{ name: 'PPT', value: 'ppt' },
					{ name: 'PPTM', value: 'pptm' },
					{ name: 'PPTX', value: 'pptx' },
					{ name: 'TXT', value: 'txt' },
					{ name: 'WAV', value: 'wav' },
					{ name: 'XLS', value: 'xls' },
					{ name: 'XLSM', value: 'xlsm' },
					{ name: 'XLSX', value: 'xlsx' },
				],
				routing: {
					send: {
						type: 'body',
						property: 'file_types',
					},
				},
			},
			{
				displayName: 'Source Types',
				name: 'source_types',
				type: 'multiOptions',
				default: [],
				description: 'Source types to search',
				options: [
					{ name: 'Crawl', value: 'crawl' },
					{ name: 'GitHub', value: 'github' },
					{ name: 'Google Drive', value: 'google_drive' },
					{ name: 'Local File', value: 'local_file' },
					{ name: 'Notion', value: 'notion' },
				],
				routing: {
					send: {
						type: 'body',
						property: 'source_types',
					},
				},
			},
		{
			displayName: 'Tag IDs',
			name: 'tag_ids',
			placeholder: 'Add Tag ID',
			type: 'fixedCollection',
			default: {},
			typeOptions: {
				multipleValues: true,
			},
			description: 'List of tag IDs',
			options: [
				{
					displayName: 'Tag ID',
					name: 'tagId',
					values: [
						{
							displayName: 'ID',
							name: 'id',
							type: 'string',
							default: '',
							description: 'Tag ID',
						},
					],
				},
			],
			routing: {
				send: {
					type: 'body',
					property: 'tag_ids',
					value: '={{ $value.tagId.map(item => item.id) }}',
				},
			},
		},
		{
			displayName: 'Tags',
			name: 'tags',
			placeholder: 'Add Tag',
			type: 'fixedCollection',
			default: {},
			typeOptions: {
				multipleValues: true,
			},
			description: 'List of tags',
			options: [
				{
					displayName: 'Tag',
					name: 'tag',
					values: [
						{
							displayName: 'Name',
							name: 'name',
							type: 'string',
							default: '',
							description: 'Tag name',
						},
					],
				},
			],
			routing: {
				send: {
					type: 'body',
					property: 'tags',
					value: '={{ $value.tag.map(item => item.name) }}',
				},
			},
		},
		],
	},
];
