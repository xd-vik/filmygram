const movieModel = require('../models/movie');

exports.create = async (req, res) => {
    try {
        let { id, title, description, avatarUrl, screenshotsUrl, storyLine, ...remains } = req.body;
        if (!id || !title || !description || !avatarUrl || !screenshotsUrl || !storyLine || !remains['720p'] || !remains['1080p']) {
            console.log("Pls send valid data");
            return res.status(401).json({
                success: false,
                message: "No data found to insert"
            });
        }

        await movieModel.create({
            id,
            title,
            description,
            avatarUrl,
            screenshotsUrl,
            storyLine,
            "downloadLinks": { 
                "720p": remains?.["720p"] , 
                "1080p": remains?.["1080p"] 
            }
        });
        
    return res.status(200).json({
        success: true,
        message: "Data inserted into DB"
    });

} catch (error) {
    // console.log(error);
    return res.status(500).json({
        success: false,
        message: "Error while inserting data in DB"
    });

}

};

exports.edit = async (req, res) => {

    try {
        const { id } = req.query;
        if (!id) {
            console.log("Pls send valid data");
            return res.status(401).json({
                success: false,
                message: "No data found to edit"
            });
        }
        let user = await movieModel.findOne({ id });
        if (!user) {
            console.log("Pls send valid data");
            return res.status(401).json({
                success: false,
                message: "No data found to edit"
            });
        }
        return res.status(200).json({
            success: true,
            userDetails: user,
            message: "Data is fetched successfully"
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while fetching data from DB"
        });
    }

}


exports.update = async (req, res) => {
    try {
        let { id, title, description, avatarUrl, screenshotsUrl, storyLine, ...remains } = req.body;
        if (!id || !title || !description || !avatarUrl || !screenshotsUrl || !storyLine || !remains['720p'] || !remains['1080p']) {
            console.log("Pls send valid data");
            return res.status(401).json({
                success: false,
                message: "Invalid Data! Provide correct data"
            });
        }
        
        await movieModel.updateOne({ id }, {
            id,
            title,
            description,
            avatarUrl,
            screenshotsUrl,
            storyLine,
            "downloadLinks": { 
                "720p": remains?.["720p"] , 
                "1080p": remains?.["1080p"] 
            }
        }, { new: true });

        return res.status(200).json({
            success: true,
            message: "Data Updated into DB"
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Error while updating data in DB"
        });
    }
}

exports.remove = async (req, res) => {
    try {
        let { id } = req.body;
        if (!id) {
            console.log("Pls send valid data");
            return res.status(404).json({
                success: false,
                message: "Id is Invalid"
            });
        }
        let movieDelete = await movieModel.findOne({ id });
        if (!movieDelete) {
            return res.status(200).json({
                success: true,
                message: "Data is already deleted or not present in DB"
            });
        }
        await movieModel.deleteOne({ id });
        return res.status(200).json({
            success: true,
            message: "Data deleted from DB"
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Error while deleting data in DB"
        });
    }
}