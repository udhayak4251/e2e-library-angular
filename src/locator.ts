const { by, element } = require("protractor");
export class Elements {
    /**
     * @params 
     * xpath: xpath as input string
     * rootElement: ElementFinder
     * @return
     * return element as ElementFinder
     */
    public getElementByXpath(xpath: string, rootElement?: any) {
        return rootElement? rootElement.element(by.xpath(xpath)): element(by.xpath(xpath));
    }
    /**
     * @params 
     * xpath: xpath as input string
     * rootElement: ElementFinder
     * @return
     * return elements as ElementArrayFinder   
     */
    public getAllElementsByXpath(xpath: string, rootElement?: any) {
        return rootElement? rootElement.element.all(by.xpath(xpath)): element.all(by.xpath(xpath));
    }
    /**
     * @params 
     * css: css as input string
     * rootElement: ElementFinder
     * @return
     * return element as ElementFinder
     */
    public getElementByCss(css: string, rootElement?: any) {
        return rootElement? rootElement.element(by.css(css)): element(by.css(css));
    }
    /**
     * @params 
     * css: css as input string
     * rootElement: ElementFinder
     * @return
     * return element as ElementArrayFinder
     */
    public getAllElementsByCss(css: string, rootElement?: any) {
        return rootElement? rootElement.element.all(by.css(css)): element.all(by.css(css));
    }
        /**
     * @params 
     * tagName: tag name as input string
     * rootElement: ElementFinder
     * @return
     * return element as ElementFinder
     */
    public getElementByTagName(tagName: string, rootElement?: any) {
        return rootElement? rootElement.element(by.tagName(tagName)): element(by.tagName(tagName));
    }
    /**
     * @params 
     * tagName: tag name as input string
     * rootElement: ElementFinder
     * @return
     * return element as ElementArrayFinder
     */
    public getAllElementsByTagName(tagName: string, rootElement?: any) {
        return rootElement? rootElement.element.all(by.tagName(tagName)): element.all(by.tagName(tagName));
    }
}

