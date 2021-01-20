var Batismo = require('../models/batismo')

module.exports.list = () => {
    return Batismo 
        .find({}).select({_id: 1, title: 1, date: 1, ref: 1})
} 

module.exports.findSimple = id => {
    return Batismo 
        .findOne({_id: id})
        .exec()
} 

module.exports.findBatizados = () => {
    return Batismo
        .aggregate(
        [
            {
                $project: { _id: 0,
                    batizado: { $arrayElemAt: [{ $split: ["$title", ": "] }, 1] }
                }
            }, 
            {
                $project: {
                    batizado: { $arrayElemAt: [{ $split: ["$batizado", ". "] }, 0] },
                }
            }, 
            {
                $project: { nome: "$batizado" }
            }, 
            {
                $sort: { nome: 1 }
            }
        ]
    );
} 

module.exports.findProgenitores = () => {
    return Batismo 
        .find({}).select({_id: 1, pai: 1, mae: 1})

} 

module.exports.findAno = ano => {
    return Batismo 
        .find({date: { $regex: ".*" + ano + ".*" } },
            function(err, data){
                return data
        });
} 

module.exports.findStats = () => {
    return Batismo 
    .aggregate(
        [
            [
                {
                  $group: {
                    _id: { $substr: [ "$date", 0, 4] },
                    conteudo: {
                        $addToSet: "$title"
                    },
                    totalBatizados: { $sum: 1 }
                    }
                },
                {
                    $project: {
                        _id: 0,
                        ano: "$_id",
                        totalBatizados: 1,
                    }
                }
            ] 
        ]
    );
} 
