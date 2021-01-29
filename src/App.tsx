import React, { useState } from 'react';

function App(): JSX.Element {
    const [counter, setCounter] = useState(0);
    if (counter == 1) {
        throw new Error('Test');
    }
    return (
        <div className="lg:container lg:mx-auto m-4">
            <div className="p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
                <div className="ml-6 pt-1">
                    <h1 className="text-2xl text-blue-700 leading-tight">
                        Tailwind and Create React App
                    </h1>
                    <p className="text-base text-gray-700 leading-normal">{counter}</p>
                </div>
            </div>

            <button
                type="button"
                className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-gray-200 rounded px-4 py-2 max-w-md flex mx-auto"
                onClick={() => {
                    setCounter(counter + 1);
                }}>
                Fehler provozieren
            </button>
        </div>
    );
}

export default App;
