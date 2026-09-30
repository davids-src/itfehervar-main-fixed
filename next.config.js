/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  async redirects() {
    return [
      {
        source: '/szamitogep-szerviz-szekesfehervar',
        destination: '/szamitogep-segitseg',
        permanent: true,
      },
      {
        source: '/wifi-internet-segitseg-szekesfehervar',
        destination: '/wifi-halozat',
        permanent: true,
      },
      {
        source: '/ceges-it-szekesfehervar',
        destination: '/ceges-it',
        permanent: true,
      },
      {
        source: '/halozatepites-szekesfehervar',
        destination: '/wifi-halozat',
        permanent: true,
      },
      {
        source: '/uj-iroda-it',
        destination: '/ceges-it',
        permanent: true,
      },
      {
        source: '/adatkezeles',
        destination: '/adatvedelem',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
