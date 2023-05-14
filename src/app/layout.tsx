import './globals.css'

export const metadata = {
  title: 'Todo app',
  description: 'Add your todos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
