import { Page } from "@playwright/test";

export class ScreenCapture{
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async screencapture(testName: string, numberCapture: number){
        let captureDetail: string;
        let pathCapture: string;

        if (numberCapture < 10){
            captureDetail = "0" + String(numberCapture);
        } else {
            captureDetail = String(numberCapture);
        }

        pathCapture = "test-results/" + testName + "/capture_" + captureDetail + ".png" 
        await this.page.screenshot({path: pathCapture})

    }

}