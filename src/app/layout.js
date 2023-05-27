import Header from "@/app/components/Header";
import './globals.css'

export const metadata = {
  title: 'MovieShare'
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Header/>
        {children}
        </body>
    </html>
  )
}
