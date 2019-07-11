function fromObjectToParams(object) {
    return `?${Object.keys(object)
        .filter(key => !!object[key])
        .map(key => `${key}=${encodeURIComponent(object[key])}`)
        .join(`&`)}`;
}

export function windowOpen(url, onShareWindowClose) {
    return () => {
        const name = ``;
        const height = 400;
        const width = 550;

        /* eslint-disable no-mixed-operators */
        const left = window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - width / 2;
        const top = window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - height / 2;
        /* eslint-enable no-mixed-operators */

        const config = {
            height,
            width,
            left,
            top,
            location: `no`,
            toolbar: `no`,
            status: `no`,
            directories: `no`,
            menubar: `no`,
            scrollbars: `yes`,
            resizable: `no`,
            centerscreen: `yes`,
            chrome: `yes`,
        };

        const shareDialog = window.open(
            url,
            name,
            Object.keys(config)
                .map(key => `${key}=${config[key]}`)
                .join(`, `),
        );

        if (onShareWindowClose) {
            const interval = window.setInterval(() => {
                try {
                    if (shareDialog === null || shareDialog.closed) {
                        window.clearInterval(interval);
                        onShareWindowClose(shareDialog);
                    }
                } catch (e) {
                    /* eslint-disable no-console */
                    console.error(e);
                    /* eslint-enable no-console */
                }
            }, 1000);
        }

        return shareDialog;
    };
}

export const socialLinks = {
    mail: ({ link, title }) =>
        `mailto:${fromObjectToParams({
            subject: title || ``,
            body: link,
        })}`,
    facebook: ({ link, excerpt, hashtag, title }) =>
        `https://facebook.com/sharer/sharer.php${fromObjectToParams({
            u: link || ``,
            quote: `${title} - ${excerpt}` || ``,
            hashtag: hashtag || ``,
        })}`,
    twitter: ({ link, excerpt, title }) =>
        `https://twitter.com/intent/tweet/${fromObjectToParams({
            text: `${title} - ${excerpt}`,
            url: link,
        })}`,
    linkedin: ({ link, excerpt, title }) =>
        `https://www.linkedin.com/shareArticle${fromObjectToParams({
            mini: true,
            url: link,
            title,
            summary: excerpt,
            source: link,
        })}`,
    whatsapp: ({ link, message }) =>
        `whatsapp://send?text=${encodeURIComponent(message)}%20${encodeURIComponent(link || ``)}`,
};
