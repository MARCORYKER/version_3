"use client";

import { useState } from "react";

export default function LandingPage() {
  const [tone, setTone] = useState("Funny");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setOutput(`(${tone} Rizz) Cooking your message... 🔥`);
    try {
      const res = await fetch("/api/rizz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input, tone }),
      });
      const data = await res.json();
      setOutput(data.output);
    } catch (e) {
      setOutput("Error cooking Rizz. Check your connection, mawa.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen text-green-400 px-4 py-8 font-[Orbitron]"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1477201389073-1863f668fac0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <nav className="flex justify-between items-center mb-12 text-green-400">
        <div className="space-x-6 text-sm md:text-base">
          <a href="#how" className="no-underline hover:underline hover:text-green-300 transition-all duration-200 text-inherit">How It Works  </a>
          <a href="#testimonials" className="no-underline hover:underline text-inherit" > Testimonials</a>
        </div>
        {/* <div className="text-xs md:text-sm text-green-300 italic">Test Color</div> */}
        <div className="text-2xl font-bold tracking-wider">WRIZZ.AI</div>
      </nav>

      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow-neon text-green-300">Rizz Beyond Earth.</h1>
        <p className="text-lg md:text-xl mb-6">
          WRIZZ AI — Your intergalactic Wingman for Game That’s Out of This World.
        </p>
        <button className="px-6 py-3 rounded-lg bg-black/30 backdrop-blur-lg shadow-neon hover:scale-105 transition-all">
          Launch Rizz 🚀
        </button>
      </section>

      <section id="how" className="mb-16">
  <h2 className="text-3xl font-semibold text-center mb-6 text-shadow-neon">How It Works</h2>

  <div className="flex flex-wrap justify-center gap-6 mb-6">
    {/* Left Card */}
    <div className="w-[300px] rounded-xl bg-black/30 backdrop-blur-lg shadow-neon p-6 text-center transition hover:scale-105">
      <p className="text-xl font-medium">Pick a vibe</p>
      <p className="mt-2 text-2xl">😊😍👽</p>
    </div>

    {/* Right Card */}
    <div className="w-[300px] rounded-xl bg-black/30 backdrop-blur-lg shadow-neon p-6 text-center transition hover:scale-105">
      <p className="text-xl font-medium">Type the situation</p>
      <p className="mt-2 text-3xl">≡</p>
    </div>
  </div>

  {/* Bottom Card */}
  <div className="flex justify-center">
    <div className="w-[300px] rounded-xl bg-black/30 backdrop-blur-lg shadow-neon p-6 text-center transition hover:scale-105">
      <p className="text-xl font-medium">Get rizz, launch convo</p>
      <p className="mt-2 text-3xl">👽</p>
    </div>
  </div>
</section>




 <section id="testimonials" className="mb-16">
  <h2 className="text-3xl font-semibold text-center mb-4 text-shadow-neon">Testimonials</h2>

  <div className="bg-black/30 backdrop-blur-lg shadow-neon p-6 rounded-xl max-w-xl mx-auto text-center">
    <div className="text-3xl mb-2">👽</div>
    <p className="text-lg">Bro even Martians sliding into DMs with this tool.</p>
  </div>
</section>


      <section className="bg-black/30 backdrop-blur-lg shadow-neon px-4 py-6 rounded-xl max-w-md mx-auto text-center">
  <label className="block mb-2 font-medium text-green-300 text-center">Tone</label>

  <div className="flex justify-center mb-4">
    <select
      value={tone}
      onChange={(e) => setTone(e.target.value)}
      className="bg-black/40 backdrop-blur border-none p-2 rounded text-green-200 w-4/5 text-center"
    >
      <option>Funny</option>
      <option>Romantic</option>
      <option>Savage</option>
      <option>Poetic</option>
      <option>Simp Mode</option>
    </select>
  </div>

  <div className="flex justify-center mb-4">
    <textarea
      value={input}
      onChange={(e) => setInput(e.target.value)}
      rows={3}
      className="bg-black/40 backdrop-blur-lg border-none shadow-inner text-green-200 placeholder-green-500 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 w-4/5"
      placeholder="Type your message or the situation..."
    />
  </div>

  <div className="flex justify-center">
    <button
      onClick={handleGenerate}
      className="py-2 px-6 rounded-lg bg-black/40 text-green-300 shadow-neon hover:scale-105 transition-all duration-300 font-bold"
    >
      Generate Rizz
    </button>
  </div>

{output && (
  <>
    <p className="mt-4 text-green-300 text-center text-sm">{output}</p>
    <div className="flex justify-center gap-4 mt-2">
      <button
        onClick={() => {
          navigator.clipboard.writeText(output);
        }}
        className="px-4 py-1 text-sm border border-green-400 text-green-300 rounded hover:bg-green-400/10 transition"
      >
        Copy
      </button>
      <button
        onClick={() => {
          setInput("");
          setOutput("");
        }}
        className="px-4 py-1 text-sm border border-red-400 text-red-300 rounded hover:bg-red-400/10 transition"
      >
        Clear
      </button>
    </div>
  </>
)}

</section>

    </div>
  );
}

