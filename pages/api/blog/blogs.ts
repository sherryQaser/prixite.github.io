import axios from 'axios'
import { BlogPost } from '../../../types/interfaces'
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
      `${process.env.NEXT_PUBLIC_ERP_BASEPATH}/api/resource/Blog%20Post?fields=[%22*%22]`,
      {
        headers,
      }
    )
    const allBlogs = response.data.data?.filter(
      (blog: BlogPost) => blog?.published === 1
    )

    res.status(200).json({ data: allBlogs })
  } catch (error) {
    console.error('Error fetching blog data:', error)
    res.status(500).json({ error: 'Error fetching blog data' })
  }
}
