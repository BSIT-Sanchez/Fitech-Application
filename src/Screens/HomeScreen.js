import React from 'react'
import Layout from '../Layout/Layout'
import Banner from '../Components/Banner'
import ListsCategories from '../Components/ListsCategories'

const HomeScreen = () => {
  return(
    <Layout>
      <Banner/>
      <ListsCategories/>
    </Layout>
  )
}
export default HomeScreen