import {
    Client,
    ImplicitMSALAuthenticationProvider,
    MSALAuthenticationProviderOptions,
} from '@microsoft/microsoft-graph-client';
import { UserAgentApplication } from 'msal';

export function useGraphClient(): Client {
    // see https://github.com/microsoftgraph/msgraph-sdk-javascript for details

    const msalConfig = {
        auth: {
            clientId: process.env.REACT_APP_CLIENT_ID || '',
            redirectUri: window.location.origin,
        },
        cache: {},
    };

    const userAgentApplication = new UserAgentApplication(msalConfig);
    const graphScopes = ['user.read', 'mail.send']; // An array of graph scopes

    const options = new MSALAuthenticationProviderOptions(graphScopes);

    const authProvider = new ImplicitMSALAuthenticationProvider(userAgentApplication, options);
    const clientOptions = {
        authProvider,
    };

    const client = Client.initWithMiddleware(clientOptions);
    return client;
}
