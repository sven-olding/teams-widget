import React from 'react';

interface HeaderWarningProps {
    text: string;
}

function HeaderWarning(props: HeaderWarningProps): JSX.Element {
    return (
        <div className="bg-yellow-300	rounded-lg">
            <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between flex-wrap">
                    <div className="w-0 flex-1 flex items-center">
                        <span className="flex p-2 rounded-lg">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                            </svg>
                        </span>
                        <p className="ml-3 font-medium truncate">
                            <span className="md:hidden">{props.text}</span>
                            <span className="hidden md:inline">{props.text}</span>
                        </p>
                    </div>
                    <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                        <button
                            type="button"
                            className="-mr-1 flex p-2 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2">
                            <span className="sr-only">Dismiss</span>
                            <svg
                                className="h-6 w-6 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderWarning;
