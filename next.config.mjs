/** @type {import('next').NextConfig} */

const nextConfig = {
	reactCompiler: true,
	allowedDevOrigins: ["192.168.0.237"],
	experimental: {
		viewTransition: true,
	},
	// images: {
	//   remotePatterns: [
	//     {
	//       protocol: "https",
	//       hostname: "cdn.sanity.io",
	//     },
	//   ],
	// },
};

export default nextConfig;
