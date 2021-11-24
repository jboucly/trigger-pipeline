import { red } from 'chalk';
import clear from 'clear';
import { textSync } from 'figlet';

export class CliService {
    private static clearConsole = clear;

    /**
     * @description Show package name and clear console
     */
    public static showBanner(): void {
        this.clearConsole();

        console.info(
            red(
                textSync('Trigger Pipeline', {
                    horizontalLayout: 'default',
                })
            )
        );
    }

    /**
     * @description Display error in console
     */
    public static displayError(error: unknown): void {
        console.error(red('[ERROR] - Please try again'));
        console.error(red(error));
    }
}
