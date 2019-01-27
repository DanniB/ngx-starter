import { browser, by, element } from "protractor";

export class StarterPage {
    navigateTo() {
        return browser.get("/");
    }

    getParagraphText() {
        return element(by.css("sg-app-root h1")).getText();
    }
}
