import { MainNav } from "@/components/main-nav"
import { ModeToggle } from "@/components/mode-toggle"

export default async function MarketingLayout({ children }) {
  return (
    <div className="flex flex-col">
      <header className="z-40 bg-background px-7 lg:px-32">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav />
          <ModeToggle />
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}
