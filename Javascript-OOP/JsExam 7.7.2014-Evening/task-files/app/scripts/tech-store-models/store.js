define(['tech-store-models/item'] ,function (Item) {
    var Store = (function () {

        function Store(name) {
            this.name = name;
            this._items = [];
        }

        Store.prototype.addItem = function (item) {
            if(item instanceof Item){
                this._items.push(item);
                return this;
            }
            else {
                throw  {
                    message: 'item needs to be instance of Object Item'
                }
            }
        };

        Store.prototype.getAll = function () {
            sortByKey(this._items, 'name');
            return this._items.slice(0);
        };



        Store.prototype.getSmartPhones = function () {
            var filteredSmartPhones;

            filteredSmartPhones = filterByType(this._items,'smart-phone');
            sortByKey(filteredSmartPhones, 'name');

            return filteredSmartPhones;
        };

        Store.prototype.getMobiles = function () {

            var filteredMobiles;

            filteredMobiles = filterByType(this._items,'smart-phone', 'tablet');
            sortByKey(filteredMobiles, 'name');

            return filteredMobiles;
        };

        Store.prototype.getComputers = function () {
            var filteredComputers;

            filteredComputers = filterByType(this._items,'pc', 'notebook');
            sortByKey(filteredComputers, 'name');

            return filteredComputers;
        };

        Store.prototype.filterItemsByType = function (type) {
            var filteredByType;

            filteredByType = filterByType(this._items, type);
            sortByKey(filteredByType, 'name');

            return filteredByType;
        };

        Store.prototype.filterItemsByName = function (name) {
            var filteredByName;

            filteredByName = filterByType(this._items, name);
            sortByKey(filteredByName, 'name');

            return filteredByName;
        };

        Store.prototype.filterItemsByPrice = function (sortInfo) {
            var filteredByPrice,
                validatedSortInfo = sortInfo || {min: undefined, max: undefined};

            filteredByPrice = filterByPrice(this._items, validatedSortInfo);
            sortByKey(filteredByPrice, 'price');

            return filteredByPrice;
        };

        Store.prototype.countItemsByType = function () {
            var items = [],
                i,
                len,
                currentItemType;

            for (i = 0, len = this._items.length; i < len; i += 1) {
                currentItemType = this._items[i].type;
                if(!items[currentItemType]) {
                    items[currentItemType] = 1;
                }
                items[currentItemType] += 1;
            }

            return items;
        };

        //sorting starting a->z
        function sortByKey(array, key) {
            return array.sort(function(a, b) {
                var x = a[key]; var y = b[key];
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            });
        }

        //universal for names and types
        function filterByType(array ,firstType, secondType) {
            var typeOne = firstType || '',
                typeTwo = secondType || '',
                filteredElements = [],
                returnFilteredElements,
                currentElement,
                i,
                len;

            for (i = 0, len = array.length; i < len; i += 1) {
                currentElement = array[i];

                if(currentElement.type === typeOne ||
                    currentElement.type === typeTwo ||
                    (currentElement.name.toLowerCase().indexOf(firstType.toLowerCase()) !== -1)){ // sorry it had to be case insensitive search and i was a little out of time
                    filteredElements.push(currentElement);
                }
            }

            returnFilteredElements = filteredElements.slice(0);
            return returnFilteredElements;
        }

        function filterByPrice(array ,sortInfo) {

            var minPrice = sortInfo.min || 0,
                maxPrice = sortInfo.max ||  1.7976931348623157E+10308,// +infinity in javascript,
                filteredElements = [],
                returnFilteredElements,
                currentElement,
                i,
                len;

            for (i = 0, len = array.length; i < len; i += 1) {
                currentElement = array[i];

                if (currentElement.price >= minPrice &&
                    currentElement.price <= maxPrice) {
                    filteredElements.push(currentElement);
                }
            }

            returnFilteredElements = filteredElements.slice(0);
            return returnFilteredElements;
        }

        return Store;
    })();
    return Store;
});