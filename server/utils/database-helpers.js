const { Sequelize } = require('sequelize')
const CustomError = require('../errors')

const searchByColumnName = (columnName, searchQuery) => {
    return Sequelize.where(Sequelize.fn('LOWER', Sequelize.col(columnName)), 'LIKE', '%' + searchQuery + '%')
}

const requireQueryParameter = (queryParam, errorMessage) => {
    if (!queryParam) {
        throw new CustomError.BadRequestError(errorMessage)
    }
}

module.exports = {
    searchByColumnName,
    requireQueryParameter
}