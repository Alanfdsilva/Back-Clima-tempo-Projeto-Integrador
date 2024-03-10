class ProjectController {
    async uptime(req, res) {
        return res.status(200).send(true)
    }
}
module.exports = ProjectController;
