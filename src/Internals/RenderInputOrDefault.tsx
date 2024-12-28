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
import { AutocompleteRenderInputParams } from "@mui/material/Autocomplete";
import { LocaleTextField } from "Internals/LocaleTextField";
import React from "react";

/**
 * @param renderInput
 * Value of renderInput chosen by user.
 * @returns
 * Parameter renderInput if it has been assigned a value,
 * a suitable default if not.
 *
 * The default will return LocaleTextField,
 * a customized TextField with some decorations.
 */
export function renderInputOrDefault(
    renderInput:
        | ((params: AutocompleteRenderInputParams) => React.ReactNode)
        | undefined,
): (params: AutocompleteRenderInputParams) => React.ReactNode {
    //If user did NOT override renderInput.
    if (!renderInput) {
        //Then create the default element.
        renderInput = (
            props: AutocompleteRenderInputParams,
        ): React.ReactNode => {
            return <LocaleTextField {...props} />;
        };
    }

    return renderInput;
}
