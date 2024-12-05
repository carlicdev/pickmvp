import React from 'react'
import { getLivePicks } from '../services/graphql'
import PickCard from './PickCard';

const LastPicks = async () => {
    const picks = await getLivePicks();

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