import React from 'react';
import { Gamepad2, Users, Trophy, Clock } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            Monster Survivors
          </h1>
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
            Survive endless waves of monsters in this thrilling action-packed adventure game where every decision matters.
          </p>
        </div>
      </header>

      {/* Game Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="aspect-[16/9] w-full bg-black rounded-lg overflow-hidden shadow-xl mb-12">
          <iframe
            src="https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html"
            className="w-full h-full"
            title="Monster Survivors Game"
            allow="fullscreen"
          />
        </div>

        {/* Game Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Game Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Gamepad2 className="w-8 h-8" />}
              title="Intuitive Controls"
              description="Easy to learn, challenging to master gameplay mechanics"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8" />}
              title="Multiple Characters"
              description="Choose from various unique characters with special abilities"
            />
            <FeatureCard
              icon={<Trophy className="w-8 h-8" />}
              title="Achievement System"
              description="Unlock achievements and compete for high scores"
            />
            <FeatureCard
              icon={<Clock className="w-8 h-8" />}
              title="Endless Gameplay"
              description="New challenges await with each playthrough"
            />
          </div>
        </section>

        {/* Game Description */}
        <section className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Monster Survivors</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 mb-4">
              Monster Survivors is an action-packed survival game where players must navigate through
              waves of increasingly challenging monsters. With each survival milestone, players unlock
              new abilities and power-ups, creating unique combinations for different playstyles.
            </p>
            <p className="text-gray-700 mb-4">
              The game features a dynamic difficulty system that adapts to your skill level, ensuring
              an engaging experience for both casual and hardcore gamers. Collect experience points,
              level up your character, and discover rare items as you progress through the game.
            </p>
            <p className="text-gray-700">
              Whether you're looking for a quick gaming session or an extended survival challenge,
              Monster Survivors offers endless entertainment with its roguelike elements and
              procedurally generated content.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2024 Monster Survivors. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;