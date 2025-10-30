const socialInfo = [
  {
    // 1. Ikon GitHub (menggantikan Facebook)
    icon: (
      <svg
        className="w-6 h-6 hover:text-gray-500 duration-150"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.203 2.398.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.85-2.339 4.695-4.566 4.942.359.308.678.92.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
          clipRule="evenodd"
        />
      </svg>
    ),
    href: "https://github.com/PeGaSusEng", 
  },
  {
    
    icon: (
      <svg
        className="w-6 h-6 hover:text-gray-500 duration-150"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.217.598 1.77 1.1.554.545 1.112.8 1.77 1.1.638.264 1.363.42 2.428.464 1.066.05 1.405.06 4.122.06s-3.056-.01-4.122-.06c-1.065-.05-1.79-.217-2.428-.465a4.883 4.883 0 01-1.77-1.1c-.545-.554-.8-1.112-1.1-1.77-.264-.638-.42-1.363-.464-2.428C2.01 15.056 2 14.717 2 12s.01-3.056.06-4.122c.05-1.065.217-1.79.465-2.428.254-.66.598-1.217 1.1-1.77.545-.554 1.112-.8 1.77-1.1.638-.264 1.363.42 2.428.464C8.944 2.01 9.283 2 12 2zM8 12a4 4 0 108 0 4 4 0 00-8 0zm4-6a6 6 0 100 12 6 6 0 000-12zm4.5 1.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
          clipRule="evenodd"
        />
      </svg>
    ),
    href: "https://www.instagram.com/abbenn2121/", 
  },
  {
    
    icon: (
      <svg
        className="w-6 h-6 hover:text-gray-500 duration-150"
        fill="none"
        viewBox="0 0 28 28"
      >
        <g clipPath="url(#clip0_1213_3074)">
          <path
            fill="currentColor"
            d="M25.927 0H2.067C.924 0 0 .902 0 2.018v23.959C0 27.092.924 28 2.067 28h23.86C27.07 28 28 27.092 28 25.982V2.018C28 .902 27.07 0 25.927 0zM8.307 23.86H4.151V10.495h4.156V23.86zM6.229 8.673a2.407 2.407 0 110-4.812 2.406 2.406 0 010 4.812zM23.86 23.86h-4.15v-6.497c0-1.547-.028-3.543-2.16-3.543-2.16 0-2.49 1.69-2.49 3.434v6.606h-4.144V10.495h3.98v1.826h.056c.552-1.05 1.908-2.16 3.926-2.16 4.206 0 4.982 2.767 4.982 6.366v7.333z"
          />
        </g>
        <defs>
          <clipPath id="clip0_1213_3074">
            <path fill="#fff" d="M0 0h28v28H0z" />
          </clipPath>
        </defs>
      </svg>
    ),
    href: "https://www.linkedin.com/in/la-ode-muhammad-abin-akbar/", 
  },
];

const Footer = () => (
  <footer>
    <div className="custom-screen pt-16">
      <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
        <p className="text-gray-600">© 2025 PeGaSusEng. All rights reserved.</p>
        <div className="flex items-center gap-x-6 text-gray-400 mt-6">
          {socialInfo.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              aria-label="social media"
              target="_blank" 
              rel="noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;