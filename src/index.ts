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
