import React, { useEffect, useState } from 'react';
import { useGraphClient } from './hooks/msgraph-client';
import { User } from '@microsoft/microsoft-graph-types';

function App(): JSX.Element {
    const [userDisplayName, setUserDisplayName] = useState('');
    const graphClient = useGraphClient();

    useEffect(() => {
        async function getUserDisplayName() {
            try {
                const user: User = await graphClient.api('/me').get();
                console.log(user);
                setUserDisplayName(user.displayName ? user.displayName : '');
            } catch (e) {
                console.error(e);
            }
        }
        getUserDisplayName();
    }, [graphClient, userDisplayName]);

    return (
        <div className="lg:container lg:mx-auto m-4">
            <div className="p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
                <div className="ml-6 pt-1">
                    <h1 className="text-2xl text-blue-700 leading-tight">MS Teams Widget</h1>
                    {userDisplayName && (
                        <p className="text-base text-gray-700 leading-normal">
                            Willkommen, {userDisplayName}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
