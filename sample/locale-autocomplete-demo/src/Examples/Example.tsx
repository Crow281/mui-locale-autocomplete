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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { ExampleProps } from "Examples/ExampleProps";
import { SourceCode } from "Examples/SourceCode";
import React from "react";
import { CodeBlock } from "react-code-blocks";

/**
 *
 * @param sourceCode
 * Object containing source code to display.
 * @returns
 * A React Node representing the given source code.
 */
function createSourceNode(sourceCode: SourceCode): React.ReactNode {
    return (
        <Accordion key={sourceCode.fileName}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                {sourceCode.fileName} ({sourceCode.language})
            </AccordionSummary>
            <AccordionDetails>
                <CodeBlock
                    text={sourceCode.code}
                    language={sourceCode.language}
                    showLineNumbers={true}
                />
            </AccordionDetails>
        </Accordion>
    );
}

/**
 * Displays the example and the source behind it.
 */
export function Example(props: ExampleProps): React.JSX.Element {
    //Fetch desired properties.
    const { children, sourceCode } = props;

    //Displays source code of the example.
    let sourceSection: React.ReactNode;

    //If we have any source code.
    if (sourceCode) {
        //Array containing source code.
        const accordions: React.ReactNode[] = [];

        //If there is more than 1 source code.
        if (Array.isArray(sourceCode)) {
            //Create a node for each source.
            sourceCode.forEach((sourceCodeElement: SourceCode): void => {
                accordions.push(createSourceNode(sourceCodeElement));
            });

            //If there is only one source code.
        } else {
            //We can just create the single item for it.
            accordions.push(createSourceNode(sourceCode));
        }

        //Create the section displaying source code.
        sourceSection = (
            <div>
                <h2>Source Code</h2>
                <div
                    style={{
                        textAlign: "left",
                    }}
                >
                    {accordions}
                </div>
            </div>
        );
    }

    return (
        <div>
            <h2>Example</h2>
            <div
                style={{
                    border: "1px solid black",
                    padding: "3em",
                }}
            >
                {children}
            </div>
            {sourceSection}
        </div>
    );
}
