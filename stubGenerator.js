const { writeToFile } = require('@piq9117/write-file')
const casual = require('casual')
const { times } = require('ramda')
const uuidV4 = require('uuid/v4')

const busDriver = () => ({
  busName: casual.color_name,
  busId: casual.integer(1000, 9999),
  routeId: uuidV4(),
  bikeRackMaxCount: casual.integer(0, 3),
  wheelChairMaxCount: casual.integer(0, 2),
  bikeRacksCount: 0,
  wheelChairCount: 0
})

const busDriverSub = times(busDriver, 2)

writeToFile('./stub', 'driver.json', JSON.stringify(busDriverSub))
