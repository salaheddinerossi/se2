import Subject from "../models/Subject.js";

export const createSubject = async (req, res) => {
    const {name,date} = req.body;
    try {
        const existingSubject = await
        Subject .findOne({name});
        if (existingSubject) return res.status(400).json({message: "Subject already exists"});
        const result = await Subject .create({name, date});
        res.status(200).json({result});
    } catch (error) {
        console.log(error)
    }
}

//delete subject
export const deleteSubject = async (req, res) => {
    const {id} = req.body;
    try {
        const existingSubject = await Subject .findOne({id});
        if (!existingSubject) return res.status(400).json({message: "Subject does not exist"});
        const result = await Subject.deleteOne({id});
        res.status(200).json({result});
    } catch (error) {
        console.log(error)
    }
}

//update subject
export const updateSubject = async (req, res) => {
    const {id, name, date} = req.body;
    try {
        const existingSubject = await Subject .findOne({id});
        if (!existingSubject) return res.status(400).json({message: "Subject does not exist"});
        const result = await Subject .updateOne({id}, {name, date});
        res.status(200).json({result});
    } catch (error) {
        console.log(error)
    }
}

