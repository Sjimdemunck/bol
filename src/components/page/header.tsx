import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Bell, Menu as MenuIcon } from 'lucide-react';
import { cn } from '@/utils/utils';
import { user, userNavigation, navigation } from './page-layout.lib';
import { ModeToggle } from '../theme/theme-toggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-bol-primary text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <a href="/">
            <img src="/acme-logo.png" alt="Logo" className="h-10 w-auto" />
          </a>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                item.current
                  ? 'text-foreground font-semibold'
                  : 'text-muted-foreground',
                'text-sm hover:text-blue-100 text-blue-50'
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right side - Notifications + Profile  + Theme toggle*/}
        <div className="hidden items-center space-x-4 lg:flex">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="size-5" />
            <span className="sr-only">View notifications</span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <img
                  src={user.imageUrl}
                  alt={user.name}
                  className="size-8 rounded-full"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {userNavigation.map((item) => (
                <DropdownMenuItem key={item.name}>
                  <a href={item.href} className="w-full">
                    {item.name}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <ModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <MenuIcon className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[260px]">
              <div className="mb-6">
                <img src="/acme-logo.png" alt="Logo" className="h-10 w-auto" />
              </div>
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>

              <div className="mt-6 border-t pt-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={user.imageUrl}
                    alt={user.name}
                    className="size-10 rounded-full"
                  />
                  <div>
                    <div className="text-sm font-medium text-foreground">
                      {user.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {user.email}
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-1">
                  {userNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
