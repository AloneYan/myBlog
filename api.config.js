module.exports = {
  templates: {},
  configs: [{
    url: 'https://api.han96.com/v2/api-docs', // 后端swagger地址
    typeParameterReflects: [{
      name: 'KeyValue',
      typeProperties: ['key', 'value']
    }, {
      name: 'JsonResult',
      typeProperties: ['data']
    }, {
      name: 'Page',
      typeProperties: ['content']
    }, {
      name: 'SimplePage',
      typeProperties: ['list']
    }, {
      name: 'Pair',
      typeProperties: ['first', 'second']
    }, {
      name: 'RequestValues',
      typeProperties: ['data']
    }]
  }],
  typesAsAny: ['JSONArray', 'Serializable', 'JSONObject'],
  unwrapTypes: ['Response', 'ResponseSimpleEnum', 'JsonResult']
};    