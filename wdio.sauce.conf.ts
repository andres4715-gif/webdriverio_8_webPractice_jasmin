import { config as sharedConfig } from "./wdio.shared.conf.js";

export const config: WebdriverIO.Config = {
    ...sharedConfig,
    ...{
        user: "oauth-andres4715-64ce6",
        key: "0379f61c-4e73-488f-ae5f-27906539a1b4",
        region: "us",
        services: ["sauce"],
        capabilities: [
            {
                maxInstances: 5,
                browserName: "firefox",
                browserVersion: "latest",
                platformName: "Windows 10",
                "sauce:options": {
                    build: `Build ${Math.ceil(Date.now() / 1000)}`,
                },
            },
        ],
    },
};
