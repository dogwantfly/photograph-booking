import ThemeRegistry from '@components/ThemeRegistry';
import Navbar from './components/Navbar';

export const metadata = {
  title: '隨旅拍',
  description: '找到你的拍照神隊友',
}

export default function RootLayout(props) {
  const { children } = props;
  return (
    <html lang="zh-TW">
      <body
        style={{
          overflowX: 'hidden'
        }}
      >
        <ThemeRegistry options={{ key: 'mui' }}>
          <Navbar></Navbar>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
