import { APIClient, Bitbucket } from 'bitbucket';
import { prompt } from 'inquirer';
import { isNil } from 'lodash';
import { ConfigQuestion, ConfigWithCredentialsQuestion } from '../constants/prompts/config.prompt.constant';
import { BitbucketInfo } from '../types/arguments.type';
import { CliService } from './cli.service';

export class BitbucketService {
    private bitbucket: APIClient;
    private bitbucketInfo: BitbucketInfo;

    private async setCredentials(): Promise<void> {
        const usernameFromEnv = process.env.BITBUCKET_USERNAME;
        const passwordFromEnv = process.env.BITBUCKET_PASSWORD;

        if (!isNil(usernameFromEnv) && !isNil(passwordFromEnv)) {
            this.setBitBucketCredentials(usernameFromEnv, passwordFromEnv);
        } else {
            await prompt(ConfigWithCredentialsQuestion)
                .then((result: Record<string, string>): void => {
                    this.setBitBucketCredentials(result.username, result.password);
                })
                .catch((error: unknown) => {
                    CliService.displayError(error);
                });
        }
    }

    private async setConfigs(): Promise<void> {
        await prompt(ConfigQuestion)
            .then((result: Record<string, string>): void => {
                console.log(result);

                this.bitbucketInfo = {
                    slug: result.slug,
                    workspace: result.workspace,
                };
            })
            .catch((error: unknown) => {
                CliService.displayError(error);
            });
    }

    /**
     * @description Set the bitbucket client
     */
    private setBitBucketCredentials(username: string, password: string): void {
        this.bitbucket = new Bitbucket({
            auth: {
                username,
                password,
            },
        });
    }
}
