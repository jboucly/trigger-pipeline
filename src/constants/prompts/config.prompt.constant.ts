import { Answers } from 'inquirer';

export const ConfigQuestion: Answers[] = [
    {
        name: 'slug',
        type: 'input',
        message: 'Enter slug of your repository',
        validate: (value: string): boolean | string => {
            if (value.length) {
                return true;
            } else {
                return 'Please enter slug of your repository.';
            }
        },
    },
    {
        name: 'workspace',
        type: 'input',
        message: 'Enter workspace of your repository',
        validate: (value: string): boolean | string => {
            if (value.length) {
                return true;
            } else {
                return 'Please enter workspace of your repository.';
            }
        },
    },
    // {
    //     name: 'platform',
    //     type: 'list',
    //     message: 'Select the platform',
    //     choices: [
    //         'Windows',
    //         'MacOS',
    //         'Linux',
    //         'All',
    //     ],
    //     validate: (value: string): boolean | string => {
    //         if (value.length) {
    //             return true;
    //         } else {
    //             return 'Please select the platform.';
    //         }
    //     },
    // },
];

export const ConfigWithCredentialsQuestion: Answers[] = [
    {
        name: 'username',
        type: 'input',
        message: 'Enter your Bitbucket username',
        validate: (value: string): boolean | string => {
            if (value.length) {
                return true;
            } else {
                return 'Please enter your Bitbucket username.';
            }
        },
    },
    {
        name: 'password',
        type: 'input',
        message: 'Enter your Bitbucket password',
        validate: (value: string): boolean | string => {
            if (value.length) {
                return true;
            } else {
                return 'Please enter your Bitbucket password.';
            }
        },
    },
];
