const Student = require('../Models/students.model')
const app = require('../server')


const findData = async (req, res) => {
  const data = await Student.find({})
  console.log(' $$$$$$$$$$$$$$$$$ ', data)
  res.status(200).send(data)

}
// save data in mongoDB
const login = (req, res) => {
  console.log(req.body);
  const { first_name,Department, email,last_name ,DOB,id} = req.body;
// let user = {
//     name :"Ashish",
//     email : "ashish@jkjdb"
// }
//   let name = "Ashish"
//   let email = "ashis@email"
  const data= new Student({
    first_name: first_name,
    Department:Department,
    email: email,
    last_name: last_name,
    DOB: DOB,
    id: id,
  });
// const data = new userModel({

// })
  data.save();
  console.log(data)
  res.status(200).send("signup successful");
};


// UPDATE data in mongoDB
const updateUser = async (req,res)=>{
  try{
const result= await Student.updateMany({ _id: '642d4dca09fb61b349beef13' }, { first_name: 'SONU', last_name: 'CHHBRA',     class: 'Class 5',  DOB: '2009-01-20', email: '00TT@gmail.com'   },

);
console.log("qqqqqqqqqq",result)
res.status(200).send("update successful");
console.log("qqqqqqqqqq",res)
}catch(err){
console.log('###', err)
}
}
// To fetch updated data
const updateData = async (req,res)=>{
  try{
  const doc = await Student.find({_id: '642d4dca09fb61b349beef23' }).exec();
  console.log(' ****data successful ', doc)
  res.status(200).send(doc)
  }catch(err){
  console.log('-------', err)
  }

  }

// DELETE data in mongoDB
const DeleteDocument = async (req, res)=>{
  try{
    const {id}= req.body;
    console.log("!!!!!!!!!!!!",req.body)
    //{id:"hufrhjhdf"}
    console.log("pppppppppppppppppppppppp",id)
    const data = await Student.deleteOne({id:id});
     console.log('!!!!!!!deleteOne successful',data)
     res.status(200).send({msg:"deleteOne successful"});
  }catch(err){
console.log(err);
  }
}

// FILTER data in mongoDB
  const FilterUser = async (req,res)=>{
  
    try{
      const doc = await Student.find({first_name: 'Mauni' }).exec();
      console.log(' ****filter successful ', doc)
      res.status(200).send(doc)
    }catch(err){
      console.log('first',err)
    }
    
    
    }

module.exports = {
  findData,
  updateUser,
  updateData,
  DeleteDocument,
  FilterUser,
  login

}