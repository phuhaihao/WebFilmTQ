
class mongooseToObject{
    multiMongooseToObject(mongooses){
        mongooses = mongooses.map(mongoose => mongoose.toObject())
        return mongooses
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