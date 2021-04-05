const superagent = require("superagent")

const { capitalFirst } = require("coldz")

const axios = require("axios")

const npm = async (name, error) => {

  if (!name) throw "Package name is not provided"

  try {
    const { body } = await superagent("https://registry.npmjs.org/" + name)


    let data = body.versions[body['dist-tags'].latest] 

    const weekly = await axios("https://api.npmjs.org/downloads/point/last-week/" + name)

    result = {
      embed: {
        title: data.name,
        description: data.description,
        thumbnail: { url: "https://img.icons8.com/color/452/npm.png" },
        color: "GREEN",
        fields: [
          {
            name: "License",
            value: data.license,
            inline: true
          },
          {
            name: "Weekly Downloads",
            value: weekly.data.downloads ? weekly.data.downloads: 0,
            inline: true
          },
          {
            name: "Version",
            value: data.version,
            inline: true
          },
          {
            name: "Maintainers",
            value: data.maintainers.map(main => main = `\`${capitalFirst(main.name)}\``).join(",\n"),
            inline: false
          }
        ]
      }
    }

    return result;

  } catch (err) {
    return error ? error: {
      embed: {
        title: "Error",
        thumbnail: { url: "https://img.icons8.com/color/452/npm.png"},
        description: `Cannot find any package with name - \`${name}\``,
        fields: [
          {
            name: "Status",
            value: "`404`"
          }
        ],
        color: "RED"
      }
    }
  }
}

module.exports = npm;
