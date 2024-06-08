import React from 'react'
import { menu_list } from '../../assets/assets'
import '../Home/Exploremenu.css'

function Exploremenu({category,subcategory}) {
  return (
    <div className='menu-container' id="menu">
      <h1>Explore our Menu</h1><br/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus a quos ad temporibus neque, deleniti doloremque error.</p>
      <div className='menu-items-container'>
        {
            menu_list.map((item,index)=>{
                return(
                    <div className='menu-item' key={index} onClick={() => subcategory(prev => prev == item.menu_name ? 'All' : item.menu_name)}>
                       
                        <img src={item.menu_image} className={category===item.menu_name?'active_image':""} />
                        <h1>{item.menu_name}</h1>
                    </div>
                )


            })
        }
      </div>
      <hr/>
    </div>

  )
}

export default Exploremenu
