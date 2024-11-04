import { memo, useId, useMemo } from 'react';
import './bar.css';
import { BarColors, TSBarProps } from './bar.types';
import { RatioItems } from '../type';

const TSBar = memo(({items}: TSBarProps) => {
    
    return <div className='tsbar-container' >
        {items.map((item, i)=> (
           <TSBarItem key={i} {...item} /> 
        ))}
    </div>
})

const TSBarItem = memo(({ratio, id}: RatioItems) => {
    return  <div className='tsbar-item' style={{width: `${ratio}%`, backgroundColor: BarColors[id]}}></div>
});

export default TSBar