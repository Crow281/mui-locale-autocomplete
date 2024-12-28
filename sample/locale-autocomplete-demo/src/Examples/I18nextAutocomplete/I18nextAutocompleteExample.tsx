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
import { I18nextAutocompleteDemo } from "Examples/I18nextAutocomplete/I18nextAutocompleteDemo";
import { i18nextAutocompleteDemoCode } from "Examples/I18nextAutocomplete/I18nextAutocompleteDemoCode";
import "Examples/I18nextAutocomplete/InitializeReactI18next";
import { initializeReactI18nextCode } from "Examples/I18nextAutocomplete/InitializeReactI18nextCode";
import { SourceCode } from "Examples/SourceCode";

/**
 * Displays a simple example for I18nextAutocomplete.
 */
export default function I18nextAutocompleteExample() {
    //Source code backing the example.
    const sourceCode: SourceCode[] = [
        {
            fileName: "InitializeReactI18next.ts",
            language: "typescript",
            code: initializeReactI18nextCode,
        },
        {
            fileName: "I18nextAutocompleteDemo.tsx",
            language: "typescript",
            code: i18nextAutocompleteDemoCode,
        },
    ];

    return (
        <Example sourceCode={sourceCode}>
            <p>
                I18nextAutocomplete is built over Material UI's Autocomplete. It
                is bound to I18next and allows you to customize which language
                is selected. I18nextAutocomplete itself needs no setup.
            </p>
            <I18nextAutocompleteDemo />
        </Example>
    );
}
