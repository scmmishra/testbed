module.exports = {
	purge: ["./src/**/*.svelte", "./public/*.html"],
	theme: {
		container: {
			padding: {
				default: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
			},
		},
		extend: {
			colors: {
				background: 'var(--bg-color)',
				foreground: 'var(--fg-color)',
				gray: {
					'100': 'var(--gray-100)',
					'200': 'var(--gray-200)',
					'300': 'var(--gray-300)',
					'400': 'var(--gray-400)',
					'500': 'var(--gray-500)',
					'600': 'var(--gray-600)',
					'700': 'var(--gray-700)',
					'800': 'var(--gray-800)',
					'900': 'var(--gray-900)',
				}
			}
		}
	},
	variants: {},
	plugins: []
};
