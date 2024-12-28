import{r as s,j as e}from"./main-ONb5SYou.js";import{L as i,E as r}from"./index-IQ5zIwXm.js";import"./index-D0yY_gRN.js";function u(){const[l,c]=s.useState("Null"),a=[new Intl.Locale("en"),new Intl.Locale("en-GB"),new Intl.Locale("en-US"),new Intl.Locale("es")],n=(m,t)=>{let o;t?o=t.baseName:o="Null",c(o)};return e.jsxs("div",{children:[e.jsx(i,{options:a,onChange:n}),e.jsxs("div",{children:["Selected Locale: ",l]})]})}const d=`import { LocaleAutocomplete } from "@crow281/mui-locale-autocomplete";
import { useState } from "react";

/**
 * Displays LocaleAutocomplete in action.
 */
export function LocaleAutocompleteDemo(): JSX.Element {
    //Currently selected locale.
    const [selectedLocale, setSelectedLocale] = useState("Null");

    //List of locales user can pick from.
    const locales: Intl.Locale[] = [
        new Intl.Locale("en"),
        new Intl.Locale("en-GB"),
        new Intl.Locale("en-US"),
        new Intl.Locale("es"),
    ];

    //Function called whenever locale is changed.
    const onChange = (
        event: React.SyntheticEvent<Element, Event>,
        value: Intl.Locale | null,
    ): void => {
        //Records string value of locale.
        let localeString: string;

        //Update currently selected locale.
        //If a locale was selected.
        if (value) {
            //Convert to string.
            localeString = value.baseName;

            //If nothing was selected.
        } else {
            //Tell user selected locale is null.
            localeString = "Null";
        }

        //Update the selected locale.
        setSelectedLocale(localeString);
    };

    return (
        <div>
            <LocaleAutocomplete options={locales} onChange={onChange} />
            <div>Selected Locale: {selectedLocale}</div>
        </div>
    );
}
`;function h(){const l=[{fileName:"LocaleAutocompleteDemo.tsx",language:"typescript",code:d}];return e.jsxs(r,{sourceCode:l,children:[e.jsx("p",{children:"LocaleAutocomplete is built over Material UI's Autocomplete. It allows you to select from an array of Intl.Locale objects."}),e.jsx("p",{children:"You can do what you want with the selected locale inside of LocaleAutocomplete's onChange function."}),e.jsx(u,{})]})}export{h as default};
