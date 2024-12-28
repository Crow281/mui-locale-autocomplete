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
import {
    AutocompleteChangeDetails,
    AutocompleteChangeReason,
    AutocompleteValue,
} from "@mui/material/Autocomplete";
import { ChipTypeMap } from "@mui/material/Chip";
import { convertI18nextLanguagesToLocales } from "Utils/ConvertI18nextLanguagesToLocales";
import { I18nextAutocompleteProps } from "Widgets/I18nextAutocompleteProps";
import { LocaleAutocomplete } from "Widgets/LocaleAutocomplete";
import React from "react";
import { useTranslation } from "react-i18next";

/**
 * Creates an autocomplete widget binding to react-i18next,
 * allowing user to select a locale.
 * @param props
 * @returns
 */
export function I18nextAutocomplete<
    FreeSolo extends boolean | undefined = false,
    ChipComponent extends React.ElementType = ChipTypeMap["defaultComponent"],
>(props: I18nextAutocompleteProps<FreeSolo, ChipComponent>) {
    //Extract properties specific to class and superclass.
    const { onChange, ...rest } = props;

    //i18n instance this component will use.
    const { i18n } = useTranslation();

    //Create the list of locales user can pick from.
    const options: Intl.Locale[] = convertI18nextLanguagesToLocales(
        i18n.options.supportedLngs,
    );

    //Fetch the current language.
    const language = i18n.language;

    //Fetch the currently selected option.
    const selectedOption: Intl.Locale | undefined = options.find(
        (value: Intl.Locale): boolean => {
            return value.baseName === language;
        },
    );

    //onChange this will use.
    //Then we just need to update i18n.
    const onChangeInstance = (
        event: React.SyntheticEvent<Element, Event>,
        value: AutocompleteValue<Intl.Locale, false, true, FreeSolo>,
        reason: AutocompleteChangeReason,
        details?: AutocompleteChangeDetails<Intl.Locale>,
    ): void => {
        //A locale must be selected. If none is, ignore it.
        if (value instanceof Intl.Locale) {
            //Pass the selected locale to i18n.
            i18n.changeLanguage(value.baseName);
        }

        //Fire user's listener if any.
        if (onChange) {
            onChange(event, value, reason, details);
        }
    };

    return (
        <LocaleAutocomplete
            options={options}
            value={selectedOption}
            onChange={onChangeInstance}
            {...rest}
        />
    );
}
