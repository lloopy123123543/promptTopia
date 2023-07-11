import '../styles/global.css'
export const metadata = {
    title: "Promptopia",
    description: "Dicsover & Share AI Prompts"
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body className='main'>
            <div className='gradient'></div>

            <main className="app">
                {children}

            </main>
        </body>
    </html>
  )
}

export default RootLayout