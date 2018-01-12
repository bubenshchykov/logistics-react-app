import * as types from '../constants/ActionTypes'

export const addStock = (name, id) => ({ type: types.ADD_STOCK, name, id })
export const selectStock = id => ({ type: types.SELECT_STOCK, id })