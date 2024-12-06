
import PickCard from './PickCard';

const LastPicks = async ({picks}) => {
    const livePicks = picks.filter((pick) => pick.result === null)

  return (
    <>
    {
        livePicks.slice(0,3).map((pick) => (
            <PickCard pick={pick} key={pick.id} />
        ))
    }
    </>
  )
}

export default LastPicks