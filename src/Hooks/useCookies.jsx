import Cookies from 'universal-cookie';




const useCookies = () => {
    const cookies = new Cookies(null, { path: '/' });
    return cookies
};

export default useCookies;