/**
 * Copyright 2023 Hasnae Rehioui
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import * as fs from 'fs';
import { Dirent } from 'fs';
import path from 'path';

const listNestedFiles = (
    directory: string,
    options: ListFilesOptions,
    filteredFiles: Array<string>
) => {
    const entries = fs.readdirSync(directory, { withFileTypes: true });
    for (const entry of entries) {
        const next = path.resolve(directory, entry.name);
        if (entry.isDirectory() && options.directoryFilter(entry)) {
            listNestedFiles(next, options, filteredFiles);
        }
        if (entry.isFile() && options.fileFilter(entry)) {
            filteredFiles.push(next);
        }
    }
};

export interface ListFilesOptions {
    fileFilter: (file: Dirent) => boolean;
    directoryFilter: (file: Dirent) => boolean;
}

const includeAll: ListFilesOptions = {
    fileFilter: () => true,
    directoryFilter: () => true
};

export const listFiles = (
    directory: string,
    options: ListFilesOptions = includeAll
) => {
    if (!fs.statSync(directory).isDirectory()) {
        throw Error(`path ${directory} is not a directory`);
    }
    const filteredFiles: Array<string> = [];
    listNestedFiles(directory, options, filteredFiles);
    return filteredFiles;
};
