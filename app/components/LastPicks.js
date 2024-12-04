import React from 'react'
import { getPicks } from '../services/graphql'
import PickCard from './PickCard';

const LastPicks = async () => {
    const picks = await getPicks();

  return (
    <>
    {
        picks.slice(0,3).map((pick) => (
            <PickCard pick={pick} key={pick.id} />
        ))
    }
    </>
  )
}

export default LastPicks