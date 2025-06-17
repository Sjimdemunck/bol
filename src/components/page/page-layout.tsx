import Header from './header';
import { Card, CardContent } from '@/components/ui/card';
import Footer from './footer';
import ProductFilter from '../product/product-filter';

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
                    Product Filter
                  </h2>
                  <Card>
                    <CardContent>
                      <ProductFilter />
                    </CardContent>
                  </Card>
                </section>
                <section aria-labelledby="section-1-title">
                  <Card>
                    <CardContent>Results A</CardContent>
                  </Card>
                </section>
              </div>

              {/* Right column */}
              <div className="grid grid-cols-1 gap-4">
                <section aria-labelledby="section-2-title">
                  <h2 id="section-2-title" className="sr-only">
                    Product summary
                  </h2>
                  <Card>
                    <CardContent>Product Summary or some sorts</CardContent>
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
