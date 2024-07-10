import createNextIntlPlugin from  'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/.well-known/:file',
        destination: '/api/.well-known/:file',
        permanent: false,
      },
    ]
  },
    images: {
        remotePatterns: [{
          protocol: 'https',
          hostname: 'welp-prod.s3.amazonaws.com',
          port: '',
          pathname: '/media/**'
        }]
      },
      reactStrictMode: false,
};

export default withNextIntl(nextConfig);
