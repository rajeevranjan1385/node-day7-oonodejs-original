const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'classpractice';

const maincall = (col) =>{
    MongoClient.connect(url, (err, db)=>{
        if(err) throw err;
        var dbo = db.db(dbName);
        dbo.collection(col).find({}).toArray((err, data)=>{
            if(err) throw err;
            return data;
        })
    })
}

//GET call
var output;
maincall.prototype.getData = (colName) =>{
    MongoClient.connect(url, (err,db) =>{
        if (err) throw err;
        var dbo = db.db(dbName);
        dbo.collection(colName).find({}).toArray((err, result)=>{
            if (err) throw err;
            console.log('Data Fetched')
            output = result;
        })
    })
    return output;
}

maincall.prototype.insertData = (colName, formData)=>{
    MongoClient.connect(url, (err, db) =>{
        if (err) throw err;
        var dbo = db.db(dbName);
        dbo.collection(colName).insertOne(formData, (err, result)=>{
            if (err) throw err;
            db.close()
        })
    })
    output = `Data inserted in ${colName}`;
    return output;
}

maincall.prototype.updateData = (colName, query, formData) =>{
    MongoClient.connect(url, (err, db)=>{
        if (err) throw err;
        var dbo = db.db(dbName);
        dbo.collection(colName).update(query, formData, (err, result)=>{
            if (err) throw err;
            db.close();
        })
    })
    let output = `Data updated Successfully for ${colName}`;
    return output;
}

maincall.prototype.deleteData = (colName, id) =>{
    MongoClient.connect(url, (err, db) =>{
        if (err) throw err;
        var dbo = db.db(dbName);
        dbo.collection(colName).deleteOne(id, (err, result)=>{
            if (err) throw err;
            db.close();
        })
    })
    let output = `Data deleted successfully for Collection: ${colName}`;
    return output;
}
module.exports = maincall;

