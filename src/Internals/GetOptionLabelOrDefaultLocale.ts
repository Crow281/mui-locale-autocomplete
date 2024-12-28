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
import { AutocompleteFreeSoloValueMapping } from "@mui/material/useAutocomplete";
import { convertLocaleToString } from "Utils/ConvertLocaleToString";

/**
 * @param getOptionLabel
 * Value of getOptionLabel chosen by user.
 * @returns
 * Parameter getOptionLabel if it has been assigned a value,
 * a suitable default if not.
 *
 * The default will return the string if option is a string
 * or use toLocalizedLabel to convert locale into a suitable translated string.
 */
export function getOptionLabelOrDefaultLocale<FreeSolo>(
    getOptionLabel:
        | ((
              option: Intl.Locale | AutocompleteFreeSoloValueMapping<FreeSolo>,
          ) => string)
        | undefined,
): (
    option: Intl.Locale | AutocompleteFreeSoloValueMapping<FreeSolo>,
) => string {
    //If user decided to override getOptionLabel.
    if (getOptionLabel) {
        //Then just use their value.
        return getOptionLabel;

        //If user did NOT override it.
    } else {
        //Make the default fetch the locale's display name.
        return (
            option: Intl.Locale | AutocompleteFreeSoloValueMapping<FreeSolo>,
        ): string => {
            //If option is just a string.
            if (typeof option === "string") {
                //Then just return that.
                return option;

                //If option is a locale.
            } else {
                //Use toLocalizedLabel to determine
                //what string to represent locale with.
                return convertLocaleToString(option);
            }
        };
    }
}
