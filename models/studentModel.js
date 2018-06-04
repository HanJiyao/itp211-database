var myDatabase = require('../controllers/sqlDatabase')
var sequelizeInstance = myDatabase.sequelizeInstance
var Sequelize = myDatabase.Sequelize

const StudentModel = sequelizeInstance.define('Students',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    studentId:{
        type:Sequelize.STRING,
        allowNull:false
    },
    name:{
        type:Sequelize.STRING,
        trim:true
    },
    group:{
        type:Sequelize.INTEGER
    },
    hobby:{
        type:Sequelize.STRING,
        trim:true
    }
})

StudentModel.sync({force:false, logging:console.log}).then(()=>{
    console.log("Student table synced")
    StudentModel.upsert({
        id:1,
        studentId:"123a",
        name:"student1",
        group:1,
        hobby:"hobby1"
    })
    StudentModel.upsert({
        id: 2,
        studentId: "123b",
        name: "student2",
        group: 2,
        hobby: "hobby2"
    })
    StudentModel.upsert({
        id: 3,
        studentId: "123c",
        name: "student3",
        group: 3,
        hobby: "hobby3"
    })
})
module.exports = sequelizeInstance.model("Students", StudentModel)