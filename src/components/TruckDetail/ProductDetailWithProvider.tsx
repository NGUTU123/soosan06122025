import React from 'react';
import { CompareProvider } from '@/contexts/CompareContextAstro';
import Header from '../Header';
import Footer from '../Footer';
import ScrollToTop from '../ScrollToTop';
import { Toaster } from '../ui/toaster';
import { Truck } from '@/models/TruckTypes';
import { OptimizedImage } from '@/components/ui/optimized-image';
import TruckActions from './TruckActions';
import ProductDetailTabs from './ProductDetailTabs';
import TruckItem from '@/components/TruckItem';

interface ProductDetailWithProviderProps {
  truck: Truck;
  relatedTrucks: Truck[];
}

const ProductDetailWithProvider: React.FC<ProductDetailWithProviderProps> = ({
  truck,
  relatedTrucks
}) => {
  return (
    <CompareProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <OptimizedImage
              src={truck.thumbnailUrl}
              alt={truck.name}
              className="w-full rounded-lg"
              useCase="product"
            />

            {truck.images && truck.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2 mt-4">
                {truck.images.slice(1, 5).map((img: string) => (
                  <OptimizedImage
                    key={img}
                    src={img}
                    alt={truck.name}
                    className="w-full rounded cursor-pointer hover:opacity-75"
                    useCase="thumbnail"
                  />
                ))}
              </div>
            )}
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-4">{truck.name}</h1>

            <div className="flex items-center gap-4 mb-6">
              {truck.isNew && (
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Mới</span>
              )}
              {truck.isHot && (
                <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Hot</span>
              )}
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <div className="text-3xl font-bold text-primary mb-2">
                {truck.priceText}
              </div>
              <p className="text-gray-600">Giá có thể thay đổi theo cấu hình</p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Thương hiệu:</span>
                <span className="font-semibold">{truck.brand}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tải trọng:</span>
                <span className="font-semibold">{truck.weightText}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Kích thước:</span>
                <span className="font-semibold">{truck.dimensions}</span>
              </div>
              {truck.origin && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Xuất xứ:</span>
                  <span className="font-semibold">{truck.origin}</span>
                </div>
              )}
            </div>

            <TruckActions truck={truck} />

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-700 mb-2">
                Liên hệ ngay để được tư vấn chi tiết và báo giá tốt nhất!
              </p>
              <a
                href="tel:0764678901"
                className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                Gọi ngay: 0764 6789 01
              </a>
            </div>
          </div>
        </div>

        <ProductDetailTabs truck={truck} />

        {relatedTrucks.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Sản phẩm liên quan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedTrucks.map((relatedTruck) => (
                <TruckItem key={relatedTruck.id} truck={relatedTruck} />
              ))}
            </div>
          </div>
        )}
          </div>
        </main>
        <Footer />
        <ScrollToTop />
        <Toaster />
      </div>
    </CompareProvider>
  );
};

export default ProductDetailWithProvider;
