import ThemeRegistry from '@/app/components/ThemeRegistry';
import Footer from '@/app/components/Footer';

export const metadata = {
  title: {
    template: '%s | 隨旅拍',
    default: '隨旅拍',
  },
  description: '隨行攝影預約服務',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: 'mui' }}>
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
