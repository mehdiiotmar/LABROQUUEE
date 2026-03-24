import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <nav class="navbar">
    <div class="nav-container">
      <div class="nav-logo">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="8" fill="url(#gradient)"/>
          <path d="M16 8L24 16L16 24L8 16L16 8Z" fill="white"/>
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="32" y2="32">
              <stop offset="0%" stop-color="#2563eb"/>
              <stop offset="100%" stop-color="#0ea5e9"/>
            </linearGradient>
          </defs>
        </svg>
        <span>ModernUI</span>
      </div>
      <div class="nav-links">
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#about">About</a>
        <button class="btn-primary">Get Started</button>
      </div>
    </div>
  </nav>

  <section class="hero">
    <div class="hero-content">
      <div class="badge">
        <span class="badge-dot"></span>
        <span>New: AI-powered features released</span>
      </div>
      <h1 class="hero-title">
        Build amazing products with modern design
      </h1>
      <p class="hero-subtitle">
        A beautiful, responsive platform that helps you create exceptional user experiences.
        Start building today with our comprehensive design system.
      </p>
      <div class="hero-actions">
        <button class="btn-primary btn-large">Start Free Trial</button>
        <button class="btn-secondary btn-large">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
          </svg>
          Watch Demo
        </button>
      </div>
      <div class="social-proof">
        <div class="avatars">
          <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" alt="User" />
          <img src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" alt="User" />
          <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" alt="User" />
          <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" alt="User" />
        </div>
        <div class="social-text">
          <strong>12,000+</strong> developers already building
        </div>
      </div>
    </div>
    <div class="hero-visual">
      <div class="floating-card card-1">
        <div class="card-icon" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
          </svg>
        </div>
        <div class="card-content">
          <div class="card-title">Lightning Fast</div>
          <div class="card-value">99.9% Uptime</div>
        </div>
      </div>
      <div class="floating-card card-2">
        <div class="card-icon" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
          </svg>
        </div>
        <div class="card-content">
          <div class="card-title">Revenue</div>
          <div class="card-value">+24.5%</div>
        </div>
      </div>
      <div class="floating-card card-3">
        <div class="card-icon" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
          </svg>
        </div>
        <div class="card-content">
          <div class="card-title">Active Users</div>
          <div class="card-value">8,429</div>
        </div>
      </div>
    </div>
  </section>

  <section class="features" id="features">
    <div class="features-header">
      <h2 class="section-title">Everything you need</h2>
      <p class="section-subtitle">Powerful features to help you build and scale your product</p>
    </div>
    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <path d="M3 9h18M9 21V9"/>
          </svg>
        </div>
        <h3>Responsive Design</h3>
        <p>Beautiful layouts that adapt seamlessly to any screen size or device.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
            <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
        <h3>Modular Components</h3>
        <p>Reusable components that speed up development and ensure consistency.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 6v6l4 2"/>
          </svg>
        </div>
        <h3>Real-time Updates</h3>
        <p>Live data synchronization keeps your application always up to date.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="11" width="18" height="11" rx="2"/>
            <path d="M7 11V7a5 5 0 0110 0v4"/>
          </svg>
        </div>
        <h3>Secure by Default</h3>
        <p>Enterprise-grade security built in from the ground up.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
          </svg>
        </div>
        <h3>Performance</h3>
        <p>Optimized for speed with minimal bundle sizes and fast load times.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
            <line x1="12" y1="22.08" x2="12" y2="12"/>
          </svg>
        </div>
        <h3>Easy Integration</h3>
        <p>Simple API and comprehensive documentation make integration a breeze.</p>
      </div>
    </div>
  </section>

  <section class="stats">
    <div class="stats-container">
      <div class="stat-item">
        <div class="stat-value">99.9%</div>
        <div class="stat-label">Uptime SLA</div>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <div class="stat-value">12K+</div>
        <div class="stat-label">Active Users</div>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <div class="stat-value">50M+</div>
        <div class="stat-label">API Calls/Day</div>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <div class="stat-value">24/7</div>
        <div class="stat-label">Support</div>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="footer-content">
      <div class="footer-brand">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="8" fill="url(#gradient2)"/>
          <path d="M16 8L24 16L16 24L8 16L16 8Z" fill="white"/>
          <defs>
            <linearGradient id="gradient2" x1="0" y1="0" x2="32" y2="32">
              <stop offset="0%" stop-color="#2563eb"/>
              <stop offset="100%" stop-color="#0ea5e9"/>
            </linearGradient>
          </defs>
        </svg>
        <p>Building the future of web development</p>
      </div>
      <div class="footer-links">
        <div class="footer-column">
          <h4>Product</h4>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#docs">Documentation</a>
        </div>
        <div class="footer-column">
          <h4>Company</h4>
          <a href="#about">About</a>
          <a href="#blog">Blog</a>
          <a href="#careers">Careers</a>
        </div>
        <div class="footer-column">
          <h4>Legal</h4>
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
          <a href="#security">Security</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2026 ModernUI. All rights reserved.</p>
    </div>
  </footer>
`
