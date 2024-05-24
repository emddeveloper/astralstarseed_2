
window.dataLayer = window.dataLayer || []
function gtag() {
    dataLayer.push(arguments)
}
gtag("js", new Date())

gtag("config", "UA-141176324-1")

// <!-- Facebook Pixel Code -->

!(function (f, b, e, v, n, t, s) {
    if (f.fbq) return
    n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    }
    if (!f._fbq) f._fbq = n
    n.push = n
    n.loaded = !0
    n.version = "2.0"
    n.queue = []
    t = b.createElement(e)
    t.async = !0
    t.src = v
    s = b.getElementsByTagName(e)[0]
    s.parentNode.insertBefore(t, s)
})(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js")
fbq("init", "703584596746130")
fbq("track", "PageView")
// <!-- End Facebook Pixel Code -->
// <!-- Install Pixel Code Facebook -->

fbq("track", "ViewContent", {
    value: 1,
    currency: "INR",
    content_ids: "1001"
})

// <!-- Install Pixel Code Facebook -->
// <!-- Global site tag (gtag.js) - Google Ads: 719616800 -->


window.dataLayer = window.dataLayer || []
function gtag() {
    dataLayer.push(arguments)
}
gtag("js", new Date())

gtag("config", "AW-719616800")

// <!-- Global site tag (gtag.js) - Google Ads: 719616800 -->

$("#myCarousel").carousel({
    interval: 5000,
    cycle: true,
    pause: "hover",
    autoplayHoverPause: true,
    nav: true
  })