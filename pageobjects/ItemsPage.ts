import Page from './page';
import path from 'path';

class ItemsPage extends Page {

    //LOCATORS.

    //File Upload Input.
    public get fileUploadInp() {
        return $('//input[@id="inputImage"]');
    }

    //Item Description.
    public get imageTxt() {
        return $('[name="text"]');
    }

    //Create Item button.
    public get createItemBtn() {
        return $('//button[text()="Create Item"]');
    }

    //Created item text.
    public get createdText() {
        return $('//li[@class="media ng-scope ui-sortable-handle"]//p[text()="Sample Image Text"]');
    }

    //Edit button on first item.
    public get editBtnFirst() {
        return $('(//li[@class="media ng-scope ui-sortable-handle"])[1]//button[text()="Edit"]');
    }

    //Edited item text.
    public get editedText() {
        return $('//li[@class="media ng-scope ui-sortable-handle"]//p[text()="Edited text"]');
    }

    //Update Item button.
    public get updateItemBtn() {
        return $('//button[text()="Update Item"]');
    }

    //Delete button for created item.
    public get deleteBtn() {
        return $('//p[text()="Sample Image Text"]/ancestor::div[@class="media-body"]//button[text()="Delete"]');
    }

    //Confirm delete button for created item.
    public get confirmDeleteBtn() {
        return $('//div[@class="modal-content"]//button[text()="Yes, delete it!"]');
    }

    //METHODS.

    //Navigates to main page.
    public open() {
        return super.open();
    }

    //Enters a new image.
    async enterNewImage() {
        const path = require('path');
        const filePath = path.join(__dirname, 'images/spaceExample.jpg');
        await this.fileUploadInp.setValue(filePath.replace('\\pageobjects', ''));
    }

    //Enters a description for the item.
    async enterImageText(imageText: string) {
        await this.imageTxt.setValue('');
        await this.imageTxt.setValue(imageText);
    }

    //Clicks Create Item button.
    async clickCreateItem() {
        await this.createItemBtn.click();
    }

    //Validates element is created.
    async validateCreateItem() {
        await expect(this.createdText).toBeDisplayed();
    }

    //Clicks the Edit button on the first item.
    async clickEditBtnFirst() {
        await this.editBtnFirst.click();
    }

    //Validates item is edited.
    async validateEditedItem() {
        await expect(this.editedText).toBeDisplayed();
    }

    //Clicks Update Item button.
    async clickUpdateItem() {
        await this.updateItemBtn.click();
    }

    //Clicks Delete Item button.
    async clickDeleteItem() {
        await this.deleteBtn.click();
    }

    //Clicks Confirm delete Item button.
    async clickConfirmDeleteItem() {
        await this.confirmDeleteBtn.click();
    }

    //Validates item is deleted.
    async validateDeletedItem() {
        await expect(this.createdText).not.toBeDisplayed();
    }

    //Validates the max long in description.
    async validateDescAttr(attr: string) {
        const maxLong = await this.imageTxt.getAttribute(attr);
        console.log("Description max length is: " + maxLong);
    }

    //Validates the max long in description.
    async searchItem(itemText: string) {
        const item = $('//li[@class="media ng-scope ui-sortable-handle"]//p[text()="' + itemText + '"]');
        await expect(item).toBeDisplayed();
    }
}

export default new ItemsPage();