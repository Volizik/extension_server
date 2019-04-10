const computers = [
    {
        name: 'Computer 1',
        id: '1',
        navigator: {
            hardwareConcurrency: 4, // ядра
            deviceMemory: 6, // Оперативка
            platform: 'Win32', // Операционка
            userAgent: 'Mozilla/5.0 (X11; Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.1',
            appVersion: '5.0 (X11)', // должен совпадать с юзерагентом
            vendor: '', // "Google Inc.", "Apple Computer, Inc.", or (in Firefox) the empty string.
            language: 'de-AU',
            languages: ['de', 'de-AU', 'en-US', 'en'],
            headerLanguages: 'de-AU,de;q=0.9,en-US;q=0.8,en;'
        },
        screen: {
            width: 1024, // Ширина экрана
            height: 768, // Высота экрана
            availLeft: 0, // Отступ слева
            availTop: 0, // Отступ сверху
            availWidth: 1024, // Ширина браузера
            availHeight: 708 // Высота браузера
        },
        window: {
            innerWidth: 1024, // Ширина вьюпорта браузера
            innerHeight: 672, // Высота вьюпорта браузера
            outerWidth: 1024, // Ширина браузера. Должно равняться availWidth
            outerHeight: 708, // Высота браузера. Должно равняться availHeight
            screenTop: 0, // Отступ сверху. Должен равняться availTop
            screenLeft: 0, // Отступ слева. Должен равняться availLeft
        },
        proxy: {
            username: 'user15633',
            password: 'kwdtxq',
            ip: '91.207.238.107',
            protocol: 'socks4',
            port: '40019'
        },
        webgl: {
            unmasked_vendor: 'Intel Open Source Technology Center 1',
            unmasked_renderer: 'Mesa DRI Intel(R) Ivybridge Mobile 1',
            salt: 0.001
        },
        canvas: {
            salt: 'q'
        }
    },
    {
        name: 'Computer 2',
        id: '2',
        navigator: {
            hardwareConcurrency: 12, // ядра
            deviceMemory: 12, // Оперативка
            platform: 'Win32', // Операционка
            userAgent: 'Mozilla/5.0 (X11; Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.1',
            appVersion: '5.0 (X11)', // должен совпадать с юзерагентом
            vendor: '', // "Google Inc.", "Apple Computer, Inc.", or (in Firefox) the empty string.
            language: 'de-AU',
            languages: ['de', 'de-AU', 'en-US', 'en'],
            headerLanguages: 'de-AU,de;q=0.9,en-US;q=0.8,en;'
        },
        screen: {
            width: 1024, // Ширина экрана
            height: 768, // Высота экрана
            availLeft: 0, // Отступ слева
            availTop: 0, // Отступ сверху
            availWidth: 1024, // Ширина браузера
            availHeight: 708 // Высота браузера
        },
        window: {
            innerWidth: 1024, // Ширина вьюпорта браузера
            innerHeight: 672, // Высота вьюпорта браузера
            outerWidth: 1024, // Ширина браузера. Должно равняться availWidth
            outerHeight: 708, // Высота браузера. Должно равняться availHeight
            screenTop: 0, // Отступ сверху. Должен равняться availTop
            screenLeft: 0, // Отступ слева. Должен равняться availLeft
        },
        proxy: {
            username: 'user15633',
            password: 'kwdtxq',
            ip: '91.207.238.107',
            protocol: 'socks4',
            port: '40019'
        },
        webgl: {
            unmasked_vendor: 'Intel Open Source Technology Center 2',
            unmasked_renderer: 'Mesa DRI Intel(R) Ivybridge Mobile 2',
            salt: 0.002
        },
        canvas: {
            salt: 'w'
        }
    },
];

module.exports.getAllComputers = async (ctx) => {
    ctx.body = computers
};
