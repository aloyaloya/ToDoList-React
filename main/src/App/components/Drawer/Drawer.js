import React from 'react';
import { Icon } from '@iconify/react';

export default function Drawer({ targetsCategory, takeCategoryFilter }) {
  return (
    <div className="p-5 h-full card bg-base-300 rounded-box">
      <div className='text-2xl mt-2 mb-2 pl-2 drawer-title font-extrabold'>Categories</div>
      <div className='grid mt-1'>
        {targetsCategory.map((category) => {
          return (
            <button className='btn-ghost btn justify-start mt-1'>
              <Icon className='mr-2' icon="octicon:dot-fill-16" color={category.color} width="18" height="18"/>
              {category.categoryName}
            </button>
          )
        })}
      </div>
  </div>
  )
}
