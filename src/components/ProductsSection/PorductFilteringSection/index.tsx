import React, {useState, useEffect} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

import './index.css'

interface Category {
  name : string,
  categoryId : string
}

type Props = {
  onChangeSearchText : any
}

const categoryOptions: Category[] = [
  {
    name: 'Clothing',
    categoryId: '1',
  },
  {
    name: 'Electronics',
    categoryId: '2',
  },
  {
    name: 'Appliances',
    categoryId: '3',
  },
  {
    name: 'Grocery',
    categoryId: '4',
  },
  {
    name: 'Toys',
    categoryId: '5',
  },
]

const ratingList = [
  {
    ratingId : "4",
    ratingText : "4.0 +",
  },
  {
    ratingId : "3",
    ratingText : "3.0 +",
  },
  {
    ratingId : "2",
    ratingText : "2.0 +",
  },
  {
    ratingId : "1",
    ratingText : "1.0 +",
  },
]

export type FilteredGroup = {
  searchText : string,
  category : string,
  rating : string
}


const ProductFilteringSection = (props : Props) => {

  const [filteredGroup, changeFilteredGroup] = useState<FilteredGroup>({
    searchText : "",
    category : "",
    rating : ""
  })

  const [showMobileFilters, showHideMobileFilter] = useState(false)

  const onChangeSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newSearchFilter = {...filteredGroup,searchText: e.target.value }
      changeFilteredGroup(newSearchFilter)
      props.onChangeSearchText(filteredGroup)
  }

  const changeProductsRating: any = (id : any) => {
    const newRatingFilter = {...filteredGroup, rating: id}
    changeFilteredGroup(newRatingFilter)
    console.log(filteredGroup)
    props.onChangeSearchText(filteredGroup)
  }

  const changeProductCategory : any = (categoryId : string) => {
    const newCategoryFilter = {...filteredGroup, category: categoryId }
    changeFilteredGroup(newCategoryFilter)
    props.onChangeSearchText(filteredGroup)
  }

  const clearFilters = () => {
    changeFilteredGroup({
      searchText : "",
      category : "",
      rating : ""
    })
  }

  useEffect( ()=> {
    props.onChangeSearchText(filteredGroup)
  }, [filteredGroup, props])


  return (
    <div className="product-filtering-section">
        <div className="searching-section">
            <input type="search" onChange={onChangeSearchText} />
            <AiOutlineSearch />
        </div>

        <div className='mobile-filters-button'>
            <button type="button" onClick={() => showHideMobileFilter(!showMobileFilters)} className="clear-filters-button">Filters</button>
            <div style={{ display : (showMobileFilters ? "none" : "block")}} className=''>
                <div className='mobile-category-section'>
                  <h4>Category</h4>
                  {
                    categoryOptions.map( item => 
                      <button type="button" className='category-button' onClick={()=> changeProductCategory(item.categoryId)}>
                        {item.name}
                      </button>
                    )
                  }
              </div>

              <div className="mobile-rating-section">
                  <h4>Rating</h4>
                  <ul className="rating-list">
                    {
                      ratingList.map(item => (
                        <li><button onClick={() => changeProductsRating(item.ratingId)}>{item.ratingText}</button></li>
                      ))
                    }
                  </ul>
              </div>

              <button type="button" onClick={clearFilters} className="clear-filters-button absolute-display-button">Clear Filters</button>
            </div>
        </div>

        <div className='category-section'>
            <h4>Category</h4>
            {
              categoryOptions.map( item => 
                <button type="button" className='category-button' onClick={()=> changeProductCategory(item.categoryId)}>
                  {item.name}
                </button>
              )
            }
        </div>

        <div className="rating-section">
            <h4>Rating</h4>
            <ul className="rating-list">
              {
                ratingList.map(item => (
                  <li><button onClick={() => changeProductsRating(item.ratingId)}>{item.ratingText}</button></li>
                ))
              }
            </ul>
        </div>

        <button type="button" onClick={clearFilters} className="clear-filters-button clear-button">Clear Filters</button>
    </div>
  )
}

 export default ProductFilteringSection