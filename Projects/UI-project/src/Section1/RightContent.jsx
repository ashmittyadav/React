import React from 'react'
import ImageContainer from './ImageContainer'

const RightContent = () => {
  return (
    <div className='flex flex-nowrap overflow-x-auto rounded-4xl justify-between p-4 h-4/4 w-3/4 gap-10'>
        <ImageContainer img = 'https://tse2.mm.bing.net/th/id/OIP.H9JWgNdNsxznPKHIBRzRTwAAAA?cb=thfc1falcon4&rs=1&pid=ImgDetMain&o=7&rm=3'
         message = 'Prime customers, that have access to bank credit and are satisfied with the current product' 
         status = 'Satisfied'
         number = "1"/>
        <ImageContainer img = 'https://thumbs.dreamstime.com/b/vertical-photo-woman-s-hand-using-phone-vertical-photo-woman-s-hand-using-phone-270965947.jpg' 
        status = 'Undeserved'
        number = "2"/>
        <ImageContainer img = 'https://static.vecteezy.com/system/resources/thumbnails/027/715/686/large/vertical-of-woman-using-phone-video.jpg'
        status = 'Underbanked'
        number = "3"/>
    </div>
  )
}

export default RightContent
