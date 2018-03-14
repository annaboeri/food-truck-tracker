const
    express = require('express'),
    trucksRouter = new express.Router(),
    trucksCtrl = require('../controllers/trucks.js')

trucksRouter.get('/', trucksCtrl.index)
trucksRouter.post('/', trucksCtrl.create)

trucksRouter.get('/new', trucksCtrl.new)
trucksRouter.get('/:id/edit', trucksCtrl.edit)

trucksRouter.get('/:id', trucksCtrl.show)
trucksRouter.patch('/:id', trucksCtrl.update)
trucksRouter.delete('/:id', trucksCtrl.destroy)


module.exports = trucksRouter