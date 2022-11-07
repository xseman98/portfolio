import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <title>Kristián Seman | Portfolio</title>
        <meta name="description" content="Kristian Seman portfolio website" />
        <link rel="icon" href="/profile.png" />
      </head>
      <body>
        <main>
          {children}
        </main>
        <footer>
          <section>
            <div>
              <p>Socials</p>
              <a href="/">...</a>
            </div>
            <div>
              <p>Phone</p>
              <a href="/">+420 774 968 728</a>
              <p>Email</p>
              <a href="/">seman.kris@gmail.com</a>
            </div>
          </section>
          <img src="/signature.png" alt="Signature" width={72} height={16} />
        </footer>
      </body>
    </html>
  )
}
