$(document).ready(() => {
    const ds = new Datasource();
    ds.getPrices().then(prices => {
        prices.forEach(price => {
            console.log(`Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }.`);
        });
    }).catch(error => {
        console.err(error);
    });
});

class Datasource {
    getPrices() {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: 'https://static.ngnrs.io/test/prices',
                method: 'get',
                success: function (ds) {
                    const prices = JSON.parse(ds).data.prices.map((price) => {
                        return new Price(price);
                    });
                    resolve(prices)
                },
                error: function (error) {
                    reject(error)
                },
            
            });
        });
    }
}

class Price {
    constructor(price) {
        this.buy = price.buy;
        this.sell = price.sell;
        this.pair = price.pair;
        this.timestamp = price.timestamp;
    }

    mid() {
        return (this.buy + this.sell)/200;
    }

    quote() {
        return this.pair.substring(3);
    }
}
