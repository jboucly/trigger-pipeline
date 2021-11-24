import Minimist from 'minimist';
import { DisplayHelper } from './src/constants/helper.constant';
import { CliService } from './src/services/cli.service';

export class Cli {
    private args: Minimist.ParsedArgs;

    constructor() {
        this.args = Minimist(process.argv.slice(2), {
            '--': true,
        });

        this.argsSystem();
    }

    /**
     * @description Run the right commands based on the arguments
     */
    private async argsSystem(): Promise<void> {
        CliService.showBanner();
        console.log(this.args);

        await this.selectPipelineRunner();
    }

    private async selectPipelineRunner(): Promise<void> {
        Object.keys(this.args).forEach((key: string): void => {
            if (key === 'help' && this.args[key] === true) {
                DisplayHelper();
            } else if (key === 'bitbucket' && this.args[key] === true) {
                // TODO: Run bitbucket pipeline
            }
        });
    }

   
}

new Cli();
