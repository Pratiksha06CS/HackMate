import "./Stats.css";
import { FaUsers, FaTrophy, FaRocket, FaBrain } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

function Counter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          let start = 0;
          const duration = 2000; // 2 seconds
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;

            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

function Stats() {
  return (
    <section className="stats">
      <div className="stats-header">
        <span className="stats-badge">Our Impact</span>
        <h2>HackMate by the Numbers</h2>
        <p>
          Thousands of students are already discovering teammates and hackathons
          through HackMate.
        </p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <FaUsers />
          </div>
          <h3>
            <Counter end={2500} suffix="+" />
          </h3>
          <p>Students Connected</p>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <FaRocket />
          </div>
          <h3>
            <Counter end={1200} suffix="+" />
          </h3>
          <p>Teams Formed</p>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <FaTrophy />
          </div>
          <h3>
            <Counter end={350} suffix="+" />
          </h3>
          <p>Hackathons Listed</p>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <FaBrain />
          </div>
          <h3>
            <Counter end={96} suffix="%" />
          </h3>
          <p>AI Match Accuracy</p>
        </div>
      </div>
    </section>
  );
}

export default Stats;