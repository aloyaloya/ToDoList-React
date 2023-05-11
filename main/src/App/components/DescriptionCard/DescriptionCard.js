import { Icon } from '@iconify/react';
import { takeCategories } from '../App/generic';

export default function DescriptionCard({target, handleClose }) {
    return (
        <div className="description-card p-5 h-full card bg-base-300 rounded-box">
            <div className='title'>
                <div className='flex items-center p-1 text-2xl font-extrabold'>
                    <Icon 
                        className='mr-2' 
                        icon="octicon:dot-fill-16" 
                        color={takeCategories(target)} 
                        width="22" height="22"
                    />
                    {target.targetName}
                </div>
                <button onClick={handleClose} className='btn-ghost btn w-12 justify-center p-1'>
                    <Icon className='btn-icon' icon="basil:cross-outline" width="28" height="28" />
                </button>
            </div>
            <div className='flex items-center p-1 text-xl mt-4'>{target.description}</div>
        </div>
    )
}
