/*
 * The MIT License
 *
 * Copyright 2024 Crow281.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * Code used to generate LocaleAutocompleteDemo.
 */
export const localeAutocompleteDemoCode: string = `import { LocaleAutocomplete } from "@crow281/mui-locale-autocomplete";
import { useState } from "react";

/**
 * Displays LocaleAutocomplete in action.
 */
export function LocaleAutocompleteDemo(): JSX.Element {
    //Currently selected locale.
    const [selectedLocale, setSelectedLocale] = useState("Null");

    //List of locales user can pick from.
    const locales: Intl.Locale[] = [
        new Intl.Locale("en"),
        new Intl.Locale("en-GB"),
        new Intl.Locale("en-US"),
        new Intl.Locale("es"),
    ];

    //Function called whenever locale is changed.
    const onChange = (
        event: React.SyntheticEvent<Element, Event>,
        value: Intl.Locale | null,
    ): void => {
        //Records string value of locale.
        let localeString: string;

        //Update currently selected locale.
        //If a locale was selected.
        if (value) {
            //Convert to string.
            localeString = value.baseName;

            //If nothing was selected.
        } else {
            //Tell user selected locale is null.
            localeString = "Null";
        }

        //Update the selected locale.
        setSelectedLocale(localeString);
    };

    return (
        <div>
            <LocaleAutocomplete options={locales} onChange={onChange} />
            <div>Selected Locale: {selectedLocale}</div>
        </div>
    );
}
`;
