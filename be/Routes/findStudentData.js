const tableDataRouter=require("express").Router();
const {login,findData,updateUser,updateData,DeleteDocument,FilterUser}=require("../Controllers/students.controller");

(()=>{
    getRequest()
    // postRequest()
})();



function getRequest(){
  
    tableDataRouter.get("/findData",findData);
    tableDataRouter.patch("/update", updateUser);
    tableDataRouter.get("/update", updateData);
    tableDataRouter.delete("/delete", DeleteDocument);
    tableDataRouter.get("/filter", FilterUser);
    tableDataRouter.post("/register", login);

}







module.exports=tableDataRouter;