import { Injectable } from '@nestjs/common';

@Injectable()
export class DBMethods {
    constructor(
    ){ }
    
    async createDocumnet(model:any, data:object) : Promise<object> {
        const document = await model.create(data);
        return document;
    }
    async findAllDocuments(model:any, condition:object={}) : Promise<object> {
        // const documents = await model.find(condition).populate({path : "userId"});
        const documents = await model.find(condition);
        return documents;
    }
    async saveDocument(model:any, data:object) : Promise<object> {
        const newDoc = new model(data); 
        const document = await newDoc.save();
        return document;
    }

    async findOneDocument(model:any, condition:object) : Promise<object> {
        const document = await model.findOne(condition);
        return document;
    }
}