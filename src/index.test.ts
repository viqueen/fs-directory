import { listFiles, ListFilesOptions } from './index';

test('lists javascript files in this project:', () => {
    const options: ListFilesOptions = {
        fileFilter: (entry) => entry.name.endsWith('.js'),
        directoryFilter: (entry) =>
            !['node_modules', 'coverage'].includes(entry.name)
    };
    const files = listFiles(process.cwd(), options);
    expect(files.length).toBe(2);
});
