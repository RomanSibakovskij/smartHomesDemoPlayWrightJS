"use strict"

import {BasePage} from "./utilities/base.page.mjs";

class GeneralPage extends BasePage{

    constructor(page) {
        super(page);

        //general page web elements (all pages have them)
        //header
        this._headerHomePageTitle = page.locator("//div[@id='root']//h1[@class='p-1 text-3xl bg-gradient-to-r from-blue-950 to-violet-800 bg-clip-text text-transparent']");
        //navbar (list elements)
        this._headerNavbarBtnElements = page.locator("//div[@id='root']/div[1]//button");

    }

    //click set header navbar button method
    async clickSetHeaderNavbarBtn(index){await this._headerNavbarBtnElements.nth(index).click();}

    //general page text element getters
    //header
    async getHeaderHomePageTitle(){return this._headerHomePageTitle.innerText();}
    //navbar (list elements)
    async getHeaderHomePageNavbarBtnText(){
        const elements = await this._headerNavbarBtnElements.all();
        return await Promise.all(
            elements.map(async (element) => {
                const text = await element.innerText();
                return text.trim();
            })
        );
    }

    //general page web element getters
    //header
    get headerHomePageTitle(){return this._headerHomePageTitle;}
    //navbar (list elements)
    get headerNavbarBtnElement(){return this._headerNavbarBtnElements;}

}
export {GeneralPage};