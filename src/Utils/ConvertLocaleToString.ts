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
 * Creates a localized string representing the given locale.
 * @param locale
 * Locale we want a localized label for.
 * @returns
 * A string representing a given locale, localized to its own language.
 *
 * For example, locale "en" would become "English",
 * locale "en-US" would become "English-United States",
 * locale "es" would become "Spanish".
 */
export function convertLocaleToString(locale: Intl.Locale): string {
    //If this locale is being used to represent cimode (just shows the localization key).
    if (locale.baseName === "cimode") {
        //Then return that without translating.
        return "cimode";
    }

    //Object that fetches the language name of this locale in its own language.
    //For example,
    //"en" would become "English",
    //"es" would become "Español",
    //etc.
    const languageDisplayName: Intl.DisplayNames = new Intl.DisplayNames(
        [locale],
        {
            type: "language",
            style: "long",
        },
    );

    //Fetch the language name of this locale in its own language.
    const language: string | undefined = languageDisplayName.of(
        locale.language,
    );

    //If locale does not have a language string.
    if (!language) {
        //Return its basic value.
        return locale.baseName;
    }

    //If this locale has a region.
    if (locale.region) {
        //Object that fetches the region name of this locale
        //in its own language.
        //For example,
        //"en-US" would become "United States".
        const regionDisplayName: Intl.DisplayNames = new Intl.DisplayNames(
            [locale],
            {
                type: "region",
                style: "long",
            },
        );

        //Fetch the region name of this locale in its own language.
        const region = regionDisplayName.of(locale.region);

        //Return display name of this locale.
        return language + "-" + region;

        //If this locale does NOT have a region.
    } else {
        //Then just return the language.
        return language;
    }
}
