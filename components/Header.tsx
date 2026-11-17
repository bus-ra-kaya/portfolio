import { GitPullRequest, Settings } from "lucide-react";
import Link from "next/link";


export default function Header (){

  return (
    <header className="flex items-center justify-between border-b border-line py-8">
      <h1 className="font-display text-2xl font-medium">
        <Link href="/" className="transition-opacity hover:opacity-80 flex gap-1">
          <GitPullRequest className="text-accent" aria-hidden='true'/>
          Büşra Kaya
        </Link>
      </h1>
      <nav 
        className="flex gap-7 text-[0.95rem] text-muted"
        aria-label="Main navigation"
      >
        <a
          href="https://github.com/bus-ra-kaya"
          target="_blank"
          rel="noreferrer noopener"
          className="border-b border-transparent py-1 transition-colors hover:border-accent hover:text-accent active:border-accent-second active:text-accent-second"
        >
          <span className="sr-only"> (opens in a new tab)</span>
          Github
        </a>

        <a
          href="https://linkedin.com/in/bus-ra-ka-ya"
          target="_blank"
          rel="noreferrer noopener"
          className="border-b border-transparent py-1 transition-colors hover:border-accent hover:text-accent active:border-accent-second active:text-accent-second"
        >
          <span className="sr-only"> (opens in a new tab)</span>
          Linkedin
      </a>
        <button 
          type='button' 
          className="border-b border-transparent py-1 transition-colors hover:border-accent hover:text-accent active:text-accent-second active:border-accent-second cursor-pointer"
          aria-label='settings'>
          <Settings aria-hidden='true'/>
        </button>
      </nav>
    </header>
  )
}