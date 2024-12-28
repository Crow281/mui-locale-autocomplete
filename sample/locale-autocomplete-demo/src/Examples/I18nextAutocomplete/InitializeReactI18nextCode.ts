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
 * Typescript code used by react initialization.
 */
export const initializeReactI18nextCode: string = `/**
 * This file initializes i18next's internationalization.
 *
 * It uses Vite's import.meta.glob to get the list of locales
 * from the list of folder names inside of localeBasePath.
 * It then passes them to configure the i18next loader.
 *
 * If you want to change the folder that this points to,
 * follow the instructions in the comments above localeBasePath.
 */
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector/cjs";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next";

//Base path of all locale assets.
//If you need to change this, use a replace all operation,
//exchanging the current string value of localeBasePath with the new one.
//This is necessary because dynamic import and import.meta.glob
//require the base path to be a string literal.
const localeBasePath = "./Locale/";

/**
 *
 * @returns
 * List of all locales this app supports.
 */
function getLocales(): string[] {
    //Every supported locale will have a "translation.json" file in it.
    //Get the list of all such files.
    const translationPaths: Record<string, () => Promise<unknown>> =
        import.meta.glob("./Locale/*/translation.json");

    //Position in the translationPath string that the locale starts in,
    //which is directly after localeBasePath.
    const localeStartPosition = localeBasePath.length;

    //Array of locales we found.
    const locales: string[] = [];

    //Iterate all of the translation.json paths.
    for (const translationPath in translationPaths) {
        //Parse the string and add to the result.
        //The strings will take the form \`\${localeBasePath}/*/translation.json\`.
        //What we want is the string represented by the star.

        //Find the '/' character after the locale, marking its end.
        //Begin search from locale's starting position.
        const localeEndPosition = translationPath.indexOf(
            "/",
            localeStartPosition,
        );

        //Extract the locale.
        const locale = translationPath.substring(
            localeStartPosition,
            localeEndPosition,
        );

        //Save to the array of locales.
        locales.push(locale);
    }

    return locales;
}

/**
 * Returns a promise that will import the desired localization file.
 * @param locale
 * Locale being imported.
 * @param namespace
 * Namespace of the locale being imported.
 * @returns
 * A promise that will return the module for the given
 * locale namespace.
 */
function importLocalizationFile(locale: string, namespace: string) {
    return import(\`./Locale/\${locale}/\${namespace}.json\`);
}

//Create a backend that imports from the locales folder.
const backend = resourcesToBackend(importLocalizationFile);

//Fetch the list of supported locales.
const locales: string[] = getLocales();

//Give internationalization the abiity to load the localization files,
//hand it an object to decide which language we should be using,
//pass it to ReactJs,
//and start it up.
i18n.use(backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        debug: import.meta.env.MODE === "development",
        supportedLngs: locales,
    });

//Load non-default namespaces.
i18n.loadNamespaces([], function (error, t) {
    //If anything went wrong, print what it was.
    if (error !== undefined) {
        console.error(error);
    }
});
`;
