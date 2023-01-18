const { default: mongoose } = require("mongoose");


const annoncementScema=new mongoose.Schema({

name:{
type:'String',
required:true

},title:{

    type:'String',

},pic:{

type:'String',
default:'https://nofiredrills.com/wp-content/uploads/2016/10/myavatar.png'

},desc:{

    type:'String',

}
},{timeseries:true})


const annoncementModel=mongoose.model('annoncement',annoncementScema)


module.exports=annoncementModel
