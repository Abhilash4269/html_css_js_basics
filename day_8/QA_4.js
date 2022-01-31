//write a class to calculate uber price.


class Uber {

    constructor(basePrice = 18, trip) {
        this.trip = trip
        this.basePrice = basePrice
    }



    getFare() {
        let fare
        return fare = `The fare is... ${(this.trip)*(this.basePrice)}/- Rupees`
    }
}
var s1 = new Uber(18, 14)
console.log(s1.getFare())