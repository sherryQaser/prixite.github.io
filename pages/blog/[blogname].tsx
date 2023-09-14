import Head from 'next/head'
import { useEffect, useState } from 'react'
import { BlogPost } from '../../types/interfaces'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useAppSelector } from '../../redux/hooks'
import axios from 'axios'

export default function BlogDetailPage() {
  const [blogsData, setBlogsData] = useState<BlogPost | null>()
  const router = useRouter()
  const allBlogs = useAppSelector((state) => state.blogReducers.allBlogs)
  const { blogname } = router.query

  useEffect(() => {
    if (!blogname) {
      return
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/blog/${blogname}`)
        const data = await response.data.data
        setBlogsData(data)
      } catch (error) {
        console.error('Error fetching blog data:', error)
      }
    }
    const blogData = allBlogs.find((blog: BlogPost) => blog?.name === blogname)
    if (blogData) {
      setBlogsData(blogData)
    } else {
      fetchData()
    }
  }, [blogname, allBlogs])

  const Blog = dynamic(
    () => import('../../components/Presentational/SingleBlog/Blog'),
    { ssr: false }
  )

  if (!blogsData) {
    return <div>loading...</div>
  }

  return (
    <>
      <Head>
        <title>{blogsData?.title}</title>
      </Head>
      <Blog blog={blogsData} />
    </>
  )
}

// export async function getServerSideProps({
//   params: { blogname },
// }: {
//   params: { blogname: string }
// }) {
//   try {
//     const headers = {
//       Authorization: `token ${process.env.NEXT_PUBLIC_ERP_AUTH_TOKEN}`,
//     }
//     const storeData = store.getState().blogReducers.allBlogs
//     let blog
//     if (!storeData.length) {
//       const response = await fetch(
//         `${process.env.NEXT_PUBLIC_ERP_BASEPATH}/api/resource/Blog%20Post?fields=[%22*%22]&filters=[[%22Blog%20Post%22,%22name%22,%22=%22,%22${blogname}%22]]`,
//         {
//           headers,
//         }
//       )
//       const {data} = await response.json();
//       log('blogDataArray', data);
//       blog = data[0]
//     }
//     log('blog', blog);
//     return {
//       props: {
//         blog: blog,
//       },
//     }
//   } catch (error) {
//     console.error('Error fetching blog data:', error)
//     return {
//       props: {
//         blog: null,
//       },
//     }
//   }
// }
