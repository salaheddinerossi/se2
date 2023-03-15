import Presance from "../models/Presance.js";
import Subject from "../models/Subject.js";
import user from "../models/user.js";


export const getPresance = async (req, res) => {
    const {date,subjectId} = req.body;
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date();
    var dayName = days[d.getDay()];
    try{

        const presances = await Presance.find({date:d,idSubject:subjectId});
        if(!presances){
            res.status(200).json({result:"no subjects today "})
        }
        res.status(200).json(presances);
    }catch(error){
        console.log(error)
    }


}

export const createPresance = async (req, res) => {
    const { code } = req.body;
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date();
    //get hours and minutes from d 
    var dayName = days[d.getDay()];
    var hours1 = d.getHours()<10?'0':'' + d.getHours()
    var min = d.getMinutes()<10?'0':'' + d.getMinutes()
    var date = dayName + ':' + hours1 + ':' + min;
    console.log(date);
    
    //get all subjects
    try{
        const subjects = await Subject.find({});
        var curretSubject;

        for (var i = 0; i < subjects.length; i++) {
            const element = subjects[i].date.split(":")
            if(element[0] == dayName){
                var hours = parseInt(element[1]);
                var minutes = parseInt(element[2]);
                var hoursMinutes = hours * 60 + minutes;
                if(parseInt(hours1) * 60 + parseInt(min) >= hoursMinutes - 15 && parseInt(hours1) * 60 + parseInt(min) <= hoursMinutes + 15){
                    curretSubject = subjects[i];
                    try{
                        const exitingUser = await user.findOne({code:code});
                        if(exitingUser){
                            if(true){

                                const presance = await Presance.create({idUser:exitingUser._id, idSubject:curretSubject._id, date:d, presance:"present"});
                                res.status(200).json(presance);

                            }
                        }else{
                            res.status(400).json({message:"user doesn't exist"})
                        }

                    }catch(error){
                        console.log(error);
                    }

                }
            }
            
        }
        if(curretSubject == null){
            res.status(400).json({message:"there is no subject at this time"})
        }

    }catch(error){
        console.log(error);
    }
}
