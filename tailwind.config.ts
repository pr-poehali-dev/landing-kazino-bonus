import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}"
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				casino: {
					gold: '#FFD700',
					purple: '#8A2BE2',
					'purple-light': '#FF6B35',
					dark: '#1A1A2E',
					'dark-blue': '#16213E',
					gradient: 'linear-gradient(135deg, #FFD700 0%, #8A2BE2 100%)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'spin-slow': {
					from: { transform: 'rotate(0deg)' },
					to: { transform: 'rotate(360deg)' }
				},
				'pulse-gold': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'glow': {
					'0%, 100%': { 
						textShadow: '0 0 10px #FFD700, 0 0 20px #FFD700, 0 0 30px #FFD700',
						filter: 'drop-shadow(0 0 10px #FFD700)'
					},
					'50%': { 
						textShadow: '0 0 20px #FFD700, 0 0 30px #FFD700, 0 0 40px #FFD700',
						filter: 'drop-shadow(0 0 20px #FFD700)'
					}
				},
				'jackpot': {
					'0%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.1)' },
					'100%': { transform: 'scale(1)' }
				},
				'roulette': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'coins': {
					'0%': { transform: 'translateY(0px) rotate(0deg)' },
					'50%': { transform: 'translateY(-20px) rotate(180deg)' },
					'100%': { transform: 'translateY(0px) rotate(360deg)' }
				},
				'shake': {
					'0%, 100%': { transform: 'translateX(0)' },
					'10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
					'20%, 40%, 60%, 80%': { transform: 'translateX(5px)' }
				},
				'slot-spin': {
					'0%': { transform: 'rotateY(0deg)' },
					'100%': { transform: 'rotateY(360deg)' }
				},
				'neon-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 5px #FFD700, 0 0 10px #FFD700, 0 0 20px #FFD700',
						borderColor: '#FFD700'
					},
					'50%': { 
						boxShadow: '0 0 10px #8A2BE2, 0 0 20px #8A2BE2, 0 0 30px #8A2BE2',
						borderColor: '#8A2BE2'
					}
				},
				'bounce-in': {
					'0%': { transform: 'scale(0.3) translateY(50px)', opacity: '0' },
					'50%': { transform: 'scale(1.1) translateY(-10px)', opacity: '1' },
					'100%': { transform: 'scale(1) translateY(0)', opacity: '1' }
				},
				'counter-up': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'spin-slow': 'spin-slow 3s linear infinite',
				'pulse-gold': 'pulse-gold 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'float': 'float 3s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite',
				'jackpot': 'jackpot 1s ease-in-out infinite',
				'roulette': 'roulette 4s linear infinite',
				'coins': 'coins 3s ease-in-out infinite',
				'shake': 'shake 0.5s ease-in-out',
				'slot-spin': 'slot-spin 2s linear infinite',
				'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
				'bounce-in': 'bounce-in 0.6s ease-out',
				'counter-up': 'counter-up 0.5s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;