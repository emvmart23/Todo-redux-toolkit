interface Props {
  children: React.ReactNode
}

export default function AppLayout({ children }: Props) {
  return (
    <main className="h-full py-8">
      {children}
    </main>
  )
}