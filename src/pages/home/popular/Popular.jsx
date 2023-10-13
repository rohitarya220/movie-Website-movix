import React, { useState } from 'react'
import ContentWrapper from '../../../componants/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../componants/switchTabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../componants/carousel/Carousel'

function Popular() {
  const [endpoint, setEndpoint] = useState('movie')

  const {data, loading} = useFetch(`/${endpoint}/popular`)

  const onTabChange = (tab) =>{
    setEndpoint(tab === 'Movies'? 'movie': 'tv')
  }

  return (
   <div className=' carouselSection'>
    <ContentWrapper>
    <span className="carouselTitle">What's Popular</span>
    <SwitchTabs data ={['Movies', 'TV Shows']} onTabChange= {onTabChange} />
    </ContentWrapper>
    <Carousel endpoint={endpoint} data={data?.results} loading={loading} />
   </div>
  )
}

export default Popular