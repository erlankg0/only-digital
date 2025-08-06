import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'app', 'styles')],
    prependData: `@use 'variables' as *;`,
  },
};

export default nextConfig;