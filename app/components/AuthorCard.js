import { FaUserAlt } from "react-icons/fa";

const AuthorCard = ({author}) => {
  return (
    <div className='max-w-7xl mx-auto w-full'>
        <div className='card shadow p-5 w-full'>
          <div className="flex gap-5 items-center">
            <span className="p-5 border border-slate-200 text-5xl text-slate-200">
              <FaUserAlt />
            </span>
            <p className="font-black text-xl">Publicado por {author.name}</p>
          </div>
          <p className="text-slate-500 mt-5">Más artículos por {author.name}</p>
        </div>
    </div>
  )
}

export default AuthorCard