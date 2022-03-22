import "./main.css";
import "./FileErrorBoundary.css";
import React from "react";

export default class FileErrorBoundary extends React.Component {
    constructor (props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError (error) {
        return { hasError: true };
    }

    componentDidCatch (error, errorInfo) {
        console.error("Error has been encountered: ", error);
    }

    render () {
        if (this.state.hasError) {
            return (
                <section className="file-error">
                    An error has been encountered during reading a file. Maybe file is incorrectly formatted.
                    More details in console.
                </section>
            );
        } else {
            return this.props.children;
        }
    }
}