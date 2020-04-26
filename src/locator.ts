const { by, element } =  require('protractor');
export class CommonElement {
    /**
     * @params 
     * xpath: xpath as input string
     * rootElement: ElementFinder
     */
    public getElementByXpath(xpath: string, rootElement?: any) {
        return rootElement? rootElement.element(by.xpath(xpath)): element(by.xpath(xpath));
    }
}

export class CommonElements {
    /**
     * @params 
     * xpath: xpath as input string
     * rootElement: ElementFinder
     */
    public getAllElementsByXpath(xpath: string, rootElement?: any) {
        return rootElement? rootElement.element.all(by.xpath(xpath)): element.all(by.xpath(xpath));
    }
}