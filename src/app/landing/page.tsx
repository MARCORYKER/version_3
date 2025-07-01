"use client";

import { useState } from "react";
import Image from "next/image";
import background from "../public/background.jpg"; // rename your cosmic bg to this

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
      className="min-h-screen text-green-400 font-mono px-4 py-8"
      style={{
        backgroundImage: `url('/background.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <nav className="flex justify-between items-center mb-8">
        <div className="space-x-6">
          <a href="#how" className="hover:underline">How It Works</a>
          <a href="#testimonials" className="hover:underline">Testimonials</a>
        </div>
        <div className="text-xl font-bold">WRIZZ.AI</div>
      </nav>

      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Rizz Beyond Earth.</h1>
        <p className="text-lg md:text-xl mb-6">
          WRIZZ AI — Your intergalactic Wingman for Game That’s Out of This World.
        </p>
        <button className="border-2 px-6 py-3 rounded-lg hover:bg-green-600/20">
          Launch Rizz 🚀
        </button>
      </section>

      <section id="how" className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-6">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="border p-6 rounded-xl bg-black/20">
            <p className="text-xl font-medium">Pick a vibe</p>
            <p className="mt-2 text-2xl">😊😍👽</p>
          </div>
          <div className="border p-6 rounded-xl bg-black/20">
            <p className="text-xl font-medium">Type the situation</p>
            <p className="mt-2 text-3xl">≡</p>
          </div>
          <div className="border p-6 rounded-xl bg-black/20">
            <p className="text-xl font-medium">Get rizz, launch convo</p>
            <p className="mt-2 text-3xl">👽</p>
          </div>
        </div>
      </section>

      <section id="testimonials" className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-4">Testimonials</h2>
        <div className="flex items-center space-x-4 border p-6 rounded-xl bg-black/20 max-w-xl mx-auto">
          <span className="text-3xl">👽</span>
          <p className="text-lg">Bro even Martians sliding into DMs with this tool.</p>
        </div>
      </section>

      <section className="border p-6 rounded-xl bg-black/20 max-w-xl mx-auto">
        <label className="block mb-2 font-medium">Tone</label>
        <select
          value={tone}
          onChange={(e) => setTone(e.target.value)}
          className="w-full bg-black/30 border p-2 rounded mb-4"
        >
          <option>Funny</option>
          <option>Romantic</option>
          <option>Savage</option>
          <option>Poetic</option>
          <option>Simp Mode</option>
        </select>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={3}
          className="w-full bg-black/30 border p-3 rounded mb-4 text-white placeholder-gray-400"
          placeholder="Type your message or the situation..."
        />

        <button
          onClick={handleGenerate}
          className="w-full border-2 py-3 rounded-lg hover:bg-green-600/20 font-bold"
        >
          Generate Rizz
        </button>

        {output && (
          <p className="mt-4 text-green-300 text-center text-sm">{output}</p>
        )}
      </section>
    </div>
  );
}
