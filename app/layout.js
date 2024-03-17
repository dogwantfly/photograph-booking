import ThemeRegistry from '@/app/components/ThemeRegistry';
import Footer from '@/app/components/Footer';

export const metadata = {
  title: {
    template: '%s | 隨旅拍',
    default: '隨旅拍',
  },
  description: '找到你的拍照神隊友',
};

export default function RootLayout(props) {
  const { children } = props;
  return (
    <html lang='zh-TW'>
      <body>
        <ThemeRegistry options={{ key: 'mui' }}>
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
