const { Sequelize } = require('sequelize')
const CustomError = require('../errors')
const assert = require('assert')

const searchByColumnName = (columnName, searchQuery) => {
    return Sequelize.where(Sequelize.fn('LOWER', Sequelize.col(columnName)), 'LIKE', '%' + searchQuery + '%')
}

const assertSdgIdsPassed = (req) => assert.ok(req.query?.sdgIds, new CustomError.BadRequestError("Endpoint requires sdg goal ids to work properly. Please pass sdgIds in the query params"))
const assertSubgoalIdsPassed = (req) => assert.ok(req.query?.sgIds, new CustomError.BadRequestError("Endpoint requires subgoal ids to work properly. Please pass sgIds in the query params"))

const assertSdgAndSubgoalIdsPassed = (req) => {
    assertSdgIdsPassed(req)
    assertSubgoalIdsPassed(req)
}

module.exports = {
    searchByColumnName,
    assertSdgIdsPassed,
    assertSubgoalIdsPassed,
    assertSdgAndSubgoalIdsPassed
}