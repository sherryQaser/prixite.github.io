import React, { useEffect } from 'react'
import { AppBar, Box, Container, Toolbar } from '@mui/material'
// eslint-disable-next-line
import Image from 'next/image'
// eslint-disable-next-line
import { NextRouter, useRouter } from 'next/router'
// eslint-disable-next-line
import logoImg from '../../../public/images/prixite-logo.png'
// eslint-disable-next-line
import { siteName } from '../../../data/data'
import HeaderMenu from '../../Smart/HeaderMenu/HeaderMenu'
import Title from '../../Presentational/Title/Title'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import axios from 'axios'
import { setAllBlogs } from '../../../redux/features/blogSlice'

const Header: React.FC = () => {
  const dispatch = useAppDispatch()
  const allBlogs = useAppSelector((state) => state.blogReducers.allBlogs)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/blog/blogs`)
        const data = await response.data.data
        dispatch(setAllBlogs(data))
      } catch (error) {
        console.error('Error fetching blog data:', error)
      }
    }
    if (allBlogs.length > 0) return
    fetchData()
  }, [])
  return (
    <>
      <Box className="header-container">
        <AppBar position="static" className="header-bar">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Title />
              <Box sx={{ flexGrow: 1 }}></Box>
              <HeaderMenu />
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </>
  )
}

export default Header
