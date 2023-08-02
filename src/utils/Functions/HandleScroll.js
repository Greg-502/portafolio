export const HandleScroll = (ref) => {
    window.scrollTo({
        top: ref.offsetTop,
        left: 0,
        behavior: "smooth",
    });
};