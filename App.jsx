import React from "react";
import "./index.css";
import logo from "./assets/logo.png";

function App() {
  return (
    <div className="font-sans text-gray-800">
      <header className="bg-orange-600 text-white p-4 flex justify-between items-center shadow-md">
        <img src={logo} alt="Nirbhik Logo" className="h-12" />
        <h1 className="text-xl font-bold">Nirbhik Suraksha Pvt. Ltd.</h1>
      </header>

      <main className="p-6">
        <section className="text-center my-8">
          <h2 className="text-3xl font-bold mb-4">Your Safety, Our Mission</h2>
          <p>We provide professional security services across Assam.</p>
        </section>

        <section className="my-8">
          <h3 className="text-2xl font-semibold mb-2">Our Services</h3>
          <ul className="list-disc pl-5">
            <li>Residential Security</li>
            <li>Corporate/Industrial Security</li>
            <li>Event Security</li>
            <li>Personal Bodyguards</li>
            <li>24/7 Monitoring</li>
          </ul>
        </section>

        <section className="my-8">
          <h3 className="text-2xl font-semibold mb-2">Join Us</h3>
          <form className="grid gap-4 max-w-xl" onSubmit={(e) => e.preventDefault()}>
            <input className="p-2 border rounded" type="text" placeholder="Full Name" required />
            <input className="p-2 border rounded" type="tel" placeholder="Phone Number" required />
            <input className="p-2 border rounded" type="email" placeholder="Email Address" required />
            <textarea className="p-2 border rounded" placeholder="Why do you want to join?" rows="3" />
            <input className="p-2 border rounded" type="file" accept=".pdf,.doc,.docx" />
            <button className="bg-orange-600 text-white p-2 rounded" type="submit">Submit Application</button>
          </form>
        </section>

        <section className="my-8">
          <h3 className="text-2xl font-semibold mb-2">Contact Us</h3>
          <p><strong>Address:</strong> Silpukhuri, Near Maharshi Vidya Mandir School, Guwahati – 781003</p>
          <p><strong>Phone:</strong> +91 7099076925</p>
          <p><strong>Email:</strong> contact@nirbhiksuraksha.in</p>
        </section>
      </main>

      <footer className="bg-gray-200 text-center p-4 mt-8">
        &copy; 2025 Nirbhik Suraksha Pvt. Ltd. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
