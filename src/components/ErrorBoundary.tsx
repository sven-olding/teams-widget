import React from 'react';

interface ErrorBoundaryProps {
    children: JSX.Element;
}

interface ErrorBoundaryState {
    error?: Error;
    errorInfo?: React.ErrorInfo;
    hasError: boolean;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error: error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.error(error);
        this.setState({ error, errorInfo });
    }

    render(): JSX.Element {
        const { hasError, error } = this.state;
        if (hasError) {
            return (
                <div className="lg:container lg:mx-auto m-4 p-2 mt-2 rounded-lg bg-red-600 text-white">
                    <div>
                        <p>
                            Sorry, da ist ein Fehler aufgetreten{' '}
                            <span
                                style={{ cursor: 'pointer', color: '#0077FF' }}
                                onClick={() => {
                                    window.location.reload();
                                }}
                                onKeyDown={() => {
                                    window.location.reload();
                                }}
                                role="button"
                                tabIndex={0}>
                                Diese Seite neu laden
                            </span>{' '}
                        </p>
                    </div>
                    <div>
                        <details style={{ whiteSpace: 'pre-wrap' }}>
                            <summary>Details</summary>
                            {error?.stack}
                        </details>
                    </div>
                </div>
            );
        } else {
            return this.props.children;
        }
    }
}
