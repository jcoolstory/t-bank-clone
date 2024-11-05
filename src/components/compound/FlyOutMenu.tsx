import React from 'react'
import { FlyOut, FlyOutContext } from './FlyOut'


export default function FlyoutMenu() {
  return (
    <FlyOut>
      <FlyOut.Toggle />
      <FlyOut.List >
        <FlyOut.Item>
            Edit
        </FlyOut.Item>
        <FlyOut.Item>
            Delete
        </FlyOut.Item>
      </FlyOut.List>
    </FlyOut>
  )
}

