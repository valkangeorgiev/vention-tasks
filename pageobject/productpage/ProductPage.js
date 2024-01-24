import BaseForm from "../../framework/BaseForm.js";

import Label from "../../framework/elements/Label.js";

class ProductPage extends BaseForm{

    constructor(){
        super('//span[contains(text(),"Products")]', 'Products page')
        this.poruductTitle = new Label('//span[contains(text(),"Products")]', 'Product title text');   
    }
}
export default ProductPage;
