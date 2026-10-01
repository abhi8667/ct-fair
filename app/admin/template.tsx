export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-4 py-8 animate-in fade-in slide-in-from-bottom-2 duration-500 md:px-8 md:py-10">
      {children}
    </div>
  )
}
