'use strict';

module.exports = (Location) => {
  Location.getLocation = async(data) => {
    const returnData = (data) => {
      return data
    }
    return await returnData(data)
  }
  
  Location.remoteMethod('getLocation', {
    accepts: {arg: 'data', type: 'object', http: {source: 'body'}},
    returns: {root: true},
    http: {path: '/find', verb: 'post'}
  })
}
