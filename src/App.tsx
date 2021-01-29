import React from 'react';

function App(): JSX.Element {
    return (
        <div className="lg:container lg:mx-auto m-4">
            <div className="p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
                <div className="ml-6 pt-1">
                    <h1 className="text-2xl text-blue-700 leading-tight">
                        Tailwind and Create React App
                    </h1>
                    <p className="text-base text-gray-700 leading-normal">Test</p>
                </div>
            </div>
        </div>
    );
}

export default App;
