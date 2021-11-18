// TODO: update facebook pixel id
export const FB_PIXEL_ID = "0"

export const pageview = () => {
    window.fbq('track', 'PageView')
}

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name, options = {}) => {
    window.fbq('track', name, options)
}
