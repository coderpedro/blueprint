/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

const { generateIsomorphicTests } = require("@blueprintjs/test-commons");
const React = require("react");
const Table = require("../dist");

const customProps = {
    ResizeHandle: {
        // needs at least one handler or it returns undefined
        onDoubleClick: () => undefined,
    },
};

const classNameChildList = [
    "CopyCellsMenuItem",
    "ResizeHandle"
]

const skipList = [
    // Pass-through renders
    "DragSelectable",
    "Draggable",
]


describe("Table isomorphic rendering", () => {
    generateIsomorphicTests(
        Table,
        customProps,
        {},
        skipList,
        classNameChildList
    );
});
