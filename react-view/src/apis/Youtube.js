import axios from 'axios';

const MYKEY = 'AIzaSyDI4JcEsaexRXXV2OWcl8I774mFCS7GIuI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        key: MYKEY,
        content: '공식 예고편'
    }
});