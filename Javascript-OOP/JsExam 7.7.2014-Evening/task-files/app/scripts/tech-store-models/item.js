define(function () {
    var Item = (function () {
        function validateItemType(type) {
            if(type !== 'accessory' &&
                    type !== 'smart-phone'  &&
                    type !== 'notebook'  &&
                    type !== 'pc'  &&
                    type !== 'tablet') {
                throw {
                    message: 'invalid item type'
                };
            }
            return type;
        }

        function validateItemName(name) {
            if (name.length < 6 || name.length > 40) {
                throw {
                    message: 'length of item name has to be between 6 and 40 symbols'
                }
            }
            return name;
        }

        function validateItemPrice(price) {
            if (price < 0) {
                throw {
                    message: 'price must be a positive (decimal) number'
                }
            }
            return price;
        }

        function Item(type, name, price) {

            this.type = validateItemType(type);
            this.name = validateItemName(name);
            this.price = validateItemPrice(price);
        }

        return Item;
    })();
    return Item;
});