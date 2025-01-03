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
import Autocomplete from "@mui/material/Autocomplete";
import { ChipTypeMap } from "@mui/material/Chip";
import { getOptionLabelOrDefaultLocale } from "Internals/GetOptionLabelOrDefaultLocale";
import { renderInputOrDefault } from "Internals/RenderInputOrDefault";
import { LocaleAutocompleteProps } from "Widgets/LocaleAutocompleteProps";
import React from "react";

/**
 * Creates an autocomplete widget allowing user to select a locale.
 * @param props
 * @returns
 *
 */
export function LocaleAutocomplete<
    Multiple extends boolean | undefined = false,
    DisableClearable extends boolean | undefined = false,
    FreeSolo extends boolean | undefined = false,
    ChipComponent extends React.ElementType = ChipTypeMap["defaultComponent"],
>(
    props: LocaleAutocompleteProps<
        Multiple,
        DisableClearable,
        FreeSolo,
        ChipComponent
    >,
) {
    //Extract properties specific to class and superclass.
    const { getOptionLabel, renderInput, ...rest } = props;

    //Records the getOptionLabel result should use.
    const getOptionLabelInstance =
        getOptionLabelOrDefaultLocale<FreeSolo>(getOptionLabel);

    //Records the renderInput result should use.
    const renderInputInstance = renderInputOrDefault(renderInput);

    return (
        <Autocomplete
            {...rest}
            getOptionLabel={getOptionLabelInstance}
            renderInput={renderInputInstance}
        />
    );
}
