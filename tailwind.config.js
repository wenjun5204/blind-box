
/** @type {import('tailwindcss').Config} */
module.exports = {
    corePlugins: {
        preflight: false,
    },

    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            data: {
                'date-expire': 'date-expire="true"',
                multiple: 'multiple="true"',
            },
            animation: {
                'pop-in': 'pop-in 350ms cubic-bezier(0.25, 0.8, 0.25, 1) 1',
            },
            keyframes: {
                'pop-in': {
                    '0%': {
                        transform: 'translateY(100%)',
                        opacity: 0.5,
                    },
                    '100%': {
                        transform: 'translateY(0)',
                        opacity: 1,
                    },
                },
            },
            backgroundSize: {
                full: '100% 100%',
            },
            colors: {
                bg: '#F2F4F6', // 背景色
                main: '#6157FF', // 主色 text-base为默认字号设置，改为main
                grey: '#AFAFAF', // 灰色字体
                disable: '#CCC', // 置灰色
                highlight: '#FF1A6C', // 高亮色
                super: '#FF694A', // 超神色
                king: '#F25CCD', // 欧皇色
                hide: '#678FFF', // 隐藏款色
                normal: '#58CCCD', // 普通款色
            },
            gradientColorStops: (theme) => ({
                'base-g-start': '#7A68FD', // 主渐变色起始值
                'base-g-end': '#BD2AFA', // 主渐变色截止值
                'highlight-g-start': '#FF277C', // 高亮渐变色起始值
                'highlight-g-end': '#FF8055', // 高亮渐变色截止值
                'super-g-start': '#FF694A', // 超神渐变色起始值
                'super-g-end': '#FFA54A', // 超神渐变色截止值
                'king-g-start': '#F25CCD', // 欧皇渐变色起始值
                'king-g-end': '#F686FD', // 欧皇渐变色截止值
                'hide-g-start': '#678FFF', // 隐藏款渐变色起始值
                'hide-g-end': '#78BCFF', // 隐藏款渐变色截止值
                'normal-g-start': '#58CCCD', // 普通款渐变色起始值
                'normal-g-end': '#58CDB1', // 普通款渐变色截止值
            }),
        },
    },
};
