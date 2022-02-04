// Copyright: Ankitects Pty Ltd and contributors
// License: GNU AGPL, version 3 or later; http://www.gnu.org/licenses/agpl.html
import NoteCreator from "./NoteCreator.svelte";
import { editorModules } from "./base";
import { globalExport } from "../lib/globals";
import { setupI18n } from "../lib/i18n";
import { uiResolve } from "../lib/ui";

async function setupNoteCreator(): Promise<void> {
    await setupI18n({ modules: editorModules });

    new NoteCreator({
        target: document.body,
        props: { uiResolve },
    });
}

setupNoteCreator();

import * as base from "./base";
globalExport(base);