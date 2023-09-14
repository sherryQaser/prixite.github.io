import React, { useEffect } from 'react'
import { Box, Typography, Container, Button } from '@mui/material'
import { newsAndBlogs } from '../../data/data'
import { BlogPost } from '../../types/interfaces'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios'
import { useAppSelector } from '../../redux/hooks'
// import { store } from '../../redux/store'
// import { setAllBlogs } from '../../redux/features/blogSlice'

const Blog = () => {
  const { title, header } = newsAndBlogs
  const [blogsData, setBlogsData] = React.useState<BlogPost[]>()
  const allBlogs = useAppSelector((state) => state.blogReducers.allBlogs)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/blog/blogs`)
        const data = await response.data.data
        setBlogsData(data)
      } catch (error) {
        console.error('Error fetching blog data:', error)
      }
    }
    if (allBlogs.length > 0) {
      setBlogsData(allBlogs)
    } else {
      fetchData()
    }
  }, [allBlogs, blogsData])
  if (!blogsData) return <div>loading...</div>

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="prixite" content="Prixte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="xl" className="page-header">
        <Box className="header">
          <Box className="heading">
            <Typography className="heading-text">
              {header.slice(0, 6)}
              <span style={{ color: 'var(--primary-green)' }}>
                {header.slice(6, 15)}
              </span>
            </Typography>
          </Box>
          <Link href={'/'}>
            <Typography color={'primary'}> {'< '}Back </Typography>
          </Link>
        </Box>
      </Container>

      <Container maxWidth="xl" className="posts">
        {blogsData?.map((post: BlogPost, index: number) => (
          <div className="card" key={index}>
            <Image
              src={`https://stg-erp.prixite.com/${post.meta_image}`}
              alt=""
              className="post-img"
              width={500}
              height={500}
              layout="responsive"
            />

            <div className="post-date">Posted on {post.published_on}</div>

            <h3>{post.meta_title}</h3>

            <p>{post.meta_description}</p>

            <Link href={`blog/${post.name}`}>
              <Button variant="contained" className="read-button">
                Read More
              </Button>
            </Link>
          </div>
        ))}
      </Container>
    </>
  )
}

export default Blog

// export async function getServerSideProps() {
//   try {
//     const headers = {
//       Authorization: `token ${process.env.NEXT_PUBLIC_ERP_AUTH_TOKEN}`,
//     }
//     const storeData = store.getState().blogReducers.allBlogs
//     let response
//     if (storeData.length === 0) {
//       response = await axios.get(
//         `${process.env.NEXT_PUBLIC_ERP_BASEPATH}/api/resource/Blog%20Post?fields=[%22*%22]`,
//         {
//           headers,
//         }
//       )
//       response = response.data.data?.filter(
//         (blog: BlogPost) => blog?.published === 1
//       )
//       store.dispatch(setAllBlogs(response))
//     }

//     return {
//       props: {
//         blogs: response,
//       },
//     }
//   } catch (error) {
//     console.error('Error fetching blog data:', error)
//     return {
//       props: {
//         blogs: [],
//       },
//     }
//   }
// }
