// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const todo = {
  id: 1,
  completed: false,
  title: "CML TEam lesson SWR local API",
  userId: "Oleksii"
}

export default function handler(req, res) {
  res.status(200).json(todo)
}
