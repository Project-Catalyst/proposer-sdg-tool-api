const goalsJson = require("./goals.json")
const humanRightsExport = require('./export-full-en.json')
// const humanRightsExport = require('./example.json')
const fs = require('fs')

const keywordsToFile = () => {
    const keywordsInSeparateArrays = goalsJson.map(sdgGoal => sdgGoal.keywords)
    const keywords = keywordsInSeparateArrays.flat(Infinity)
    const distinctKeywords = [... new Set(keywords)].sort()
    var count = 0
    const keywordsReadyForSeed = distinctKeywords.map(keyword => {
        count++
        const keywordMap = {}
        keywordMap[keyword] = count
        return {
            forSeed: {
                id: count,
                title: keyword
            },
            findIdForKeyword: keywordMap
        }
    })
    return keywordsReadyForSeed
}
const keywordsJson = keywordsToFile()

const sdgGoalsToFile = (keywordsJson) => {
    var count = 0
    const sdgReadyForSeed = goalsJson.map(sdgGoal => {
        count++
        const sdgGoalsToKeywords = sdgGoal.keywords.map(keyword => {
            return {
                SdgGoalId: count,
                KeywordId: keywordsJson[keyword]
            }
        })
        return {
            forSeed: {
                id: count,
                title: sdgGoal.title.startsWith(`Goal ${sdgGoal.id}. `) ? sdgGoal.title.substring(`Goal ${sdgGoal.id}. `.length) : sdgGoal.id,
                image: sdgGoal.image
            },
            keywordsMap: sdgGoalsToKeywords
        }
    })
    return sdgReadyForSeed
}
const sdgGoalsReadyJson = sdgGoalsToFile(keywordsJson
    .map(x => x.findIdForKeyword)
    .reduce((prev, current) => { return { ...prev, ...current } }, {}))

const subGoalsToFile = () => {
    const subGoalsForSeed = goalsJson.map(sdgGoal => {
        return sdgGoal.subgoals.map(subGoal => {
            const metricsData = subGoal.metrics.map(metric => {
                return {
                    id: metric.id,
                    title: metric.title.startsWith(`${metric.id} `) ? metric.title.substring(`${metric.id} `.length) : metric.id,
                    SubgoalId: subGoal.id
                }
            })
            const subgoalData = {
                id: subGoal.id,
                title: subGoal.title.startsWith(`${subGoal.id} `) ? subGoal.title.substring(`${subGoal.id} `.length) : subGoal.id,
                SdgGoalId: sdgGoal.id
            }
            return {
                metricsData,
                subgoalData
            }
        })
    })
    return subGoalsForSeed
}
const subGoalsReadyJson = subGoalsToFile().flat(Infinity).map(x => x.subgoalData).flat(Infinity)
const metricsReadyJson = subGoalsToFile().flat(Infinity).map(x => x.metricsData).flat(Infinity)


const RTCToFile = () => {
    const humanRightsInfo = humanRightsExport.map(humanRight => {
        return {
            regions: humanRight.Regions,
            themes: humanRight.Themes,
            countries: humanRight.Countries
        }
    })

    const extractDistinct = (data, propName) => [... new Set(data.map(info => info[propName]).flat(Infinity))].sort()
    const extractForSeed = (data) => {
        var count = 0
        return data.map(item => {
            count++
            const dataMap = {}
            const property = item.trim()
            dataMap[property] = count
            return {
                forSeed: {
                    id: count,
                    name: property.trim()
                },
                findIdForItem: dataMap
            }
        })
    }

    const distinctRegions = extractDistinct(humanRightsInfo, "regions")
    const distinctThemes = extractDistinct(humanRightsInfo, "themes")
    const distinctCountries = extractDistinct(humanRightsInfo, "countries")

    const regionsData = extractForSeed(distinctRegions)
    const themesData = extractForSeed(distinctThemes)
    const countriesData = extractForSeed(distinctCountries)

    return {
        regionsData,
        themesData,
        countriesData
    }
}
const RTCInfo = RTCToFile()

const SubgoalsToHumanRightsMap = []
const SdgGoalsToHumanRightsMap = []
const CountryToHumanRightsMap = {}
const RegionToHumanRightsMap = {}
const ThemeToHumanRightsMap = {}

const humanRightsToFile = () => {
    var count = 0
    const humanRightsForSeed = humanRightsExport.map(humanRight => {
        count++
        humanRight.Sdgs.map(sdg => {
            const goalOrSubgoal = sdg.split('-')[0].trim()
            const goalOrSubgoalLen = goalOrSubgoal.split('.').length
            if (goalOrSubgoalLen > 1) {
                SubgoalsToHumanRightsMap.push({
                    SubgoalId: goalOrSubgoal,
                    HumanRightId: count,
                })
            } else {
                SdgGoalsToHumanRightsMap.push({
                    SdgGoalId: goalOrSubgoal,
                    HumanRightId: count,
                })
            }
        }).reduce((prev, current) => { return { ...prev, ...current } }, {})

        const extractDictionary = (data) =>  data.map(x => x.findIdForItem).reduce((prev, current) => { return { ...prev, ...current } }, {})
        const pushInfoToMap = (data, map, dictionary) => {
            data.map(item => {
                map[count] = dictionary[item.trim()]
            })
        }
        const regionsMap = extractDictionary(RTCInfo.regionsData)
        const countriesMap = extractDictionary(RTCInfo.countriesData)
        const themesMap = extractDictionary(RTCInfo.themesData)
        pushInfoToMap(humanRight.Regions, RegionToHumanRightsMap, regionsMap)
        pushInfoToMap(humanRight.Countries, CountryToHumanRightsMap, countriesMap)
        pushInfoToMap(humanRight.Themes, ThemeToHumanRightsMap, themesMap)
        
        return {
            id: count,
            title: humanRight.Text
        }
    })
    return humanRightsForSeed
}

const hr = humanRightsToFile()


const fileTemplate = (data, tableName) => `
'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('${tableName}', ${data})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('${tableName}', null, {})
  }
}
`
fs.writeFileSync(`${__dirname}/../seeders/20220417105235-regions.js`, fileTemplate(JSON.stringify(RTCInfo.regionsData.map(x => x.forSeed).flat(Infinity)), 'Regions'))
fs.writeFileSync(`${__dirname}/../seeders/20220417105236-countries.js`, fileTemplate(JSON.stringify(RTCInfo.countriesData.map(x => x.forSeed).flat(Infinity)), 'Countries'))
fs.writeFileSync(`${__dirname}/../seeders/20220417105237-themes.js`, fileTemplate(JSON.stringify(RTCInfo.themesData.map(x => x.forSeed).flat(Infinity)), 'Themes'))
fs.writeFileSync(`${__dirname}/../seeders/20220417105245-keywords.js`, fileTemplate(JSON.stringify(keywordsJson.map(x => x.forSeed)), 'Keywords'))
fs.writeFileSync(`${__dirname}/../seeders/20220417105250-sdgGoals.js`, fileTemplate(JSON.stringify(sdgGoalsReadyJson.map(x => x.forSeed).flat(Infinity)), 'SdgGoals'))
fs.writeFileSync(`${__dirname}/../seeders/20220417105255-subgoals.js`, fileTemplate(JSON.stringify(subGoalsReadyJson), 'Subgoals'))
fs.writeFileSync(`${__dirname}/../seeders/20220417105260-metrics.js`, fileTemplate(JSON.stringify(metricsReadyJson), 'Metrics'))
fs.writeFileSync(`${__dirname}/../seeders/20220417105265-sdggoals-to-keywords.js`, fileTemplate(JSON.stringify(sdgGoalsReadyJson.map(x => x.keywordsMap).flat(Infinity)), 'SdgGoalsToKeywordsMap'))
fs.writeFileSync(`${__dirname}/../seeders/20220417105270-humanrights.js`, fileTemplate(JSON.stringify(hr), 'HumanRights'))
fs.writeFileSync(`${__dirname}/../seeders/20220417105275-subgoals-to-humanright.js`, fileTemplate(JSON.stringify(SubgoalsToHumanRightsMap), 'SubgoalsToHumanRightsMap'))
fs.writeFileSync(`${__dirname}/../seeders/20220417105280-sdggoals-to-humanright.js`, fileTemplate(JSON.stringify(SdgGoalsToHumanRightsMap), 'SdgGoalsToHumanRightsMap'))
fs.writeFileSync(`${__dirname}/../seeders/20220417105285-regions-to-humanright.js`, fileTemplate(JSON.stringify(Object.entries(RegionToHumanRightsMap).map(x => {return {"HumanRightId": x[0], "RegionId": x[1]}})), 'RegionToHumanRightsMap'))
fs.writeFileSync(`${__dirname}/../seeders/20220417105290-countries-to-humanright.js`, fileTemplate(JSON.stringify(Object.entries(CountryToHumanRightsMap).map(x => {return {"HumanRightId": x[0], "CountryId": x[1]}})), 'CountryToHumanRightsMap'))
fs.writeFileSync(`${__dirname}/../seeders/20220417105295-themes-to-humanright.js`, fileTemplate(JSON.stringify(Object.entries(ThemeToHumanRightsMap).map(x => {return {"HumanRightId": x[0], "ThemeId": x[1]}})), 'ThemeToHumanRightsMap'))