const {Router} = require('express')
const config = require('config')
const shortId = require('shortid')
const Link = require('../models/Link')
const authMiddleware = require('../middleware/auth.middleware')
const router = Router()

router.post('/generate', authMiddleware, async (req, res) => {

    try {
        const baseUrl = config.get('baseUrl')
        const {from} = req.body // const from = req.body.from
        const code = shortId.generate()
        const existing = await Link.findOne({from})


        if (existing) {
            // console.log(req.body.from)
            return res.status(200).json({link: existing})
        }
        const to = baseUrl + '/t/' + code

        const link = new Link({
            code: code,
            to: to,
            from: from,
            owner: req.userDecodedToken.userId,
        })

        await link.save()
        res.status(201).json({link})

    } catch (e) {
        res.status(500).json({message: 'что-то пошло не так попробуйте снова '})
    }
})
router.get('/', authMiddleware, async (req, res) => {
    try {
        const links = await Link.find({owner: req.userDecodedToken.userId})
        res.status(200).json({links})
    } catch (e) {
        res.status(500).json({message: 'что-то пошло не так попробуйте снова '})
    }
})
router.get('/:id', authMiddleware, async (req, res) => {
    try {
        const linkByID = await Link.findById(req.params.id)
        res.status(200).json({linkByID})
    } catch (e) {
        res.status(500).json({message: 'что-то пошло не так попробуйте снова '})
    }
})

module.exports = router