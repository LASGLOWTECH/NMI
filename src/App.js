
import './index.css';

function App() {
  return (
    <div className="App">
      <div class="max-w-md mx-auto bg-grey-400 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
          <div class="md:shrink-0">
            <img class="h-48 w-full object-cover md:h-full md:w-48" src="/img/building.jpg" alt="Modern building architecture" />
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
            <a href="/" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
            <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
          </div>
        </div>
      </div>

      <h1 className="pt-5 mx-5 text-yellow-500 font-sans hover:font-serif text-justify text-4xl font-bold underline">
        Hello world!
      </h1>
      <p className='mx-5'>So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me.
        I don't know if it was divine intervention or the kinship of all living things but I tell you
        Jerry at that moment, I was a marine biologist</p>
      <img class="w-16 md:w-32 lg:w-48" src="/logo512.png" alt='logo'></img>



    </div>

  );
}

export default App;
