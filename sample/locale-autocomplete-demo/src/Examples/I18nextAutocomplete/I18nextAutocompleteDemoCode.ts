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
export const i18nextAutocompleteDemoCode: string = `import { I18nextAutocomplete } from "@crow281/mui-locale-autocomplete";
import { useTranslation } from "react-i18next";

/**
 *
 * @returns
 * Widget demonstrating I18nextAutocomplete
 */
export function I18nextAutocompleteDemo() {
    //Fetch localization.
    const { t, i18n } = useTranslation();

    return (
        <div>
            <I18nextAutocomplete />
            <br />
            <div
                style={{
                    textAlign: "left",
                }}
            >
                Selected Locale: {i18n.language}
            </div>
            <table
                style={{
                    border: "1px solid black",
                }}
            >
                <thead>
                    <tr>
                        <th>Localization Key</th>
                        <th>Translated Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>"example.goodbye"</td>
                        <td>{t("example.goodbye")}</td>
                    </tr>
                    <tr>
                        <td>"example.goodDay"</td>
                        <td>{t("example.goodDay")}</td>
                    </tr>
                    <tr>
                        <td>"example.helloWorld"</td>
                        <td>{t("example.helloWorld")}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
`;
