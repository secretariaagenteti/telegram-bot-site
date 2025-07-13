module.exports = {
  darkMode: 'class',
  safelist: [
    // Layout backgrounds and text
    'bg-gray-100', 'text-gray-900', 'dark:bg-gray-900', 'dark:text-gray-100',
    // Header
    'border-b', 'bg-white/80', 'dark:bg-gray-950', 'backdrop-blur-sm', 'sticky', 'top-0', 'z-50',
    'container', 'mx-auto', 'px-4', 'py-4', 'flex', 'items-center', 'justify-between', 'space-x-2',
    'h-8', 'w-8', 'text-blue-600', 'text-xl', 'font-bold', 'text-gray-900', 'dark:text-white',
    'hidden', 'md:flex', 'space-x-6',
    'text-gray-600', 'hover:text-blue-600', 'transition-colors', 'dark:text-gray-300', 'dark:hover:text-blue-400',
    'bg-blue-600', 'hover:bg-blue-700', 'text-white', 'px-4', 'py-2', 'rounded-md',
    // FeaturesGrid
    'grid', 'md:grid-cols-2', 'lg:grid-cols-3', 'gap-8',
    'bg-white', 'dark:bg-gray-800', 'p-6', 'rounded-lg', 'shadow-lg', 'hover:shadow-xl', 'transition-shadow', 'flex-col',
    'w-24', 'h-24', 'mb-4', 'object-contain',
    'mb-2',
    // Text colors
    'text-gray-600', 'dark:text-gray-300',
    // CTA Section
    'py-20', 'px-4', 'bg-gradient-to-r', 'from-blue-600', 'to-purple-600', 'text-white',
    'max-w-4xl', 'text-center', 'text-3xl', 'md:text-4xl', 'mb-4', 'text-xl', 'opacity-90', 'mb-8',
    'justify-center', 'w-full', 'max-w-xs', 'sm:max-w-md', 'md:max-w-lg', 'lg:max-w-xl', 'xl:max-w-2xl',
    'mr-2', 'h-5', 'w-5', 'flex-1', 'ml-2',
    // Footer
    'relative', 'bg-gray-900', 'text-gray-100', 'dark:bg-gray-950', 'dark:text-gray-100', 'py-12', 'max-w-6xl',
    'justify-center', 'space-x-2', 'mb-4', 'text-blue-400', 'dark:text-blue-300', 'text-lg', 'font-bold', 'text-white',
    'text-sm', 'border-t', 'border-gray-800', 'dark:border-gray-700', 'pt-8', 'underline', 'hover:text-blue-400', 'dark:hover:text-blue-300',
    // Hero Section
    'inline-block', 'mb-4', 'bg-blue-100', 'text-blue-800', 'dark:bg-blue-950', 'dark:text-blue-200', 'px-3', 'py-1', 'rounded-full', 'leading-tight',
    'gap-4', 'sm:flex-row', 'justify-center', 'items-center',
    // Features Section
    'max-w-6xl', 'mb-16', 'max-w-2xl',
    // Misc
    'leading-relaxed',
  ],
  content: [
    './src/**/*.{astro,js,ts,jsx,tsx}',
    './public/**/*.html'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
