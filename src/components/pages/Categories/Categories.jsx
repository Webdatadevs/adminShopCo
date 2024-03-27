import React, { useEffect } from 'react'
import MainLayout from '../MainLayout'
import { useDispatch, useSelector } from 'react-redux'
import getCategories from '../../../fetch/getCategories'
import CategoriesCard from './CategoriesCard'
import SkeletonComponent from '../Product/SkeletonComponent'

const Categories = () => {
  const {categories, isLoadingCategories} = useSelector(state => state.categories)
  const dispatch = useDispatch()
  useEffect(() =>{
    getCategories(dispatch)
  } , [])
  const data = [1, 2, 3, 4, 5]
  return (
    <>
      <MainLayout>
        {
          isLoadingCategories && categories.length ===0 
        ? data.map(item => (
          <SkeletonComponent key={item}/>
      ))
      :
          categories.map((item) => (
            <CategoriesCard key={item.id} item={item}/>
          ))
        }
      </MainLayout>
    </>
  )
}

export default Categories