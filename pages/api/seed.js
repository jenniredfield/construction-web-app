import { seedProductsDB } from "./seed/seedTest";

export default async function handler(req, res) {
  console.log("process", process.env.NODE_ENV);
  if (req.method === "POST") {
    try {
      await seedProductsDB();
      res.status(200).json({ message: "success" });
    } catch (err) {
      res.send(400);
    }
  }
}
