/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Features from './components/Features';
import DataShowcase from './components/DataShowcase';
import FooterCTA from './components/FooterCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-indigo-500/30">
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Features />
        <DataShowcase />
      </main>
      <FooterCTA />
    </div>
  );
}
