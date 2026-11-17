export default function Footer () {

  return (
    <footer className="flex flex-col gap-4 p-4 items-center ">
      <div className="p-10 text-center">
        <h3 className="text-4xl mb-8 font-display">Let&apos;s create together!</h3>
      <a 
        href="mailto:busrakaya.dev@gmail.com"
        className="border border-line p-4 rounded-2xl hover:border-accent text-xl opacity-80 hover:opacity-100"
      >
        busrakaya.dev@gmail.com
      </a>
      </div>

      <p>2026 © — Büşra Kaya</p>
    </footer>
  )
}