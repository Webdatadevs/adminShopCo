import React, { useEffect } from 'react'
import MainLayout from '../MainLayout'
import { useDispatch, useSelector } from 'react-redux'
import getCategories from '../../../fetch/getCategories'
import CategoriesCard from './CategoriesCard'

const Categories = () => {
  const {categories} = useSelector(state => state.categories)
  const dispatch = useDispatch()
  useEffect(() =>{
    getCategories(dispatch)
  } , [])

  return (
    <>
      <MainLayout>
        {
          categories.map((item) => (
            <CategoriesCard key={item.id} item={item}/>
          ))
        }
      </MainLayout>
    </>
  )
}

export default Categories