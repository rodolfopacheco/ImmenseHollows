import { Given, When, Then } from '@wdio/cucumber-framework';
import ItemsPage from '../pageobjects/ItemsPage';

Given(/^I Navigate to Stranger List page$/, async () => {
    await ItemsPage.open();
});

Then(/^I Add a New Item$/, async () => {
    await ItemsPage.enterNewImage();
    await ItemsPage.enterImageText("Sample Image Text");
    await ItemsPage.clickCreateItem();
    await ItemsPage.validateCreateItem();
});

Then(/^I Edit Another Existing Item$/, async () => {
    await ItemsPage.clickEditBtnFirst();
    await ItemsPage.enterImageText("Edited text");
    await ItemsPage.clickUpdateItem();
    await ItemsPage.validateEditedItem();
});

Then(/^I Delete an Existing Item$/, async () => {
    await ItemsPage.clickDeleteItem();
    await ItemsPage.clickConfirmDeleteItem();
    await ItemsPage.validateDeletedItem();
});

Then(/^I Validate Description Max Length$/, async () => {
    await ItemsPage.validateDescAttr("ng-maxlength");
});

Then(/^I Search for an Specific Item$/, async () => {
    await ItemsPage.searchItem("Creators: Matt Duffer, Ross Duffer");
});