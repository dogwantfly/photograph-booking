import ThemeRegistry from '@components/ThemeRegistry';
import Footer from '@components/Footer';
import Navbar from './components/Navbar';

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
      <body
        style={{
          overflowX: 'hidden',
        }}
      >
        <ThemeRegistry options={{ key: 'mui' }}>
          <Navbar />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
