//INF211-MERN-BACKEND-FFs112BcdiOO52-SETC -- QUILATAN,DANIEL SEBASTIAN G.
const Pirate = require('../models/pirate_model');


const newPirate = (req, res) => {
    Pirate.create(req.body)
        .then((newPirate) => {
            res.json({ newPirate: newPirate,status:"successfully inserted" })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

const findPirateById = (req, res) => {
    Pirate.findOne({_id:req.params.id})
        .then((thePirate) => {
            res.json({thePirate})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

const findPirateByName = (req, res) => {
    Pirate.findOne({pirate_name:req.params.name})
        .then((thePirate) => {
            res.json({thePirate})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

const updatePirate = (req, res) => {
    Pirate.findByIdAndUpdate({_id:req.params.id},req.body,
        { new: true, runValidators: true })
        .then((updatedPirate) => {
            res.json({ updatedPirate: updatedPirate,status:"successfully Updated the Pirate" })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

const findPirateByIdDelete = (req, res) => {
    Pirate.findByIdAndDelete({_id:req.params.id})
        .then((deletedPirate) => {
            res.json({ deletedPirate: deletedPirate, message:"Successfully deleted the entry" })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

const findPirateByPosition = (req, res) => {
    Pirate.find({ crew_position: req.params.position })
        .then((piratePosition) => {
            res.json({ piratePosition });
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err });
        });
};

const numberofPirates = (req, res) => {
    Pirate.countDocuments()
        .then((count) => {
            res.json({ count });
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err });
        });
};

const getPiratewithPegLeg = (req, res) => {
    Pirate.find({ peg_leg: true })
        .then((pirate) => {
            res.json({ pirate });
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err });
        });
};

const getPiratewithHookHand = (req, res) => {
    Pirate.find({ hook_hand: true })
        .then((pirate) => {
            res.json({ pirate });
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err });
        });
};

const getPiratewithEyePatch = (req, res) => {
    Pirate.find({ eye_patch: true })
        .then((pirate) => {
            res.json({ pirate });
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err });
        });
};



 
 
module.exports = {
   
    newPirate,
    findPirateById,
    findPirateByName,
    updatePirate,
    findPirateByIdDelete,
    findPirateByPosition,
    numberofPirates,
    getPiratewithPegLeg,
    getPiratewithHookHand,
    getPiratewithEyePatch
 


}