import Header from './header';
import { Card, CardContent } from '@/components/ui/card';
import Footer from './footer';
import { CategoryFilter } from '../category/category-filter';
import { Mail, Linkedin, Github } from 'lucide-react';
import { UserSocial } from './page-layout.lib';

export const iconMap = {
  Mail,
  GitHub: Github,
  Linkedin,
};

export default function PageLayout() {
  return (
    <>
      <div className="min-h-full">
        <Header />
        <main className="mt-8 pb-8">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {/* Main 3 column grid */}
            <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
              {/* Left column */}
              <div className="grid grid-cols-1 gap-8 lg:col-span-2">
                <section aria-labelledby="section-1-title">
                  <h2 id="section-1-title" className="sr-only">
                    Category Filter
                  </h2>
                  <Card>
                    <CardContent>
                      <h2 className="text-2xl">Multiselect filter - Inline</h2>
                      <span className="text-xs">
                        ⚠️ Both variants share the same store*
                        <br />
                        The second variant is just for demonstration of data
                        table filtering
                      </span>
                      <CategoryFilter />
                    </CardContent>
                  </Card>
                </section>
                <section aria-labelledby="section-1-title">
                  <Card>
                    <CardContent>
                      <h2 className="text-2xl">Multiselect filter - Popover</h2>
                      <span className="text-xs">
                        Can be used for filtering on data tables
                      </span>
                      <CategoryFilter variant="popover" />
                    </CardContent>
                  </Card>
                </section>
              </div>

              {/* Right column */}
              <div className="grid grid-cols-1 gap-4">
                <section aria-labelledby="section-2-title">
                  <h2 id="section-2-title" className="sr-only">
                    User info
                  </h2>
                  <Card>
                    <CardContent>
                      <h2 className="text-2xl mb-2">User Info</h2>
                      <p className="text-sm text-muted-foreground mb-4">
                        You can reach out via any of the platforms below.
                      </p>
                      <ul className="space-y-2">
                        {UserSocial.map((user) => {
                          const Icon =
                            iconMap[user.icon as keyof typeof iconMap];
                          return (
                            <li
                              key={user.name}
                              className="flex items-center transition-all hover:text-blue-600 dark:hover:text-blue-400"
                            >
                              <a
                                href={user.href}
                                className="flex items-center "
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {Icon && <Icon className="mr-2 size-5" />}
                                <span>{user.name}</span>
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </CardContent>
                  </Card>
                </section>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
