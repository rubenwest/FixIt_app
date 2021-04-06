const Incident = require("../models/incident");


async function getAllIncidents(req,res) {
    const incidents = await Incident.find().lean().exec()
    res.status(200).send({incidents})
}

async function addIncident(req,res) {

    try {

        const {
            email,
            element,
            incidentType,
            description,
            address
        } = req.body

        const incident = Incident ({
            email,
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

async function finishedIncident(req,res) {

    try {

        const body = req.body;
        const id = body.id;
        const incidentStored = await Incident.findByIdAndUpdate(id, body, {useFindAndModify: false})
        res.status(201).send({incidentStored});

    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

async function getIncidents(req,res) {

    try {

        const {email} = req.body
        const incidents = await Incident.find({ email: email }).lean().exec()
        res.status(201).send({incidents})

    } catch (error) {
        res.status(500).send({message: error.message})
    }
}



module.exports = {
    addIncident,
    getIncidents,
    finishedIncident,
    getAllIncidents
}