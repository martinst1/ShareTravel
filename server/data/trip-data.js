module.exports = function (models) {
    let {Trip} = models;

    return {
        createTrip(tripToBeCreated){

            let username = tripToBeCreated.username,
                from = tripToBeCreated.from,
                to = tripToBeCreated.to,
                date = tripToBeCreated.date;

            var trip = new Trip({
                username,
                from,
                to,
                date
            });

            return new Promise((resolve, reject) => {
                trip.save((err) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(trip);
                });
            });
        },
        getTripById(tripId){
            return new Promise((resolve, reject) => {
                Trip.findById(tripId, (err, trip) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(trip)
                });
            });
        },
        getAllTrips(){
            return new Promise((resolve, reject) => {
                Trip.find((err, trips) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(trips);
                });
            });
        }

    }
}