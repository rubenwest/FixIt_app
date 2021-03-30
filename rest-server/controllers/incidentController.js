const Incient = require("../models/incident");

async function getAllIncidents(req,res) {
    console.log("getAllIncidents");
    const incidents = await Incient.find().lean().exec()
    console.log(incidents);
    res.status(200).send({incidents})
}

async function addIncident(req,res) {

    try {
        
        const {
            user,
            element,
            incidentType,
            description,
            address
        } = req.body

        const incident = Incient ({
            user,
            element,
            incidentType,
            description,
            address
        })

        if (req.file) {
            const { filename } = req.file
            incident.setImgUrl(filename)
        }


        const incidentStored = await incident.save();

        res.status(201).send({incidentStored})

    } catch (error) {
        res.status(500).send({message: error.message})
    }
}


async function getIncidents(req,res) {

    try {
        console.log("getIncidents");

        console.log("user",req.body);

        const {user} = req.body

        const incidents = await Incient.find({ user: user }).lean().exec()
        console.log(incidents);
        res.status(201).send({incidents})

    } catch (error) {
        res.status(500).send({message: error.message})
    }
}



module.exports = {
    addIncident,
    getIncidents,
    getAllIncidents
}