// You can use this class from any test or page within the framework

class Utils {
    static async click(element: WebdriverIO.Element, elementName: string) {
        await element.waitForDisplayed();
        await element.click();
        console.log(`--- Click on: ${elementName} Success`);
    }

    static async waitForExist(
        element: WebdriverIO.Element,
        elementName: string
    ) {
        await element.waitForExist();
        console.log(
            `--- The ${elementName} exist on the page: ${await element.isExisting()}`
        );
    }
}

export default Utils;
