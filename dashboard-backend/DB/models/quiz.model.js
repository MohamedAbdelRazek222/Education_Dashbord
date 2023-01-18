const { default: mongoose } = require("mongoose");


const quizScema=new mongoose.Schema({

title:{
type:'String',
required:true

},course:{

    type:'String',
    required:true

},topic:{

type:'String'

},due_to:{

    type:'String',
    required:true

}
},{timeseries:true})


const quizModel=mongoose.model('quiz',quizScema)


module.exports=quizModel
