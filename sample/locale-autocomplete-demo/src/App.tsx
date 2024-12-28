import "./App.css";
import { Examples } from "Examples";

/**
 *
 * @returns
 * Root element of the App.
 */
function App() {
    return (
        <div>
            <h1>LocaleAutocomplete Demo</h1>
            <p>
                Github project page is{" "}
                <a href="https://github.com/Crow281/mui-locale-autocomplete/">
                    here
                </a>
                .
            </p>
            <Examples />
        </div>
    );
}

export default App;
