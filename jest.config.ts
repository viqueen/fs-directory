// noinspection JSUnusedGlobalSymbols

import type { Config } from 'jest';

export default async (): Promise<Config> => {
    return {
        collectCoverage: true,
        coverageDirectory: 'coverage',
        preset: 'ts-jest',
        testEnvironment: 'node',
        roots: ['<rootDir>/src'],
        testMatch: ['**/?(*.)+(spec|test).+(ts)'],
        verbose: true
    };
};
