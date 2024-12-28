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
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { TabPanel } from "Widgets/TabPanel";
import { TabViewProps } from "Widgets/TabViewProps";
import React from "react";

/**
 *
 * @param labels
 * Labels for each of the tabs we want.
 * @returns
 * Array of tabs created from labels.
 */
function createTabs(labels: string[]): JSX.Element[] {
    //Create array to hold all the tabs.
    const tabs: JSX.Element[] = new Array(labels.length);

    //Create each of the tabs.
    for (let index = 0; index < labels.length; ++index) {
        //Make tab display the corresponding label.
        tabs[index] = <Tab label={labels[index]} />;
    }

    return tabs;
}

/**
 *
 * @param children
 * List of items to put into tab panes.
 * @param tabIndex
 * Currently selected tab panel.
 * @returns
 * Array of panels holding content for each tab.
 */
function createPanels(
    children: undefined | null | JSX.Element | JSX.Element[],
    tabIndex: number,
): JSX.Element[] {
    //Return an empty array if no children.
    if (!children) {
        return [];
    }

    //If there are multiple elements.
    if (Array.isArray(children)) {
        //Create array to hold all the tab panels.
        const panels: JSX.Element[] = new Array(children.length);

        //Create each of the panels.
        for (let index = 0; index < children.length; ++index) {
            //Create panel to hold the corresponding child.
            panels[index] = (
                <TabPanel tabIndex={index} selectedIndex={tabIndex}>
                    {children[index]}
                </TabPanel>
            );
        }

        return panels;

        //If there is only 1 element.
    } else {
        //Wrap in 1 tab panel and return array.
        return [
            <TabPanel tabIndex={0} selectedIndex={tabIndex}>
                {children}
            </TabPanel>,
        ];
    }
}

/**
 * Creates a Tab container.
 */
export function TabView(props: TabViewProps): JSX.Element {
    //Fetch desired properties.
    const { labels, children } = props;

    //Currently selected tab.
    const [tabIndex, setTabIndex] = React.useState(0);

    //Allows tab to update tab index.
    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabIndex(newValue);
    };

    //Progress animation placed in exact middle of window.
    const circularProgress = (
        <CircularProgress
            style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
            }}
        />
    );

    return (
        <Box>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs value={tabIndex} onChange={handleTabChange}>
                    {createTabs(labels)}
                </Tabs>
            </Box>
            <React.Suspense fallback={circularProgress}>
                {createPanels(children, tabIndex)}
            </React.Suspense>
        </Box>
    );
}
