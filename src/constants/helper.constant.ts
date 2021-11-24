import { cyanBright, underline, whiteBright } from 'chalk';

export const DisplayHelper = (): void => {
    console.info(`${underline(cyanBright('Usage :'))}
            ${whiteBright(`
            $ trigger-pipeline                    # TODO
            `)}
        `);

    process.exit(0);
};
