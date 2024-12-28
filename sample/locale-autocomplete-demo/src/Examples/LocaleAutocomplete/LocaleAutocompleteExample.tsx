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
import { Example } from "Examples/Example";
import { LocaleAutocompleteDemo } from "Examples/LocaleAutocomplete/LocaleAutocompleteDemo";
import { localeAutocompleteDemoCode } from "Examples/LocaleAutocomplete/LocaleAutocompleteDemoCode";
import { SourceCode } from "Examples/SourceCode";

/**
 * Displays a simple example for LocaleAutocomplete.
 */
export default function LocaleAutocompleteExample() {
    //Source code backing the example.
    const sourceCode: SourceCode[] = [
        {
            fileName: "LocaleAutocompleteDemo.tsx",
            language: "typescript",
            code: localeAutocompleteDemoCode,
        },
    ];

    return (
        <Example sourceCode={sourceCode}>
            <p>
                LocaleAutocomplete is built over Material UI's Autocomplete. It
                allows you to select from an array of Intl.Locale objects.
            </p>
            <p>
                You can do what you want with the selected locale inside of
                LocaleAutocomplete's onChange function.
            </p>
            <LocaleAutocompleteDemo />
        </Example>
    );
}
