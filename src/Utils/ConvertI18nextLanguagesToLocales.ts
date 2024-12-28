/*
 * The MIT License
 *
 * Copyright 2023 Crow281.
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
 *
 * @param languages
 * List of language strings from i18n.options.supportedLngs.
 * @returns
 * An array of Intl.Locale objects created from I18next's language data.
 */
export function convertI18nextLanguagesToLocales(
    languages?: false | readonly string[],
): Intl.Locale[] {
    //If user passed in items.
    if (languages) {
        //Convert them to locales.
        //Allocate the result array.
        const locales: Intl.Locale[] = new Array(languages.length);

        //Iterate languages and create locale objects from them.
        for (let index = 0; index < languages.length; ++index) {
            locales[index] = new Intl.Locale(languages[index]);
        }

        return locales;

        //If user passed no items.
    } else {
        //Return an empty array.
        return [];
    }
}
