


class mongooseToObject{

    multiMongooseToObject(mongooses){
        return mongooses = mongooses.map(mongoose => {
            mongoose.toObject()
        })
    }

    singleMongooseToObject(mongooses){
        if(mongooses){
            return mongooses.toObject();
        }else{
            return mongooses
        }
    }
}

module.exports = new mongooseToObject;