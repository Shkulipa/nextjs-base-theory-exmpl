/**
 * @info
 * docs: https://nextjs.org/docs/api-routes/dynamic-api-routes
 */

export default function handler(req, res) {
 Middleware(req, res)
  const { id } = req.query
  res.end(`id: ${id}`)
}