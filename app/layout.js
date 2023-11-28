import ThemeRegistry from '@components/ThemeRegistry';

export const metadata = {
  title: '隨旅拍',
  description: '找到你的拍照神隊友',
}

export default function RootLayout(props) {
  const { children } = props;
  return (
    <html lang="zh-TW">
      <body>
        <ThemeRegistry options={{ key: 'mui' }}>
        {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
