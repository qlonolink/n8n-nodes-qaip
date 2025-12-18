# n8n-nodes-qaip

This is an n8n community node. It lets you use [QAIP](https://developer.qaip.com/) in your n8n workflows.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/sustainable-use-license/) workflow automation platform.

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

The node supports the following operations:

- **Completion**: Generate AI responses in a natural conversational format based on your data sources.
- **Extract**: Extract information from unstructured data and convert it into structured JSON data according to a specified JSON schema.
- **Search**: Retrieve relevant information from your data sources using semantic search based on your queries.

See the [QAIP API documentation](https://developer.qaip.com/docs/sdks) for more details on each operation.

## Examples

You can find example workflows in the [examples/](./examples/) folder. To use them:

1. Copy the JSON content of the workflow file.
2. In n8n, press `Cmd + V` (Mac) or `Ctrl + V` (Windows) to paste the workflow.
3. Configure the required credentials for the nodes. Refer to the [QAIP documentation](https://developer.qaip.com/docs/features/apikey) to create an API key.

Refer to the [n8n documentation](https://docs.n8n.io/workflows/export-import/) for more details on how to import workflows.

### Simple Completion

- **File**: [`qaip_simple_completions.json`](./examples/qaip_simple_completions.json)
- **Description**: A basic workflow demonstrating how to generate a simple completion using the QAIP node.
- **Setup**: Requires [QAIP API key](https://developer.qaip.com/docs/features/apikey). Change the message content to your own prompt.

### Slack Chatbot

- **File**: [`qaip_slack_completions.json`](./examples/qaip_slack_completions.json)
- **Description**: A chatbot that replies to Slack mentions using QAIP. It listens for `app_mention` events and sends a response back to the same thread.
- **Setup**: Requires both QAIP and Slack credentials. Ensure your Slack App is configured to receive `app_mention` events and has the `chat:write` scope. See the [n8n Slack Trigger node documentation](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.slacktrigger/) on how to set up a Slack trigger node.

## Credentials

Refer to [QAIP documentation](https://developer.qaip.com/docs/features/apikey) to create an API key.

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
- [QAIP documentation](https://developer.qaip.com/docs/)
