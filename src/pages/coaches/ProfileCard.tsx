import { Link } from 'react-router-dom';

interface CoachesProps {
  name: string
  img: string
  specials: string[]
}

const ProfileCard: React.FC<CoachesProps> = ({ name, img, specials }) => {
  return (
    //  shadow-[0_25px_60px_-10px_rgba(226,0,0,0.35)]
    <div className="w-full max-w-sm mx-auto bg-[#0f1e35] rounded-2xl overflow-hidden group transition">
      <div className="p-6 flex flex-col items-center text-center relative">
        {/* Profile image with glow */}
        <div className="relative mb-4">
          <div className="absolute inset-0 rounded-full blur-3xl opacity-30 bg-gradient-to-tr from-[#e20000] to-[#ff6b6b]" />
          <img
            loading="lazy"
            className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-[#1f324f] object-cover shadow-lg"
            src={img}
            alt={`${name} profile`}
          />
        </div>

        <h5 className="text-xl sm:text-2xl font-semibold text-white mb-2 truncate">{name}</h5>

        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {specials.map((s, i) => (
            <span
              key={i}
              className="text-[10px] sm:text-xs font-medium px-3 py-1 rounded-full bg-[#1b2f5a] text-[#f0e9f9] ring-1 ring-[#e20000]/60"
            >
              {s}
            </span>
          ))}
        </div>

                 <Link to={`/coaches/${encodeURIComponent(name)}`} className="mt-2 w-full max-w-[220px] rounded-full px-6 py-3 bg-gradient-to-r from-[#e20000] to-[#c41f1f] text-white font-semibold shadow-lg hover:brightness-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e20000]/70 transition inline-block text-center">
          Learn More
        </Link>
      </div>
    </div>
  )
}

export default ProfileCard
