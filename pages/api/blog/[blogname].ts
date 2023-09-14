// pages/api/blog.js
import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const headers = {
      Authorization: `token ${process.env.NEXT_PUBLIC_ERP_AUTH_TOKEN}`,
    }
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_ERP_BASEPATH}/api/resource/Blog%20Post?fields=[%22*%22]&filters=[[%22Blog%20Post%22,%22name%22,%22=%22,%22${req.query.blogname}%22]]`,
      {
        headers,
      }
    )

    const blogDataArray = response.data.data
    const blog =
      blogDataArray && blogDataArray.length > 0 ? blogDataArray[0] : null

    res.status(200).json({ data: blog })
  } catch (error) {
    console.error('Error fetching blog data:', error)
    res.status(500).json({ error: 'Error fetching blog data' })
  }
}
