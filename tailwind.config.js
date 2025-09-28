module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./*.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EBF5FB",
          100: "#D6EBF7",
          200: "#AED7EF",
          300: "#85C3E7",
          400: "#5CAFDF",
          500: "#2E86AB", // blue-600
          600: "#256B89",
          700: "#1C5067",
          800: "#133545",
          900: "#0A1A22",
          DEFAULT: "#2E86AB", // blue-600
        },
        secondary: {
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#F24236", // red-500
          600: "#DC2626",
          700: "#B91C1C",
          800: "#991B1B",
          900: "#7F1D1D",
          DEFAULT: "#F24236", // red-500
        },
        accent: {
          50: "#F0FDF4",
          100: "#DCFCE7",
          200: "#BBF7D0",
          300: "#86EFAC",
          400: "#4ADE80",
          500: "#86C232", // green-500
          600: "#16A34A",
          700: "#15803D",
          800: "#166534",
          900: "#14532D",
          DEFAULT: "#86C232", // green-500
        },
        background: "#FAFBFC", // gray-50
        surface: "#F1F3F5", // gray-100
        text: {
          primary: "#1A1B1E", // gray-900
          secondary: "#6B7280", // gray-500
        },
        success: "#10B981", // emerald-500
        warning: "#F59E0B", // amber-500
        error: "#EF4444", // red-500
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        accent: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 4px 12px rgba(0, 0, 0, 0.15)',
        'focus': '0 0 0 3px rgba(46, 134, 171, 0.1)',
      },
      borderRadius: {
        'default': '8px',
      },
      transitionDuration: {
        'fast': '200ms',
        'normal': '300ms',
      },
      transitionTimingFunction: {
        'ease-out': 'ease-out',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
        'bounce-gentle': 'bounceGentle 200ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}