var mock = require("../../mocks/TestData/locators")

describe("Movado", () => {

    // after(() => {
    //     brow
    //     console.log("after1");
    // })

    it("HomePage Pop up handeled", () => {
        //  browser.pause(5000);

        browser.click(mock.continuePopup);


        browser.pause(5000);
        console.log("Continue PopUp is handeled")

    });

    // it("Category is selected", () => {
    //     browser.pause(5000);

    //     browser.moveTo("//a[@id='shop-watches']");

    //     browser.click(mock.mens_category);

    //     browser.pause(5000);
    //     console.log("Category is selected")

    // });

    it("Directly land on Category page", () => {
        browser.url("https://storefront:movado123@dev13-na-movadogroup.demandware.net/s/MovadoUS/en_US/shop-watches/mens-designs/");


        browser.pause(5000);
        console.log("Landed directly on Category page")

        browser.click(mock.thirdProduct);

    });
    it("Landed PDP Page", () => {

        browser.click(mock.addToCartButton);
        console.log("Product added in the cart");
        browser.pause(3000)
        browser.click(mock.conitnueCheckout);
        browser.pause(3000)

    });

    it("Landed on Cart Page", () => {

        console.log("User landed on cart page");
        browser.pause(3000)
        browser.click(mock.checkoutButton);
        browser.pause(3000)
        browser.click(mock.guestCheckout);

    });

    it("Landed on Shipping Page", () => {

        console.log("User landed on Shipping page");
        browser.pause(6000)
        browser.setValue(mock.firstName,"Adi")
        browser.pause(5000)
        browser.setValue(mock.lastName,"Raj")
        browser.pause(5000)
        browser.setValue(mock.addressLine1,"301 W 2nd Street")
        browser.pause(5000)
        browser.selectByValue(mock.stateDropdown,"AZ")
        browser.pause(5000)
        browser.setValue(mock.city,"Austin")
        browser.pause(2000)
        browser.setValue(mock.zipcode,"78701")
        browser.setValue(mock.phoneNumber,"222222222")
        console.log("Shipping Address Entered")
        browser.click(mock.nextPaymentButton)
        browser.pause(3000)

    });


    before(() => {
        browser.url('https://storefront:movado123@dev13-na-movadogroup.demandware.net/s/MovadoUS/en_US/home');
        browser.pause(3000);
        console.log("URL Lanuched");
    })
});