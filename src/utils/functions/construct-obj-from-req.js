function constructDataFromReq(req) {
  const { body, params } = req

  const bodyKeys = Object.keys(body)
  const paramKeys = Object.keys(params)

  const data = {
    body: { ...body },
    params: { ...params }
  }

  if (bodyKeys.length === 0) delete data.body
  if (paramKeys.length === 0) delete data.params

  return data
}

module.exports = constructDataFromReq