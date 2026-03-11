import data from '../data/data'

function Hero() {

  const lang = 'eng'  

  const hero = data[lang].heroSection

  return (
    <section className="flex justify-between items-center px-16 py-20">

      <div className="max-w-xl">

        <p className="text-purple-600 font-semibold">
          {hero.greeting}
        </p>

        <h1 className="text-5xl font-bold mt-4">
          {hero.title}
        </h1>

        <p className="mt-6 text-gray-600">
          {hero.description}
        </p>

        <div className="flex gap-4 mt-6">

          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg">
            {hero.hireBtn}
          </button>

          <button className="border px-6 py-3 rounded-lg">
            {hero.github}
          </button>

          <button className="border px-6 py-3 rounded-lg">
            {hero.linkedin}
          </button>

        </div>

      </div>

      <div>
        <img
          src={hero.profileImage}
          alt="profile"
          className="w-[400px] rounded-xl"
        />
      </div>

    </section>
  )
}

export default Hero