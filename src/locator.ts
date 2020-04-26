import { by, element, ElementFinder } from "protractor";
export class CommonLocators {
    /**
     * @params 
     * xpath: xpath as input string
     * rootElement: ElementFinder
     */
    public getElementByXpath(xpath: string, rootElement?: ElementFinder) {
        return rootElement? rootElement.element(by.xpath(xpath)): element(by.xpath(xpath));
    }
}